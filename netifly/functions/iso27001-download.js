exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  let email, name;
  try {
    const body = JSON.parse(event.body);
    email = body.email ? body.email.trim().toLowerCase() : null;
    name  = body.name  ? body.name.trim()                : '';
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request' }) };
  }

  if (!email || !email.includes('@')) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Valid email required' }) };
  }

  const API_KEY = process.env.BREVO_API_KEY;
  const headers = {
    'accept':       'application/json',
    'content-type': 'application/json',
    'api-key':      API_KEY,
  };

  // 1. Add contact to Brevo List 6 (ISO 27001 Leads)
  try {
    const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: name },
        listIds: [6],
        updateEnabled: true,
      }),
    });

    // 409 = contact already exists — that's fine, we still send the email
    if (!contactRes.ok && contactRes.status !== 409) {
      const err = await contactRes.text();
      console.error('Brevo contact error:', err);
      return { statusCode: 500, body: JSON.stringify({ error: 'Could not save contact' }) };
    }
  } catch (err) {
    console.error('Brevo contact fetch error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Network error saving contact' }) };
  }

  // 2. Send welcome email with PDF link
  try {
    const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        sender: {
          name:  'Rob Pragnell — Anacruses Associates',
          email: 'rob.pragnell@anacruses.co.uk',
        },
        to: [{ email, name: name || email }],
        replyTo: { email: 'rob.pragnell@anacruses.co.uk' },
        subject: 'Your ISO 27001 Certification Checklist',
        htmlContent: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#1B2A4A;padding:28px 32px;">
            <p style="margin:0;color:#C9A84C;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:2px;">Anacruses Associates Ltd</p>
            <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;line-height:1.3;">Your ISO 27001 Certification Checklist</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:32px;">
            <p style="margin:0 0 16px;color:#2D3748;font-size:15px;line-height:1.6;">
              ${name ? `Hi ${name},` : 'Hi,'}
            </p>
            <p style="margin:0 0 16px;color:#2D3748;font-size:15px;line-height:1.6;">
              Thank you for downloading the ISO 27001 Certification Checklist. Your PDF is ready below.
            </p>

            <!-- CTA Button -->
            <table cellpadding="0" cellspacing="0" style="margin:24px 0;">
              <tr>
                <td style="background:#C9A84C;border-radius:4px;">
                  <a href="https://www.anacruses.co.uk/ISO-27001-Certification-Checklist-UK.pdf"
                     style="display:inline-block;padding:14px 28px;color:#1B2A4A;font-weight:bold;font-size:15px;text-decoration:none;">
                    Download Your Checklist →
                  </a>
                </td>
              </tr>
            </table>

            <p style="margin:0 0 16px;color:#2D3748;font-size:15px;line-height:1.6;">
              The checklist covers all seven areas your certification body will examine — from scope and risk assessment through to internal audit and continual improvement. Every item marked <strong>Required</strong> must be evidenced before your Stage 2 audit.
            </p>
            <p style="margin:0 0 16px;color:#2D3748;font-size:15px;line-height:1.6;">
              If anything on the checklist raises questions about your own position, I am happy to have a free, no-obligation conversation. You can book a call at the link below or simply reply to this email.
            </p>

            <!-- Secondary CTA -->
            <table cellpadding="0" cellspacing="0" style="margin:8px 0 24px;">
              <tr>
                <td style="border:2px solid #1B2A4A;border-radius:4px;">
                  <a href="https://www.anacruses.co.uk/contact"
                     style="display:inline-block;padding:12px 24px;color:#1B2A4A;font-weight:bold;font-size:14px;text-decoration:none;">
                    Book a free consultation
                  </a>
                </td>
              </tr>
            </table>

            <p style="margin:0;color:#2D3748;font-size:15px;line-height:1.6;">
              Best regards,<br><br>
              <strong>Rob Pragnell</strong><br>
              CQI/IRCA Certified Lead Auditor — ISO 9001, 14001, 27001, 45001 &amp; 42001<br>
              Anacruses Associates Ltd<br>
              <a href="https://www.anacruses.co.uk" style="color:#C9A84C;">anacruses.co.uk</a> &nbsp;|&nbsp;
              <a href="tel:07792259840" style="color:#C9A84C;">07792 259840</a>
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#1B2A4A;padding:16px 32px;">
            <p style="margin:0;color:#8899aa;font-size:11px;line-height:1.5;">
              You received this email because you requested the ISO 27001 Certification Checklist from anacruses.co.uk.
              Your data is held securely and will never be shared with third parties.
              <a href="https://www.anacruses.co.uk/contact" style="color:#C9A84C;">Unsubscribe</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
      }),
    });

    if (!emailRes.ok) {
      const err = await emailRes.text();
      console.error('Brevo email error:', err);
      return { statusCode: 500, body: JSON.stringify({ error: 'Could not send email' }) };
    }
  } catch (err) {
    console.error('Brevo email fetch error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Network error sending email' }) };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
};
