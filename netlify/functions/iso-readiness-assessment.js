// Escapes text so it can never be interpreted as HTML/links inside an email.
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// The "ISO Readiness Assessment" list in Brevo. Confirmed live at ID 10.
const ASSESSMENT_LIST_ID = 10;

// Flat day rates by standard — 9001/14001/45001 (QHSE) vs 27001/42001 (information
// security / AI). Mirrors the same logic in the page component.
const INFOSEC_STANDARDS = ['27001', '42001'];
const RATE_QHSE = 750;
const RATE_INFOSEC = 850;

const TIER_INFO = {
  1: { label: 'Audit only', days: 4 },
  2: { label: 'Implementation only', days: 15 },
  3: { label: 'Implementation + audit', days: 19 },
  4: { label: 'Integrated, multi-standard', days: 25 },
};

function rateForStandards(standards) {
  const real = (standards || []).filter((s) => s !== 'not_sure');
  if (real.length === 0) return null;
  const usesInfosec = real.some((s) => INFOSEC_STANDARDS.includes(s));
  return usesInfosec ? RATE_INFOSEC : RATE_QHSE;
}

function money(days, rate) {
  const fmt = (n) => '£' + n.toLocaleString('en-GB');
  return fmt(days * rate);
}

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request' }) };
  }

  const email = body.email ? String(body.email).trim().toLowerCase().slice(0, 254) : null;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Valid email required' }) };
  }

  const name = body.name ? String(body.name).trim().slice(0, 100) : '';
  const company = body.company ? String(body.company).trim().slice(0, 150) : '';
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company);

  const API_KEY = process.env.BREVO_API_KEY;
  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    'api-key': API_KEY,
  };

  // --- Branch 1: the optional Q&A follow-up (after the main assessment) ---
  if (body.followUp) {
    const answers = body.qaAnswers || {};
    const safeAnswers = Object.fromEntries(
      Object.entries(answers).map(([k, v]) => [k, escapeHtml(String(v || '').slice(0, 2000))])
    );

    try {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          sender: { name: 'Anacruses Website', email: 'rob.pragnell@anacruses.co.uk' },
          to: [{ email: 'rob.pragnell@anacruses.co.uk', name: 'Rob Pragnell' }],
          subject: `ISO Readiness Assessment — extra details from ${safeName || safeEmail}`,
          htmlContent: `
<html><body style="font-family:Arial,sans-serif;padding:24px;color:#2D3748;">
  <h2 style="color:#1F4E79;margin-top:0;">Extra details from the readiness assessment</h2>
  <p><strong>Name:</strong> ${safeName || '(not provided)'}<br>
     <strong>Company:</strong> ${safeCompany || '(not provided)'}<br>
     <strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
  <table style="border-collapse:collapse;width:100%;max-width:560px;">
    ${Object.entries(safeAnswers)
      .filter(([, v]) => v)
      .map(
        ([k, v]) => `
    <tr>
      <td style="padding:8px 12px;background:#F5F7FA;font-weight:bold;color:#1F4E79;vertical-align:top;width:160px;">${escapeHtml(k)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${v}</td>
    </tr>`
      )
      .join('')}
  </table>
</body></html>`,
        }),
      });
    } catch (err) {
      console.error('Q&A follow-up email error:', err);
      // Non-essential — don't fail the request over this.
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  }

  // --- Branch 2: the main assessment submission ---
  const sector = body.sector ? String(body.sector).slice(0, 100) : '';
  const standards = Array.isArray(body.standards) ? body.standards.slice(0, 10) : [];
  const status = body.status ? String(body.status).slice(0, 50) : '';
  const suggestedTier = [1, 2, 3, 4].includes(body.suggestedTier) ? body.suggestedTier : null;

  const safeSector = escapeHtml(sector);
  const safeStandards = escapeHtml(standards.join(', '));
  const safeStatus = escapeHtml(status);

  // 1. Add/update contact in Brevo
  try {
    const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: name,
          COMPANY: company,
          SECTOR: sector,
          STANDARDS_NEEDED: standards.join(', '),
          CURRENT_STATUS: status,
          SUGGESTED_TIER: suggestedTier || '',
        },
        listIds: [ASSESSMENT_LIST_ID],
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

  // Build the tier table for the result email. If no real standard was selected
  // (only "not sure"), show day counts without a cost — no rate can be shown yet.
  const emailRate = rateForStandards(standards);
  const tierRowsHtml = Object.entries(TIER_INFO)
    .map(([key, t]) => {
      const isSuggested = Number(key) === suggestedTier;
      const rateLine = emailRate ? `${t.days}+ days at £${emailRate}/day` : `${t.days}+ days`;
      const costCell = emailRate ? money(t.days, emailRate) : '—';
      return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;${isSuggested ? 'background:#F5F7FA;' : ''}">
        <strong style="color:#1F4E79;">${t.label}</strong>${isSuggested ? ' <span style="color:#B8860B;font-size:11px;font-weight:bold;text-transform:uppercase;">Likely fit</span>' : ''}<br>
        <span style="color:#718096;font-size:12px;">${rateLine}</span>
      </td>
      <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;text-align:right;white-space:nowrap;${isSuggested ? 'background:#F5F7FA;' : ''}">
        <strong style="color:#1F4E79;">${costCell}</strong>
      </td>
    </tr>`;
    })
    .join('');

  // 2. Send the estimate email to the lead
  try {
    const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        sender: { name: 'Rob Pragnell — Anacruses Associates', email: 'rob.pragnell@anacruses.co.uk' },
        to: [{ email, name: name || email }],
        replyTo: { email: 'rob.pragnell@anacruses.co.uk' },
        subject: 'Your ISO Readiness Estimate',
        htmlContent: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="background:#1F4E79;padding:28px 32px;">
            <p style="margin:0;color:#B8860B;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:2px;">Anacruses Associates Ltd</p>
            <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;line-height:1.3;">Your ISO Readiness Estimate</h1>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:32px;">
            <p style="margin:0 0 16px;color:#2D3748;font-size:15px;line-height:1.6;">${name ? `Hi ${safeName},` : 'Hi,'}</p>
            <p style="margin:0 0 20px;color:#2D3748;font-size:15px;line-height:1.6;">Based on what you told us${safeCompany ? ` about ${safeCompany}` : ''}, here's a rough day-count and cost for each type of engagement — the same reference we use to scope every real project.</p>
            <table cellpadding="0" cellspacing="0" style="width:100%;margin:0 0 20px;border-collapse:collapse;">
              ${tierRowsHtml}
            </table>
            <p style="margin:0 0 16px;color:#2D3748;font-size:15px;line-height:1.6;">This is a starting point, not a quote — the right tier for you depends on details a quick call sorts out far better than a form ever could.</p>
            <table cellpadding="0" cellspacing="0" style="margin:8px 0 24px;">
              <tr>
                <td style="background:#B8860B;border-radius:4px;">
                  <a href="https://www.anacruses.co.uk/contact"
                     style="display:inline-block;padding:14px 28px;color:#1F4E79;font-weight:bold;font-size:15px;text-decoration:none;">
                    Book a free call →
                  </a>
                </td>
              </tr>
            </table>
            <p style="margin:0;color:#2D3748;font-size:15px;line-height:1.6;">
              Best regards,<br><br>
              <strong>Rob Pragnell</strong><br>
              CQI/IRCA Certified Lead Auditor — ISO 9001, 14001, 27001, 45001 &amp; 42001<br>
              Anacruses Associates Ltd<br>
              <a href="https://www.anacruses.co.uk" style="color:#B8860B;">anacruses.co.uk</a> &nbsp;|&nbsp;
              <a href="tel:07792259840" style="color:#B8860B;">07792 259840</a>
            </p>
          </td>
        </tr>
        <tr>
          <td style="background:#1F4E79;padding:16px 32px;">
            <p style="margin:0;color:#8899aa;font-size:11px;line-height:1.5;">
              You received this email because you completed the ISO Readiness Assessment on anacruses.co.uk.
              Your data is held securely and will never be shared with third parties.
              <a href="https://www.anacruses.co.uk/contact" style="color:#B8860B;">Unsubscribe</a>
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

  // 3. Notify Rob
  try {
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        sender: { name: 'Anacruses Website', email: 'rob.pragnell@anacruses.co.uk' },
        to: [{ email: 'rob.pragnell@anacruses.co.uk', name: 'Rob Pragnell' }],
        subject: `New readiness assessment: ${safeName || safeEmail}${safeCompany ? ` (${safeCompany})` : ''}`,
        htmlContent: `
<html><body style="font-family:Arial,sans-serif;padding:24px;color:#2D3748;">
  <h2 style="color:#1F4E79;margin-top:0;">New ISO Readiness Assessment completed</h2>
  <table style="border-collapse:collapse;width:100%;max-width:520px;">
    <tr><td style="padding:8px 12px;background:#F5F7FA;font-weight:bold;color:#1F4E79;width:140px;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${safeName || '(not provided)'}</td></tr>
    <tr><td style="padding:8px 12px;background:#F5F7FA;font-weight:bold;color:#1F4E79;">Company</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${safeCompany || '(not provided)'}</td></tr>
    <tr><td style="padding:8px 12px;background:#F5F7FA;font-weight:bold;color:#1F4E79;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
    <tr><td style="padding:8px 12px;background:#F5F7FA;font-weight:bold;color:#1F4E79;">Sector</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${safeSector}</td></tr>
    <tr><td style="padding:8px 12px;background:#F5F7FA;font-weight:bold;color:#1F4E79;">Standard(s)</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${safeStandards}</td></tr>
    <tr><td style="padding:8px 12px;background:#F5F7FA;font-weight:bold;color:#1F4E79;">Status</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${safeStatus}</td></tr>
    <tr><td style="padding:8px 12px;background:#F5F7FA;font-weight:bold;color:#1F4E79;">Suggested tier</td><td style="padding:8px 12px;">${suggestedTier ? TIER_INFO[suggestedTier].label : 'Not clear from answers'}</td></tr>
  </table>
  <p style="margin-top:24px;">
    <a href="mailto:${safeEmail}?subject=Your ISO Readiness Assessment"
       style="display:inline-block;background:#1F4E79;color:#ffffff;padding:10px 20px;border-radius:4px;text-decoration:none;font-weight:bold;">
      Reply to ${safeName || safeEmail} →
    </a>
  </p>
  <p style="color:#888;font-size:12px;margin-top:24px;">Added to Brevo list ${ASSESSMENT_LIST_ID} (verify this is the correct list). Will also be picked up by the Mini-Assessment Lead Intake task and added to the Leads Tracker.</p>
</body></html>`,
      }),
    });
  } catch (err) {
    console.error('Notification email error:', err);
  }

  return { statusCode: 200, body: JSON.stringify({ success: true }) };
};
