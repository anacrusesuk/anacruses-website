---
title: "The Five Most Common ISO 27001 Audit Failures — and How to Avoid Them"
date: "2026-06-28"
excerpt: "ISO 27001 has a higher rate of major nonconformities at Stage 2 than most other ISO standards. These are the five that come up most often."
tag: "ISO 27001"
faq:
  - question: "What are the most common reasons for failing an ISO 27001 Stage 2 audit?"
    answer: "The five most common causes of major nonconformities at ISO 27001 Stage 2 are: a Statement of Applicability that lists controls as applicable without evidence of implementation; a risk treatment plan that identifies risks but does not evidence treatment actions; no supplier security assessment process for cloud and SaaS providers; an internal audit that reviews policy documents rather than testing operational controls; and a scope on the certificate that does not match the operational reality of the business."
  - question: "What is the Statement of Applicability and why do auditors focus on it?"
    answer: "The Statement of Applicability (SoA) is a document that lists all 93 Annex A controls from ISO 27001:2022, states whether each is applicable, and justifies exclusions. Auditors treat it as a commitment — they test whether applicable controls are actually operating, not just documented. An SoA with controls marked as applicable but no evidence of implementation is one of the most common sources of major nonconformities."
  - question: "Why do ISO 27001 audits fail at Stage 2 more often than other standards?"
    answer: "ISO 27001 is more evidence-intensive than ISO 9001, 14001, or 45001. It requires a formal risk assessment, a Statement of Applicability covering 93 controls, documented evidence that risk treatment actions have been completed, and evidence that operational controls — access reviews, backups, patch records, incident logs — are actually running. Many organisations underestimate the evidence burden and arrive at Stage 2 with documentation but no operational evidence."
  - question: "What is a supplier security assessment under ISO 27001?"
    answer: "Clause 5.3 of ISO 27001:2022 Annex A (supplier relationships) requires a documented process for assessing information security risks in supplier relationships before sharing information, and maintaining oversight during the relationship. This applies to cloud providers, SaaS platforms, outsourced IT support, and any supplier that handles your information assets. A supplier list alone does not meet the requirement — a documented assessment process with evidence of application is required."
---

ISO 27001 has a higher rate of major nonconformities at Stage 2 than most other management system standards. The reason is that many businesses underestimate how evidence-intensive the standard is — it is not enough to have a policy; you need documented proof that the controls in your Statement of Applicability are actually operating.

**1. Statement of Applicability without evidence of implementation**

The SoA lists which Annex A controls you have included in scope, which you have excluded, and why. Auditors do not just read the SoA — they test it. If you have marked a control as applicable but cannot show evidence that it is operating, that is a nonconformity. The SoA is a commitment, not a plan.

**2. Risk treatment that stops at identification**

Many organisations produce a thorough risk register for Stage 1, then arrive at Stage 2 without evidence that identified risks have been treated. Accepted risks need a documented acceptance rationale. Treated risks need evidence of the controls applied. Transferred risks need evidence of the mechanism (typically insurance or contractual liability). Untreated risks left sitting in a register are a major nonconformity.

**3. No supplier security assessment process**

Clause 5.3 of Annex A (supplier relationships) is consistently one of the highest-frequency nonconformity areas. The requirement is not just to have a supplier list — it is to have a process for assessing information security risks in supplier relationships before you share information, and to maintain that oversight during the relationship. If your business uses cloud services, SaaS platforms, or outsourced IT support without any documented assessment of their security controls, expect findings.

**4. Inadequate internal audit**

ISO 27001 internal audits must cover the requirements of the standard and the requirements of your own ISMS. An audit programme that ticks through policy documents without testing operational controls — access reviews, backup verification, incident log, patch records — will not satisfy an external auditor.

**5. Scope that does not match the certificate**

If your certificate states your scope as "provision of software development services from offices in London" and your auditor finds that your developers work remotely from other locations, process data outside the described boundaries, or use systems not included in the asset register, you have a scope nonconformity. Define the scope precisely and accurately, and make sure it matches what actually happens.

**The common thread**

All five of these failures share the same root cause: treating ISO 27001 as a documentation exercise rather than an operating control framework. The standard is about demonstrating that your information security controls actually work, not that you have written them down.
