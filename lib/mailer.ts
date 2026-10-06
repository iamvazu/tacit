import nodemailer from 'nodemailer';

export async function sendNotificationEmail(subject: string, textContent: string, htmlContent?: string) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const notifyTo = process.env.NOTIFY_EMAIL;

  // Skip silently if SMTP is not fully configured
  if (!host || !user || !pass || !notifyTo) {
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: port ? parseInt(port, 10) : 587,
      secure: port === '465',
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || user,
      to: notifyTo,
      subject: `[Tacit Site Submission] ${subject}`,
      text: textContent,
      html: htmlContent || `<pre style="font-family:monospace;white-space:pre-wrap;">${textContent}</pre>`,
    });
  } catch (error) {
    console.error('SMTP notification send failed (silent fallback):', error);
  }
}
