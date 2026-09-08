---
title: "ISO 27001 Access Control: What UK Businesses Get Wrong"
date: "2026-09-08"
tag: "ISO 27001"
excerpt: "Access control is one of the most frequently cited areas in ISO 27001 Stage 2 audits. Here's what auditors look for and where the evidence gaps typically appear."
---

Access control failures are the single most common finding I raise in ISO 27001 Stage 2 audits. Not because businesses don't care about security. Because they confuse "we have a password policy" with "we have documented, tested access control." These are entirely different things. You need both. And you need evidence that access rights are actually removed when people leave.

**The confusion between policy and control**

I walk into an audit and ask to see the access control procedure. The organisation shows me a five-page password policy. That's not access control documentation. A password policy is one small piece of the picture. What I'm actually looking for is evidence that you've classified your information assets, defined who needs access to what, documented those decisions, implemented them technically, and then regularly reviewed and revoked access. Most businesses have steps two and three. Very few have all five working together.

The ISO 27001 standard (Annex A, Control 5.18) requires access rights to be provisioned, reviewed, modified and removed in line with your access control policy. That means you need a process. A real one. Written down. Showing who approves access, how it's granted, and critically, how it's removed. I've audited organisations with 80 people where nobody could tell me who had access to the finance system or why. That's a non-conformity every time.

**Where the evidence gaps appear**

The biggest gap I see is the leavers process. A director leaves on a Friday. By Monday, does their email still work? Can they still log into the VPN? Do they still have access to shared drives? In my experience, the answer is "probably yes, we'll get to it next week." By next month, nobody remembers they ever worked there. The auditor finds them still in Active Directory. Automatic non-conformity.

You need a documented handover procedure. When someone leaves, their manager should notify HR. HR notifies IT. IT removes access from every system — email, VPN, network shares, SaaS applications, building access, everything. That should take 24 hours maximum. You need a checklist. You need evidence that it happened. I recommend keeping a deprovisioning log for at least 12 months so you can show me during the audit.

Joiners are easier but still problematic. Someone starts in the business. What access do they need? Who decides? How long until they get it? If you don't have a documented process, you'll have new starters working without the access they need, or worse, with too much access because IT just copies the previous jobholder's rights. Both are control failures.

**The testing piece most auditors will check**

I ask three simple audit questions. First: show me the access control procedure. Second: show me a recent access request form with the manager's approval. Third: show me the system access list and prove that leavers have been removed. Most organisations can do one or two. The third is where they fall apart because nobody maintains a current access list.

This requires tooling or discipline. In larger organisations, you need something that reports who has access to what. Active Directory reporting, SailPoint, even a well-maintained Excel sheet if you're small enough. In my experience, the Excel sheet works fine for businesses under 50 people, but it must be reviewed and signed off quarterly by someone with authority. I've seen auditors accept a signed quarterly access review. That builds confidence.

The second testing angle is recertification. Every year, managers should confirm that their team members still need the access they have. This is a GDPR good practice too — minimise access to what's genuinely necessary. If you can show me a recertification log where managers have confirmed access levels, you've solved half your problems. Most businesses don't do this at all.

**Privileged accounts are their own beast**

If your organisation has system administrators, database administrators, or anyone with elevated access, you need additional controls. Segregation of duties, activity logging, potentially dual-control for sensitive operations. This is where the audit gets detailed. I ask to see logs of who accessed sensitive data and why. If you don't have those logs, it's a finding. If you have the logs but nobody reviews them regularly, it's still a finding because you can't prove you're actually monitoring.

For most UK businesses, this means your IT team needs to be aware that their access is a compliance matter, not just a practical one. They're logging in to systems and making changes. That activity should be logged and reviewed. It sounds like more work. It is. But it's also the control that separates businesses that pass audits from those that don't.

**What happens next**

You need a documented, working access control process before your Stage 2 audit. Not on the day. Now. That means procedure, examples of it being followed, evidence that leavers are actually removed, and managers confirming access is still needed. Get those four things right and access control stops being a problem. Skip it and I'll be citing you on the findings form.
