"""
remind_insight.py
Anacruses Associates — Insights draft reminder

Shows a Windows notification reminding Rob to review and publish
the draft Insights article generated at 9am.

Schedule: Monday 12:00 via Windows Task Scheduler
"""

import subprocess
from pathlib import Path

DRAFTS_DIR = Path(__file__).parent / 'content' / 'insights' / 'drafts'


def get_draft_count():
    if not DRAFTS_DIR.exists():
        return 0
    return len(list(DRAFTS_DIR.glob('*.md')))


def show_notification(title, message):
    """Show a Windows toast notification via PowerShell."""
    script = f"""
Add-Type -AssemblyName System.Windows.Forms
$notify = New-Object System.Windows.Forms.NotifyIcon
$notify.Icon = [System.Drawing.SystemIcons]::Information
$notify.Visible = $true
$notify.ShowBalloonTip(10000, '{title}', '{message}', [System.Windows.Forms.ToolTipIcon]::Info)
Start-Sleep -Seconds 10
$notify.Dispose()
"""
    subprocess.run(['powershell', '-Command', script], capture_output=True)


def main():
    draft_count = get_draft_count()

    if draft_count == 0:
        # No drafts — either already published or generator didn't run
        show_notification(
            'Anacruses Insights',
            'No draft article found. Check generate_insight.py ran this morning.'
        )
    else:
        show_notification(
            'Anacruses Insights — Action Required',
            f'{draft_count} draft article waiting for review. Open Notepad or run: python publish_insight.py'
        )
        print(f"{draft_count} draft(s) waiting in content/insights/drafts/")
        print("Run: python publish_insight.py")


if __name__ == '__main__':
    main()
