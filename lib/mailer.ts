import nodemailer from 'nodemailer';

export interface FormSubmissionPayload {
  id?: number | string | bigint;
  form_type: string;
  name?: string;
  email: string;
  company?: string;
  phone?: string;
  data_payload: Record<string, any>;
  ip_address?: string;
}

function getTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.hostinger.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const user = process.env.SMTP_USER || 'hello@tacit.exchange';
  const pass = process.env.SMTP_PASS || '1302@Sanjose';
  const secure = port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    pool: true,
    maxConnections: 3,
  });
}

function getFormTitle(formType: string): string {
  switch (formType) {
    case 'valuation_call':
      return 'Valuation & Offer Request';
    case 'catalogue_request':
      return 'Buyer Catalogue Request';
    case 'referral':
      return 'Partner Company Referral';
    case 'contact':
      return 'Direct Contact Message';
    default:
      return formType.replace(/_/g, ' ');
  }
}

/**
 * Sends notification of a new lead to iamvazu@gmail.com and hello@tacit.exchange.
 * Sending directly to hello@tacit.exchange deposits a copy into the hello@tacit.exchange inbox.
 */
export async function sendLeadNotificationEmail(submission: FormSubmissionPayload) {
  try {
    const transporter = getTransporter();
    const formTitle = getFormTitle(submission.form_type);
    const fromAddress = process.env.SMTP_FROM || '"Tacit Form Desk" <hello@tacit.exchange>';

    const notifyRecipients = process.env.NOTIFY_EMAIL
      ? process.env.NOTIFY_EMAIL.split(',').map((e) => e.trim()).filter(Boolean)
      : ['iamvazu@gmail.com', 'hello@tacit.exchange'];

    if (!notifyRecipients.includes('iamvazu@gmail.com')) {
      notifyRecipients.push('iamvazu@gmail.com');
    }
    if (!notifyRecipients.includes('hello@tacit.exchange')) {
      notifyRecipients.push('hello@tacit.exchange');
    }

    const subject = `[Tacit Lead] ${formTitle} from ${submission.name || submission.email} (${submission.company || 'Direct'})`;

    const detailsRows = Object.entries(submission.data_payload || {})
      .filter(([key]) => !['website_url_hp', 'hp_field'].includes(key))
      .map(
        ([key, val]) =>
          `<tr>
            <td style="padding: 8px 12px; border: 1px solid #e4e0d7; font-weight: 600; color: #141011; background: #faf9f6; width: 35%;">${key.replace(/_/g, ' ').toUpperCase()}</td>
            <td style="padding: 8px 12px; border: 1px solid #e4e0d7; color: #141011;">${Array.isArray(val) ? val.join(', ') : String(val)}</td>
          </tr>`
      )
      .join('');

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #141011; background-color: #faf9f5; margin: 0; padding: 24px; }
          .card { background: #ffffff; border: 2px solid #141011; border-radius: 6px; padding: 28px; max-width: 620px; margin: 0 auto; box-shadow: 4px 4px 0px #141011; }
          .badge { display: inline-block; background: #e0f2fe; color: #0369a1; border: 1px solid #7dd3fc; padding: 4px 10px; font-size: 12px; font-weight: 700; border-radius: 4px; text-transform: uppercase; margin-bottom: 16px; }
          h2 { margin: 0 0 16px; font-size: 22px; color: #141011; }
          table { width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px; }
          .footer { margin-top: 24px; padding-top: 16px; border-top: 1px solid #e4e0d7; font-size: 12px; color: #78716c; }
        </style>
      </head>
      <body>
        <div class="card">
          <span class="badge">${formTitle}</span>
          <h2>New Lead Received on Tacit</h2>
          <p style="font-size: 15px; line-height: 1.5; color: #4a4646;">
            A new form submission was received on <strong>tacit.exchange</strong>. Details are listed below:
          </p>

          <table>
            <tbody>
              <tr>
                <td style="padding: 8px 12px; border: 1px solid #e4e0d7; font-weight: 600; color: #141011; background: #faf9f6; width: 35%;">LEAD NAME</td>
                <td style="padding: 8px 12px; border: 1px solid #e4e0d7; font-weight: 700; color: #141011;">${submission.name || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; border: 1px solid #e4e0d7; font-weight: 600; color: #141011; background: #faf9f6;">EMAIL</td>
                <td style="padding: 8px 12px; border: 1px solid #e4e0d7; color: #141011;">
                  <a href="mailto:${submission.email}" style="color: #2563eb; font-weight: 600; text-decoration: none;">${submission.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; border: 1px solid #e4e0d7; font-weight: 600; color: #141011; background: #faf9f6;">COMPANY / ORG</td>
                <td style="padding: 8px 12px; border: 1px solid #e4e0d7; color: #141011;">${submission.company || 'Not specified'}</td>
              </tr>
              ${
                submission.phone
                  ? `<tr>
                      <td style="padding: 8px 12px; border: 1px solid #e4e0d7; font-weight: 600; color: #141011; background: #faf9f6;">PHONE</td>
                      <td style="padding: 8px 12px; border: 1px solid #e4e0d7; color: #141011;">
                        <a href="tel:${submission.phone}" style="color: #141011; font-weight: 700;">${submission.phone}</a>
                      </td>
                    </tr>`
                  : ''
              }
              <tr>
                <td style="padding: 8px 12px; border: 1px solid #e4e0d7; font-weight: 600; color: #141011; background: #faf9f6;">SUBMISSION ID</td>
                <td style="padding: 8px 12px; border: 1px solid #e4e0d7; font-family: monospace; color: #4a4646;">#${submission.id || 'N/A'}</td>
              </tr>
              ${detailsRows}
            </tbody>
          </table>

          <div style="margin-top: 24px; padding: 14px; background: #fefce8; border: 1px solid #fef08a; border-radius: 4px; font-size: 13px; color: #854d0e;">
            💡 <strong>Quick Action:</strong> Click "Reply" in your email client to reply directly to <strong>${submission.email}</strong>.
          </div>

          <div class="footer">
            Received: ${new Date().toUTCString()} · Client IP: ${submission.ip_address || '127.0.0.1'}<br/>
            Tacit Lead Engine · <a href="https://tacit.exchange/admin" style="color: #4a4646;">Admin Dashboard</a>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
NEW LEAD ON TACIT: ${formTitle}
------------------------------------------
Name: ${submission.name || 'N/A'}
Email: ${submission.email}
Company: ${submission.company || 'N/A'}
Phone: ${submission.phone || 'N/A'}
ID: #${submission.id || 'N/A'}
Time: ${new Date().toISOString()}
IP: ${submission.ip_address || '127.0.0.1'}

Full Details:
${JSON.stringify(submission.data_payload, null, 2)}
    `.trim();

    await transporter.sendMail({
      from: fromAddress,
      to: notifyRecipients,
      replyTo: submission.name ? `"${submission.name}" <${submission.email}>` : submission.email,
      subject,
      text: textContent,
      html: htmlContent,
    });
  } catch (error) {
    console.error('Failed to send lead notification email:', error);
  }
}

/**
 * Sends an automated confirmation email to the user stating their request was received
 * and one of our team members will reach out to them within 24 hours.
 */
export async function sendUserConfirmationEmail(
  userEmail: string,
  userName?: string,
  formType: string = 'inquiry'
) {
  try {
    const transporter = getTransporter();
    const fromAddress = process.env.SMTP_FROM || '"Tacit" <hello@tacit.exchange>';
    const greeting = userName ? `Hello ${userName}` : 'Hello';
    const formTitle = getFormTitle(formType);

    const subject = 'We have received your request | Tacit';

    const textContent = `
${greeting},

Thank you for reaching out to Tacit.

We have received your request and one of our team members will reach out to you in the 24 hours.

If you have any urgent questions or would prefer to speak with our team right away, please feel free to call our desk directly at (408) 657-6116 or reply directly to this email.

Best regards,

The Tacit Team
Direct Phone: (408) 657-6116
Email: hello@tacit.exchange
Website: https://tacit.exchange
Inception2c LLC d/b/a Tacit
    `.trim();

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #141011; background-color: #faf9f5; margin: 0; padding: 24px; }
          .card { background: #ffffff; border: 2px solid #141011; border-radius: 6px; padding: 32px; max-width: 580px; margin: 0 auto; box-shadow: 4px 4px 0px #141011; }
          .brand-header { display: flex; align-items: center; gap: 10px; margin-bottom: 24px; }
          .brand-icon { width: 32px; height: 32px; background: #141011; color: #faf9f5; font-weight: 800; font-size: 16px; border-radius: 4px; display: inline-flex; align-items: center; justify-content: center; }
          .brand-name { font-size: 20px; font-weight: 800; color: #141011; }
          h1 { font-size: 22px; margin: 0 0 16px; color: #141011; font-weight: 800; }
          p { font-size: 15px; line-height: 1.6; color: #333333; margin: 0 0 16px; }
          .highlight-box { background: #faf9f6; border: 1.5px solid #e4e0d7; border-radius: 6px; padding: 18px 20px; margin: 24px 0; }
          .phone-cta { display: inline-block; background: #141011; color: #ffffff !important; text-decoration: none; padding: 10px 18px; border-radius: 4px; font-weight: 700; font-size: 14px; margin-top: 8px; }
          .footer { margin-top: 32px; padding-top: 20px; border-top: 1px solid #e4e0d7; font-size: 12px; color: #78716c; line-height: 1.6; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="brand-header">
            <div class="brand-icon">T</div>
            <span class="brand-name">Tacit</span>
          </div>

          <h1>We have received your request</h1>

          <p>${greeting},</p>

          <p>
            Thank you for reaching out to Tacit regarding your <strong>${formTitle.toLowerCase()}</strong>.
          </p>

          <p>
            We have received your request and one of our team members will reach out to you in the <strong>24 hours</strong>.
          </p>

          <div class="highlight-box">
            <strong style="display: block; margin-bottom: 6px; font-size: 14px; color: #141011;">Prefer to speak with us right away?</strong>
            <span style="font-size: 14px; color: #4a4646; display: block; margin-bottom: 12px;">
              Our direct phone line is open. You can reach our team directly or reply to this email:
            </span>
            <a href="tel:+14086576116" class="phone-cta">
              📞 Call (408) 657-6116
            </a>
          </div>

          <p style="margin-bottom: 0;">
            Best regards,<br/>
            <strong>The Tacit Team</strong><br/>
            <span style="font-size: 13px; color: #666666;">Inception2c LLC d/b/a Tacit</span>
          </p>

          <div class="footer">
            Tacit · Operational Data Licensing Brokerage<br/>
            Direct Phone: <a href="tel:+14086576116" style="color: #141011; font-weight: 600;">(408) 657-6116</a> · Email: <a href="mailto:hello@tacit.exchange" style="color: #141011;">hello@tacit.exchange</a><br/>
            Web: <a href="https://tacit.exchange" style="color: #141011;">https://tacit.exchange</a>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: fromAddress,
      to: userEmail,
      replyTo: 'hello@tacit.exchange',
      subject,
      text: textContent,
      html: htmlContent,
    });
  } catch (error) {
    console.error('Failed to send user confirmation email:', error);
  }
}

/**
 * Legacy compatibility helper
 */
export async function sendNotificationEmail(subject: string, textContent: string, htmlContent?: string) {
  try {
    const transporter = getTransporter();
    const fromAddress = process.env.SMTP_FROM || '"Tacit" <hello@tacit.exchange>';
    const notifyRecipients = process.env.NOTIFY_EMAIL
      ? process.env.NOTIFY_EMAIL.split(',').map((e) => e.trim()).filter(Boolean)
      : ['iamvazu@gmail.com', 'hello@tacit.exchange'];

    await transporter.sendMail({
      from: fromAddress,
      to: notifyRecipients,
      subject: `[Tacit Site Submission] ${subject}`,
      text: textContent,
      html: htmlContent || `<pre style="font-family:monospace;white-space:pre-wrap;">${textContent}</pre>`,
    });
  } catch (error) {
    console.error('Legacy notification send failed:', error);
  }
}
