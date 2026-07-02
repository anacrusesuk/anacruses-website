// Escapes text so it can never be interpreted as HTML/links inside an email.
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  let email, name;
  try {
    const body = JSON.parse(event.body);
    email = body.email ? body.email.trim().toLowerCase().slice(0, 254) : null;
    name  = body.name  ? body.name.trim().slice(0, 100)                : '';
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request' }) };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Valid email required' }) };
  }

  // Safe versions for dropping into HTML emails (raw email/name still used for the Brevo API calls below).
  const safeName  = escapeHtml(name);
  const safeEmail = escapeHtml(email);

  const API_KEY = process.env.BREVO_API_KEY;
  const headers = {
    'accept':       'application/json',
    'content-type': 'application/json',
    'api-key':      API_KEY,
  };

  // 1. Add contact to Brevo List 8 (ISO 45001 Leads)
  try {
    const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: name },
        listIds: [8],
        updateEnabled: true,
      }),
    });
    if (!contactRes.ok && contactRes.status !== 409) {
      const err = await contactRes.text();
      console.error('Brevo contact error:', err);
      return { statusCode: 500, body: JSON.stringify({ error: 'Could not save contact' }) };
    }
  } catch (err) {
    console.error('Brevo contact fetch error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Network error saving contact' }) };
  }

  // 2. Send welcome email to the lead
  try {
    const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        sender: { name: 'Rob Pragnell — Anacruses Associates', email: 'rob.pragnell@anacruses.co.uk' },
        to: [{ email, name: name || email }],
        replyTo: { email: 'rob.pragnell@anacruses.co.uk' },
        subject: 'Your ISO 45001 Certification Checklist',
        htmlContent: `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:32px 0;">
<tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
<tr><td style="background:#1B2A4A;padding:28px 32px;">
<p style="margin:0;color:#C9A84C;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:2px;">Anacruses Associates Ltd</p>
<h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;line-height:1.3;">Your ISO 45001 Certification Checklist</h1>
</td></tr>
<tr><td style="background:#ffffff;padding:32px;">
<p style="margin:0 0 16px;color:#2D3748;font-size:15px;line-height:1.6;">${name ? `Hi ${safeName},` : 'Hi,'}</p>
<p style="margin:0 0 16px;color:#2D3748;font-size:15px;line-height:1.6;">Thank you for downloading the ISO 45001 Certification Checklist. Your PDF is ready below.</p>
<table cellpadding="0" cellspacing="0" style="margin:24px 0;"><tr>
<td style="background:#C9A84C;border-radius:4px;">
<a href="https://www.anacruses.co.uk/ISO-45001-Certification-Checklist-UK.pdf"
   style="display:inline-block;padding:14px 28px;color:#1B2A4A;font-weight:bold;font-size:15px;text-decoration:none;">
Download Your Checklist →</a></td></tr></table>
<p style="margin:0 0 16px;color:#2D3748;font-size:15px;line-height:1.6;">The checklist covers all seven areas your certification body will examine — from context and leadership through to incident investigation and continual improvement. Every item marked <strong>Required</strong> must be evidenced before your Stage 2 audit.</p>
<p style="margin:0 0 16px;color:#2D3748;font-size:15px;line-height:1.6;">If anything on the checklist raises questions about your own position, I am happy to have a free, no-obligation conversation. You can book a call at the link below or simply reply to this email.</p>
<table cellpadding="0" cellspacing="0" style="margin:8px 0 24px;"><tr>
<td style="border:2px solid #1B2A4A;border-radius:4px;">
<a href="https://www.anacruses.co.uk/contact"
   style="display:inline-block;padding:12px 24px;color:#1B2A4A;font-weight:bold;font-size:14px;text-decoration:none;">
Book a free consultation</a></td></tr></table>
<p style="margin:0;color:#2D3748;font-size:15px;line-height:1.6;">Best regards,<br><br>
<strong>Rob Pragnell</strong><br>
CQI/IRCA Certified Lead Auditor — ISO 9001, 14001, 27001, 45001 &amp; 42001<br>
Anacruses Associates Ltd<br>
<a href="https://www.anacruses.co.uk" style="color:#C9A84C;">anacruses.co.uk</a> &nbsp;|&nbsp;
<a href="tel:07792259840" style="color:#C9A84C;">07792 259840</a></p>
</td></tr>
<tr><td style="background:#1B2A4A;padding:16px 32px;">
<p style="margin:0;color:#8899aa;font-size:11px;line-height:1.5;">You received this email because you requested the ISO 45001 Certification Checklist from anacruses.co.uk. Your data is held securely and will never be shared with third parties.
<a href="https://www.anacruses.co.uk/contact" style="color:#C9A84C;">Unsubscribe</a></p>
</td></tr></table></td></tr></table></body></html>`,
      }),
    });
    if (!emailRes.ok) {
      console.error('Brevo email error:', await emailRes.text());
      return { statusCode: 500, body: JSON.stringify({ error: 'Could not send email' }) };
    }
  } catch (err) {
    console.error('Email fetch error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Network error sending email' }) };
  }

  // 3. Notify Rob
  try {
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        sender: { name: 'Anacruses Website', email: 'rob.pragnell@anacruses.co.uk' },
        to: [{ email: 'rob.pragnell@anacruses.co.uk', name: 'Rob Pragnell' }],
        subject: `New ISO 45001 lead: ${safeName || safeEmail}`,
        htmlContent: `<html><body style="font-family:Arial,sans-serif;padding:24px;color:#2D3748;">
<h2 style="color:#1B2A4A;margin-top:0;">New ISO 45001 checklist download</h2>
<table style="border-collapse:collapse;width:100%;max-width:480px;">
<tr><td style="padding:8px 12px;background:#EAF2F8;font-weight:bold;color:#1B2A4A;width:120px;">Name</td>
<td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${safeName || '(not provided)'}</td></tr>
<tr><td style="padding:8px 12px;background:#EAF2F8;font-weight:bold;color:#1B2A4A;">Email</td>
<td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;"><a href="mailto:${safeEmail}" style="color:#C9A84C;">${safeEmail}</a></td></tr>
<tr><td style="padding:8px 12px;background:#EAF2F8;font-weight:bold;color:#1B2A4A;">Source</td>
<td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">ISO 45001 Checklist download — anacruses.co.uk</td></tr>
<tr><td style="padding:8px 12px;background:#EAF2F8;font-weight:bold;color:#1B2A4A;">Time</td>
<td style="padding:8px 12px;">${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</td></tr>
</table>
<p style="margin-top:24px;"><a href="mailto:${safeEmail}?subject=Your ISO 45001 Certification Checklist"
style="display:inline-block;background:#1B2A4A;color:#ffffff;padding:10px 20px;border-radius:4px;text-decoration:none;font-weight:bold;">
Reply to ${safeName || safeEmail} →</a></p>
<p style="color:#888;font-size:12px;margin-top:24px;">This lead has been added to Brevo ISO 45001 Leads (List 8).</p>
</body></html>`,
      }),
    });
  } catch (err) {
    console.error('Notification error:', err);
  }

  return { statusCode: 200, body: JSON.stringify({ success: true }) };
};
