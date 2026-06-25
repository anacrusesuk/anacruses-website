"""
weekly_newsletter.py
Anacruses Associates — weekly digest emailer

Reads the most recent Insights articles from content/insights/ and sends
a digest email to the Brevo mailing list via the Brevo Transactional Email API.

Usage:
    python weekly_newsletter.py            # sends to real list
    python weekly_newsletter.py --dry-run  # prints the email body, no send

Requirements:
    pip install requests python-frontmatter

Setup:
    Set your Brevo API key as an environment variable:
        set BREVO_API_KEY=your_key_here      (Windows)
    Or edit BREVO_API_KEY directly in CONFIG below (not recommended for shared machines).

    Also set BREVO_LIST_ID to the ID of your newsletter list in Brevo
    (find it under Contacts > Lists in the Brevo dashboard).
"""

import os
import sys
import json
import argparse
import requests
import frontmatter
from pathlib import Path
from datetime import datetime

# ─── CONFIG ──────────────────────────────────────────────────────────────────

BREVO_API_KEY  = os.environ.get('BREVO_API_KEY', '')   # set as env var
BREVO_LIST_ID  = 2                                      # update to your list ID
FROM_EMAIL     = 'rob@anacruses.co.uk'
FROM_NAME      = 'Rob Pragnell — Anacruses Associates'
REPLY_TO       = 'rob@anacruses.co.uk'
SITE_URL       = 'https://www.anacruses.co.uk'
ARTICLES_DIR   = Path(__file__).parent / 'content' / 'insights'
MAX_ARTICLES   = 3    # number of recent articles to include per digest

# ─── HELPERS ─────────────────────────────────────────────────────────────────

def load_recent_articles(n=MAX_ARTICLES):
    """Return the n most recent Insights articles as dicts."""
    articles = []
    for md_file in ARTICLES_DIR.glob('*.md'):
        post = frontmatter.load(str(md_file))
        articles.append({
            'slug':    md_file.stem,
            'title':   post.get('title', 'Untitled'),
            'date':    str(post.get('date', '')),
            'excerpt': post.get('excerpt', post.content[:200].replace('\n', ' ') + '…'),
            'tag':     post.get('tag', None),
        })
    articles.sort(key=lambda a: a['date'], reverse=True)
    return articles[:n]


def build_subject(articles):
    """Build a subject line from the latest article title."""
    if not articles:
        return 'ISO Insights from Anacruses Associates'
    return f"ISO Insights: {articles[0]['title']}"


def build_html(articles):
    """Build the HTML email body."""
    today = datetime.today().strftime('%-d %B %Y')

    article_blocks = ''
    for a in articles:
        url = f"{SITE_URL}/insights/{a['slug']}/"
        tag_html = f'<span style="background:#1F4E79;color:white;padding:2px 8px;border-radius:3px;font-size:11px;font-weight:600;">{a["tag"]}</span><br><br>' if a['tag'] else ''
        article_blocks += f"""
        <div style="border-left:4px solid #B8860B;padding:0 0 0 16px;margin-bottom:28px;">
          {tag_html}
          <a href="{url}" style="font-size:17px;font-weight:700;color:#1F4E79;text-decoration:none;">{a['title']}</a>
          <p style="color:#555;font-size:13px;margin:6px 0 10px;">{a['excerpt']}</p>
          <a href="{url}" style="color:#B8860B;font-size:13px;font-weight:600;text-decoration:none;">Read the full article →</a>
        </div>"""

    return f"""
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:white;border-radius:6px;overflow:hidden;max-width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#1F4E79;padding:24px 32px;">
            <p style="margin:0;color:#B8860B;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Anacruses Associates</p>
            <h1 style="margin:6px 0 0;color:white;font-size:22px;font-weight:700;">ISO Insights</h1>
            <p style="margin:4px 0 0;color:#93c5fd;font-size:12px;">{today}</p>
          </td>
        </tr>

        <!-- Intro -->
        <tr>
          <td style="padding:24px 32px 8px;">
            <p style="color:#333;font-size:14px;line-height:1.6;margin:0;">
              Here's the latest practical ISO guidance from a working CQI Lead Auditor —
              real answers to the questions businesses ask before they pick up the phone.
            </p>
          </td>
        </tr>

        <!-- Articles -->
        <tr>
          <td style="padding:16px 32px 24px;">
            {article_blocks}
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="background:#f8f9fa;padding:20px 32px;border-top:1px solid #e5e7eb;">
            <p style="color:#333;font-size:13px;margin:0 0 12px;">
              Thinking about ISO certification? Book a free, no-obligation call.
            </p>
            <a href="{SITE_URL}/contact/"
               style="background:#1F4E79;color:white;padding:10px 20px;border-radius:4px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">
              Book a free consultation
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:16px 32px;border-top:1px solid #e5e7eb;">
            <p style="color:#9ca3af;font-size:11px;margin:0;line-height:1.6;">
              Anacruses Associates Ltd &middot; Company No. 14420827 &middot; VAT No. 468 6796 17<br>
              Hertfordshire, UK &middot;
              <a href="{SITE_URL}" style="color:#9ca3af;">{SITE_URL}</a><br><br>
              You're receiving this because you subscribed at anacruses.co.uk.
              <a href="{{{{ unsubscribe }}}}" style="color:#9ca3af;">Unsubscribe</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>"""


def build_text(articles):
    """Build plain-text fallback."""
    today = datetime.today().strftime('%-d %B %Y')
    lines = [
        f"ISO INSIGHTS — Anacruses Associates — {today}",
        "=" * 60,
        "",
        "Practical ISO guidance from a working CQI Lead Auditor.",
        "",
    ]
    for a in articles:
        url = f"{SITE_URL}/insights/{a['slug']}/"
        lines += [
            f"• {a['title']}",
            f"  {a['excerpt']}",
            f"  Read more: {url}",
            "",
        ]
    lines += [
        "-" * 60,
        f"Book a free consultation: {SITE_URL}/contact/",
        "",
        "Anacruses Associates Ltd | Company No. 14420827",
        "To unsubscribe: {{ unsubscribe }}",
    ]
    return "\n".join(lines)


def get_subscribers():
    """Fetch active subscriber email addresses from Brevo list."""
    url = f"https://api.brevo.com/v3/contacts/lists/{BREVO_LIST_ID}/contacts?limit=500&offset=0"
    headers = {'api-key': BREVO_API_KEY, 'accept': 'application/json'}
    r = requests.get(url, headers=headers, timeout=15)
    r.raise_for_status()
    data = r.json()
    contacts = data.get('contacts', [])
    # Return only subscribed (not unsubscribed) contacts
    return [c['email'] for c in contacts if not c.get('emailBlacklisted', False)]


def send_campaign(subject, html_body, text_body, to_emails):
    """
    Send via Brevo Transactional Email (sends one email per recipient).
    For large lists use Brevo Campaigns API instead — see README note below.
    """
    url = "https://api.brevo.com/v3/smtp/email"
    headers = {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
        'accept': 'application/json',
    }

    to_list = [{"email": email} for email in to_emails]

    payload = {
        "sender":  {"name": FROM_NAME, "email": FROM_EMAIL},
        "replyTo": {"email": REPLY_TO},
        "to":      to_list,
        "subject": subject,
        "htmlContent": html_body,
        "textContent": text_body,
    }

    r = requests.post(url, headers=headers, json=payload, timeout=30)
    r.raise_for_status()
    return r.json()


# ─── MAIN ────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description='Anacruses weekly newsletter sender')
    parser.add_argument('--dry-run', action='store_true',
                        help='Print the email content without sending')
    args = parser.parse_args()

    articles = load_recent_articles()
    if not articles:
        print("No articles found in content/insights/. Nothing to send.")
        sys.exit(0)

    subject   = build_subject(articles)
    html_body = build_html(articles)
    text_body = build_text(articles)

    print(f"Subject : {subject}")
    print(f"Articles: {len(articles)}")
    for a in articles:
        print(f"  - {a['title']} ({a['date']})")

    if args.dry_run:
        print("\n─── HTML PREVIEW (first 1000 chars) ───")
        print(html_body[:1000])
        print("\n─── TEXT BODY ───")
        print(text_body)
        print("\n[DRY RUN — no email sent]")
        return

    if not BREVO_API_KEY:
        print("\nERROR: BREVO_API_KEY environment variable is not set.")
        print("Run:  set BREVO_API_KEY=your_key_here")
        sys.exit(1)

    print("\nFetching subscribers from Brevo...")
    subscribers = get_subscribers()
    print(f"Found {len(subscribers)} active subscriber(s).")

    if not subscribers:
        print("No subscribers — nothing sent.")
        return

    print("Sending...")
    result = send_campaign(subject, html_body, text_body, subscribers)
    print(f"Sent. Brevo response: {json.dumps(result, indent=2)}")

    # NOTE: Brevo's free transactional API sends to all recipients in one call.
    # If your list grows large (500+), switch to the Campaigns API so Brevo
    # handles the unsubscribe link properly. The html_body already includes
    # {{ unsubscribe }} as a placeholder for Brevo's campaign engine.


if __name__ == '__main__':
    main()
