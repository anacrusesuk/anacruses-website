"""
generate_insight.py
Anacruses Associates — automated Insights article generator

Searches for current ISO news and trends, then uses the Claude API to write
a draft Insights article in Rob Pragnell's voice. Saves to content/insights/drafts/
and opens it in Notepad for review.

Schedule: Monday 09:00 via Windows Task Scheduler
Run manually: python generate_insight.py

Requirements:
    pip install anthropic requests python-frontmatter

Environment variables required:
    ANTHROPIC_API_KEY   — your Anthropic API key (Console: console.anthropic.com)
"""

import os
import sys
import json
import subprocess
import requests
import anthropic
from datetime import datetime
from pathlib import Path

# ─── CONFIG ──────────────────────────────────────────────────────────────────

ANTHROPIC_API_KEY = os.environ.get('ANTHROPIC_API_KEY', '')
DRAFTS_DIR        = Path(__file__).parent / 'content' / 'insights' / 'drafts'
INSIGHTS_DIR      = Path(__file__).parent / 'content' / 'insights'

# Rotating topic seeds — used to guide the search if no strong news found
TOPIC_SEEDS = [
    "ISO 9001 quality management",
    "ISO 14001 environmental management",
    "ISO 27001 information security",
    "ISO 45001 occupational health safety",
    "ISO 42001 AI governance",
    "UKAS accreditation UK",
    "ISO certification UK business",
    "ISO audit preparation",
    "management system integration",
    "ISO standard revision update",
]

# ─── HELPERS ─────────────────────────────────────────────────────────────────

def get_existing_titles():
    """Return set of existing article titles to avoid duplication."""
    titles = set()
    for md_file in INSIGHTS_DIR.glob('*.md'):
        for line in md_file.read_text(encoding='utf-8').splitlines():
            if line.startswith('title:'):
                titles.add(line.replace('title:', '').strip().strip('"\''))
    return titles


def pick_topic_seed():
    """Pick a topic seed based on week number to rotate through the list."""
    week = datetime.today().isocalendar()[1]
    return TOPIC_SEEDS[week % len(TOPIC_SEEDS)]


def search_iso_news(topic):
    """Search for recent ISO news using a free news API."""
    try:
        # Using NewsAPI — free tier allows 100 requests/day
        # If you have a NewsAPI key, set it as NEWS_API_KEY env var
        # Otherwise falls back to topic seed only
        news_api_key = os.environ.get('NEWS_API_KEY', '')
        if not news_api_key:
            print("No NEWS_API_KEY set — using topic seed only (no live news search)")
            return []

        url = "https://newsapi.org/v2/everything"
        params = {
            'q': topic,
            'language': 'en',
            'sortBy': 'publishedAt',
            'pageSize': 5,
            'apiKey': news_api_key,
        }
        r = requests.get(url, params=params, timeout=10)
        r.raise_for_status()
        articles = r.json().get('articles', [])
        return [
            {'title': a['title'], 'description': a.get('description', ''), 'url': a['url']}
            for a in articles if a.get('title') and a.get('description')
        ]
    except Exception as e:
        print(f"News search failed: {e} — continuing without live news")
        return []


def generate_article(topic, news_items, existing_titles):
    """Call Claude API to generate a draft Insights article."""
    if not ANTHROPIC_API_KEY:
        print("ERROR: ANTHROPIC_API_KEY environment variable is not set.")
        print("Run: set ANTHROPIC_API_KEY=your_key_here")
        sys.exit(1)

    client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

    news_context = ""
    if news_items:
        news_context = "\n\nRecent news context (use as inspiration, do not copy):\n"
        for item in news_items[:3]:
            news_context += f"- {item['title']}: {item['description']}\n"

    existing_context = ""
    if existing_titles:
        existing_context = f"\n\nAlready published articles (do not duplicate these topics):\n"
        for title in existing_titles:
            existing_context += f"- {title}\n"

    prompt = f"""You are writing an Insights article for Anacruses Associates, a UK ISO management systems consultancy run by Rob Pragnell, a CQI/IRCA Lead Auditor with 20+ years of experience across ISO 9001, 14001, 27001, 45001, and 42001.

Topic area: {topic}
{news_context}
{existing_context}

Write a practical, expert-level Insights article in Rob's voice. His style is:
- Direct and authoritative, like a senior consultant talking to a business director
- No fluff or padding — every sentence earns its place
- British English spelling throughout
- Practical focus: what businesses actually need to know, not theoretical overviews
- Honest about costs, timelines, and what auditors actually look for
- Subtly positions Anacruses as the expert without being salesy

The article should:
- Be 400-600 words
- Cover a specific, practical question UK businesses search for
- Include 3-5 subheadings using **bold** markdown format
- Use inline **bold** for key terms where appropriate
- Be genuinely useful — something that builds trust before a prospect picks up the phone

Output ONLY the following YAML frontmatter followed by the article body. Nothing else before or after:

---
title: "TITLE HERE"
date: "{datetime.today().strftime('%Y-%m-%d')}"
excerpt: "EXCERPT HERE — one sentence, 150 chars max"
tag: "ISO XXXX"
---

ARTICLE BODY HERE"""

    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1500,
        messages=[{"role": "user", "content": prompt}]
    )

    return message.content[0].text


def slug_from_title(title):
    """Convert a title to a URL-safe slug."""
    import re
    title = title.lower()
    title = re.sub(r'[^a-z0-9\s-]', '', title)
    title = re.sub(r'\s+', '-', title.strip())
    title = re.sub(r'-+', '-', title)
    return title[:80]


def extract_title(content):
    """Extract title from frontmatter."""
    for line in content.splitlines():
        if line.startswith('title:'):
            return line.replace('title:', '').strip().strip('"\'')
    return f"iso-insight-{datetime.today().strftime('%Y-%m-%d')}"


# ─── MAIN ────────────────────────────────────────────────────────────────────

def main():
    print("=" * 60)
    print("Anacruses Insights Generator")
    print(f"Running at {datetime.now().strftime('%H:%M on %A %d %B %Y')}")
    print("=" * 60)

    # Ensure drafts directory exists
    DRAFTS_DIR.mkdir(parents=True, exist_ok=True)

    # Pick topic
    topic = pick_topic_seed()
    print(f"\nTopic seed: {topic}")

    # Search for news
    print("Searching for recent ISO news...")
    news_items = search_iso_news(topic)
    if news_items:
        print(f"Found {len(news_items)} news items")
    else:
        print("No news items found — generating from topic seed")

    # Get existing titles
    existing_titles = get_existing_titles()
    print(f"Existing articles: {len(existing_titles)}")

    # Generate article
    print("\nGenerating article via Claude API...")
    content = generate_article(topic, news_items, existing_titles)

    # Save to drafts
    title = extract_title(content)
    slug = slug_from_title(title)
    filename = f"{datetime.today().strftime('%Y-%m-%d')}-{slug}.md"
    draft_path = DRAFTS_DIR / filename

    draft_path.write_text(content, encoding='utf-8')
    print(f"\n✅ Draft saved: {draft_path}")
    print(f"   Title: {title}")

    # Open in Notepad for review
    print("\nOpening draft in Notepad for your review...")
    print("When happy, run: python publish_insight.py")
    subprocess.Popen(['notepad.exe', str(draft_path)])


if __name__ == '__main__':
    main()
