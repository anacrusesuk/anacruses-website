'use client';

import Link from 'next/link';

export const metadata = {
  title: 'ISO Certification for Construction | Anacruses Associates',
  description: 'ISO 9001, ISO 45001, and ISO 14001 for UK construction. Safety, quality, environmental compliance. Free consultation.',
};

export default function ConstructionPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which ISO standards do construction companies need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most UK construction firms need ISO 9001 (quality), ISO 45001 (health and safety), and increasingly ISO 14001 (environmental). Principal contractors often require all three as a condition of tender.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does ISO certification take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'First-time certification typically takes 16–24 weeks: 2 weeks gap analysis, 8–12 weeks implementation, 4–6 weeks internal audit, then 4–8 weeks certification body audit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does ISO 45001 replace OHSAS 18001?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. OHSAS 18001 is withdrawn. You need to transition to ISO 45001:2018 before your certificate expires. Transition costs less than first-time certification.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does a gap analysis involve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We review your processes, site procedures, safety records, quality controls, and documentation. You get a prioritised list of what\'s compliant, what needs building, and realistic costs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will ISO certification help us win more contracts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. More principal contractors and public sector clients require ISO as a tender condition. Certification removes barriers and unlocks contracts you couldn\'t bid on before.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xs md:text-sm font-semibold text-yellow-400 mb-3 tracking-wide">ISO CERTIFICATION FOR CONSTRUCTION</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              ISO Certification Built for Construction
            </h1>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl">
              ISO 9001, ISO 45001, and ISO 14001 that works for site work, subcontractors, and complex supply chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="bg-yellow-500 text-blue-950 px-6 py-2 rounded text-sm font-semibold hover:bg-yellow-400 transition inline-block w-fit">
                Book a Free Call
              </Link>
              <Link href="/sectors" className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition inline-block w-fit">
                Back to Sectors
              </Link>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Why Construction Firms Choose ISO</h2>
          
          <div className="space-y-4 mb-8 text-base text-gray-700">
            <p>
              Construction operates on contracts, compliance, and reputation. Client expectations have shifted: firms that demonstrate consistent quality, safe working practices, and environmental responsibility win tenders. Those that can't — or can't prove it — lose them.
            </p>
            <p>
              ISO certification isn't compliance theatre. It's a structured way to document what you do well and fix what you don't. For construction, that means documented site practices, managed subcontractors, and auditable safety records.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Win More Contracts</h3>
              <p className="text-sm text-gray-700">
                Principal contractors and public sector clients increasingly require ISO 9001 and/or ISO 45001. Certification removes barriers and opens tenders you couldn't bid on before.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Reduce Site Risk</h3>
              <p className="text-sm text-gray-700">
                ISO 45001 focuses on hazard identification and risk management — exactly where construction incidents happen. Fewer incidents mean lower insurance costs and fewer delays.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Improve Delivery</h3>
              <p className="text-sm text-gray-700">
                ISO 9001 ensures clarity on quality checks, change management, and subcontractor oversight. Better processes mean fewer rework cycles and faster handovers.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4 mt-10">Construction-Specific Support</h2>
          
          <div className="space-y-4 mb-10">
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Subcontractor Management</h3>
              <p className="text-sm text-gray-700">
                ISO 9001 and ISO 45001 require you to manage subcontractor quality and competence. We build vetting, inductions, and ongoing oversight into your system from day one.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Site Variability</h3>
              <p className="text-sm text-gray-700">
                Construction isn't a factory. We build flexibility into quality and safety procedures so they work for domestic projects through to large commercial work — without needing 50 different documents.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">OHSAS 18001 Transition</h3>
              <p className="text-sm text-gray-700">
                If you hold OHSAS 18001, transition to ISO 45001 is straightforward. Most of your system already complies. We focus on the specific gaps ISO 45001 introduces.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Record-Keeping at Scale</h3>
              <p className="text-sm text-gray-700">
                We help structure induction records, competence assessments, and incident reports so you're not drowning in spreadsheets and auditors can find what they need in minutes.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Our Process</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-10 space-y-4 text-sm">
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 1–2: Gap Analysis</h3>
              <p className="text-gray-700">
                We review your current systems, site procedures, safety records, and quality controls. We talk to your teams and look at how you manage subcontractors and inductions. You get a clear picture of where you stand and what needs building.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 3–10: Implementation</h3>
              <p className="text-gray-700">
                We write your quality, safety, or environmental management system. We handle policies, procedures, risk registers, and competence assessments. You review and approve.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 11–14: Internal Audit & Review</h3>
              <p className="text-gray-700">
                We conduct an independent internal audit to find gaps before your certification body does. We hold a management review where leadership reviews system performance and confirms commitment.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 15–20: Certification Audit</h3>
              <p className="text-gray-700">
                Your chosen UKAS-accredited certification body conducts a two-stage audit. We prepare you for both. After certification, annual surveillance audits maintain your three-year certificate.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Cost & Investment</h2>
          
          <p className="text-sm text-gray-700 mb-4">
            First-year certification typically costs <strong>£5,000 to £14,000</strong>:
          </p>
          
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-10">
            <li>ISO 9001 alone: £5,000–8,000</li>
            <li>ISO 45001 alone: £5,500–9,000</li>
            <li>ISO 9001 + ISO 45001: £8,500–13,000</li>
            <li>All three (9001 + 45001 + 14001): £10,000–14,000</li>
            <li>OHSAS 18001 transition to ISO 45001: £3,500–6,000</li>
          </ul>

          <p className="text-sm text-gray-700 mb-10">
            We always quote a fixed fee upfront. No surprises.
          </p>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Common Questions</h2>
          
          <div className="space-y-4 mb-10 text-sm">
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Which standard should we pursue first?</h3>
              <p className="text-gray-700">
                That depends on your bottleneck. If safety is your competitive disadvantage, start with ISO 45001. If it's quality or consistency, start with ISO 9001. Most construction firms do ISO 45001 first because clients now demand it.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Does ISO certification cost us money to maintain?</h3>
              <p className="text-gray-700">
                Yes. After year one, you pay annual surveillance audits (typically £800–1,500 per standard per year). The real cost is internal: time on audits, management reviews, and record-keeping. We minimize that by building efficient systems.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">What if we fail the audit?</h3>
              <p className="text-gray-700">
                It's rare. We find gaps in the internal audit stage before your certification body does. If nonconformities are found at certification audit, you have 30 days to fix them. We support that corrective action at no extra cost.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-950 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Discuss ISO Certification?</h2>
            <p className="text-blue-100 mb-6 text-sm">
              A free 30-minute call is the fastest way to find out which standards make sense for your business and what it would cost.
            </p>
            <Link href="/contact" className="bg-yellow-500 text-blue-950 px-6 py-2 rounded text-sm font-semibold hover:bg-yellow-400 transition inline-block">
              Book a Free Consultation
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              Rob Pragnell is a CQI/IRCA Certified Lead Auditor for ISO 9001, 14001, 27001, 45001, and 42001. Dave Baker brings 15 years of construction, civils, and H&S experience.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
