"""
generate_newsletter.py
Anacruses Associates — fortnightly newsletter draft generator

Uses Claude API to write a newsletter digest based on the most recent
Insights articles. Saves the draft as an HTML file on your Desktop
and opens it in Notepad for review.

After reviewing and editing the draft, send it by running:
    python send_newsletter.py

Schedule: Every other Monday 08:30 via Windows Task Scheduler
Run manually: python generate_newsletter.py

Requirements:
    pip install anthropic requests python-frontmatter

Environment variables required:
    ANTHROPIC_API_KEY   — your Anthropic API key
    BREVO_API_KEY       — your Brevo API key
"""

import os
import sys
import json
import subprocess
import anthropic
import frontmatter
from datetime import datetime
from pathlib import Path

# ─── CONFIG ──────────────────────────────────────────────────────────────────

ANTHROPIC_API_KEY = os.environ.get('ANTHROPIC_API_KEY', '')
SITE_URL          = 'https://www.anacruses.co.uk'
FROM_EMAIL        = 'rob.pragnell@anacruses.co.uk'
FROM_NAME         = 'Rob Pragnell — Anacruses Associates'
ARTICLES_DIR      = Path(__file__).parent / 'content' / 'insights'
DRAFT_DIR         = Path.home() / 'Desktop'
DRAFT_FILE        = DRAFT_DIR / 'newsletter_draft.html'
MAX_ARTICLES      = 3

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
            'body':    post.content[:800],
        })
    articles.sort(key=lambda a: a['date'], reverse=True)
    return articles[:n]


def generate_intro(articles):
    """Use Claude to write a short personalised intro paragraph."""
    if not ANTHROPIC_API_KEY:
        print("ERROR: ANTHROPIC_API_KEY not set.")
        sys.exit(1)

    client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

    titles = "\n".join([f"- {a['title']}" for a in articles])

    prompt = f"""You are writing the opening paragraph of a fortnightly email newsletter for Anacruses Associates, a UK ISO management systems consultancy run by Rob Pragnell, a CQI/IRCA Lead Auditor.

This issue covers these articles:
{titles}

Write a single short paragraph (3-4 sentences max) as Rob, in first person, introducing this issue of the newsletter. 
- Direct and warm, like a trusted adviser writing to a client
- British English
- Reference 1-2 of the topics naturally
- No fluff, no "I hope this email finds you well"
- End with something that makes them want to read on

Output ONLY the paragraph text, nothing else."""

    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=200,
        messages=[{"role": "user", "content": prompt}]
    )
    return message.content[0].text.strip()


def build_html(articles, intro):
    """Build the full HTML newsletter."""
    today = datetime.today().strftime('%d %B %Y')

    article_blocks = ''
    for a in articles:
        url = f"{SITE_URL}/insights/{a['slug']}/"
        tag_html = f'<span style="background:#1F4E79;color:white;padding:2px 8px;border-radius:3px;font-size:11px;font-weight:600;">{a["tag"]}</span><br><br>' if a['tag'] else ''
        article_blocks += f"""
        <div style="border-left:4px solid #B8860B;padding:0 0 0 16px;margin-bottom:28px;">
          {tag_html}
          <a href="{url}" style="font-size:17px;font-weight:700;color:#1F4E79;text-decoration:none;">{a['title']}</a>
          <p style="color:#555;font-size:13px;margin:6px 0 10px;line-height:1.6;">{a['excerpt']}</p>
          <a href="{url}" style="color:#B8860B;font-size:13px;font-weight:600;text-decoration:none;">Read the full article →</a>
        </div>"""

    return f"""<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ISO Insights — {today}</title>
</head>
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
            <p style="color:#333;font-size:14px;line-height:1.7;margin:0;">
              {intro}
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
              Hertfordshire, UK &middot; <a href="{SITE_URL}" style="color:#9ca3af;">{SITE_URL}</a><br><br>
              You're receiving this because you subscribed at anacruses.co.uk.
              <a href="{{unsubscribe}}" style="color:#9ca3af;">Unsubscribe</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>"""


def save_draft(html):
    """Save the draft HTML file to Desktop."""
    DRAFT_FILE.write_text(html, encoding='utf-8')
    print(f"\n✅ Draft saved to: {DRAFT_FILE}")


def open_draft():
    """Open the draft in Notepad for review."""
    print("Opening draft in Notepad for your review...")
    print("Edit the intro or article excerpts if needed, then save and close.")
    print("\nWhen happy, run:  python send_newsletter.py")
    subprocess.Popen(['notepad.exe', str(DRAFT_FILE)])


# ─── MAIN ────────────────────────────────────────────────────────────────────

def main():
    print("=" * 60)
    print("Anacruses Newsletter Generator")
    print(f"Running at {datetime.now().strftime('%H:%M on %A %d %B %Y')}")
    print("=" * 60)

    # Load articles
    print("\nLoading recent Insights articles...")
    articles = load_recent_articles()
    if not articles:
        print("No articles found in content/insights/. Nothing to generate.")
        sys.exit(0)

    print(f"Found {len(articles)} articles:")
    for a in articles:
        print(f"  - {a['title']} ({a['date']})")

    # Generate intro
    print("\nGenerating intro via Claude API...")
    intro = generate_intro(articles)
    print(f"Intro: {intro[:80]}...")

    # Build HTML
    html = build_html(articles, intro)

    # Save and open
    save_draft(html)
    open_draft()


if __name__ == '__main__':
    main()
