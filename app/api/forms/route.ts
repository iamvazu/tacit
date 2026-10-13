import { NextRequest, NextResponse } from 'next/server';
import { saveSubmission, SubmissionInput } from '@/lib/db';
import { checkRateLimit } from '@/lib/rate-limit';
import { sendLeadNotificationEmail, sendUserConfirmationEmail } from '@/lib/mailer';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
               req.headers.get('x-real-ip') ||
               '127.0.0.1';

    // Rate limiting
    if (!checkRateLimit(ip, 12, 60 * 1000)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a minute and try again.' },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot check
    if (body.website_url_hp || body.hp_field) {
      // Return fake success to bots
      return NextResponse.json({ success: true, message: 'Submission received' }, { status: 200 });
    }

    const formType = body.form_type;
    if (!['valuation_call', 'catalogue_request', 'referral', 'contact'].includes(formType)) {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
    }

    // Server-side validation
    const email = body.email ? String(body.email).trim() : '';
    const name = body.name ? String(body.name).trim() : '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    if (!name && formType !== 'valuation_call') {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }

    let company = body.company || body.organization || '';
    const phone = body.phone ? String(body.phone).trim() : undefined;

    // Clean payload
    const payload = { ...body };
    delete payload.website_url_hp;
    delete payload.hp_field;

    const submissionData: SubmissionInput = {
      form_type: formType,
      name: name || undefined,
      email: email,
      company: company || undefined,
      data_payload: payload,
      ip_address: ip,
    };

    const id = saveSubmission(submissionData);

    // Send emails:
    // 1. Lead notification with full form details to iamvazu@gmail.com and hello@tacit.exchange inbox
    // 2. Automated user confirmation from hello@tacit.exchange within 24hr response promise
    await Promise.allSettled([
      sendLeadNotificationEmail({
        id,
        form_type: formType,
        name: name || undefined,
        email,
        company: company || undefined,
        phone,
        data_payload: payload,
        ip_address: ip,
      }),
      sendUserConfirmationEmail(email, name || undefined, formType),
    ]);

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your information has been received. Our team will follow up promptly.',
      id,
    });
  } catch (error: any) {
    console.error('Error handling form submission:', error);
    return NextResponse.json({ error: 'An unexpected server error occurred.' }, { status: 500 });
  }
}
