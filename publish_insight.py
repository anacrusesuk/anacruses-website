"""
publish_insight.py
Anacruses Associates — Insights article publisher

Finds the most recent draft in content/insights/drafts/, moves it to
content/insights/, regenerates the sitemap, commits and pushes to GitHub.
Netlify deploys automatically. LinkedIn post fires automatically.

Run after reviewing a draft: python publish_insight.py

Optional: python publish_insight.py --list   (see all drafts without publishing)
"""

import os
import sys
import shutil
import subprocess
import argparse
from pathlib import Path
from datetime import datetime

# ─── CONFIG ──────────────────────────────────────────────────────────────────

DRAFTS_DIR   = Path(__file__).parent / 'content' / 'insights' / 'drafts'
INSIGHTS_DIR = Path(__file__).parent / 'content' / 'insights'
SITEMAP_SCRIPT = Path(__file__).parent / 'scripts' / 'generate-sitemap.js'

# ─── HELPERS ─────────────────────────────────────────────────────────────────

def get_drafts():
    """Return list of draft files sorted by modification time, newest first."""
    if not DRAFTS_DIR.exists():
        return []
    drafts = list(DRAFTS_DIR.glob('*.md'))
    return sorted(drafts, key=lambda f: f.stat().st_mtime, reverse=True)


def extract_title(path):
    """Extract title from frontmatter."""
    for line in path.read_text(encoding='utf-8').splitlines():
        if line.startswith('title:'):
            return line.replace('title:', '').strip().strip('"\'')
    return path.stem


def run(cmd, cwd=None):
    """Run a shell command and print output."""
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd=cwd)
    if result.stdout:
        print(result.stdout.strip())
    if result.stderr:
        print(result.stderr.strip())
    return result.returncode


# ─── MAIN ────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description='Publish an Insights draft')
    parser.add_argument('--list', action='store_true', help='List drafts without publishing')
    parser.add_argument('--file', type=str, help='Specific draft filename to publish (optional)')
    args = parser.parse_args()

    drafts = get_drafts()

    if not drafts:
        print("No drafts found in content/insights/drafts/")
        print("Run generate_insight.py first to create a draft.")
        sys.exit(0)

    # List mode
    if args.list:
        print(f"\nDrafts available ({len(drafts)}):")
        for i, d in enumerate(drafts):
            print(f"  {i+1}. {d.name}")
            print(f"     {extract_title(d)}")
        return

    # Pick draft to publish
    if args.file:
        draft_path = DRAFTS_DIR / args.file
        if not draft_path.exists():
            print(f"ERROR: Draft not found: {args.file}")
            sys.exit(1)
    else:
        draft_path = drafts[0]
        print(f"\nMost recent draft: {draft_path.name}")

    title = extract_title(draft_path)
    print(f"Title: {title}")

    # Confirm
    confirm = input("\nPublish this article? (y/n): ").strip().lower()
    if confirm != 'y':
        print("Cancelled. Article remains in drafts/")
        sys.exit(0)

    # Move to insights
    dest = INSIGHTS_DIR / draft_path.name
    # Remove date prefix from filename if present (keep slug clean)
    clean_name = draft_path.name
    # If filename starts with date like 2026-06-25-, strip it
    import re
    clean_name = re.sub(r'^\d{4}-\d{2}-\d{2}-', '', clean_name)
    dest = INSIGHTS_DIR / clean_name

    shutil.move(str(draft_path), str(dest))
    print(f"\n✅ Moved to: {dest}")

    # Regenerate sitemap
    print("\nRegenerating sitemap...")
    repo_root = Path(__file__).parent
    returncode = run(f'node "{SITEMAP_SCRIPT}"', cwd=str(repo_root))
    if returncode != 0:
        print("WARNING: Sitemap regeneration failed — continuing anyway")

    # Git commit and push
    print("\nCommitting and pushing to GitHub...")
    run('git add .', cwd=str(repo_root))
    commit_msg = f"publish insight: {title[:60]}"
    run(f'git commit -m "{commit_msg}"', cwd=str(repo_root))
    run('git push', cwd=str(repo_root))

    print("\n" + "=" * 60)
    print("✅ Article published successfully")
    print(f"   Netlify will deploy in ~1 minute")
    print(f"   LinkedIn will post automatically on deploy")
    print("=" * 60)


if __name__ == '__main__':
    main()
