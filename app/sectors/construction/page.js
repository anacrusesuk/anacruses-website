import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'ISO Certification for Construction | Anacruses Associates',
  description: 'ISO 9001, ISO 45001, and ISO 14001 certification for UK construction firms. Compliance without the jargon. Free consultation.',
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
          text: 'Most UK construction firms need ISO 9001 (quality), ISO 45001 (health and safety), and increasingly ISO 14001 (environmental). Some principal contractors now ask for all three as a condition of tender. The standard determines which gets priority: if health and safety is your competitive disadvantage, start with ISO 45001. If client satisfaction is the issue, start with ISO 9001.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does ISO certification take for a construction company?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'First-time certification typically takes 16–24 weeks: 2 weeks for gap analysis, 8–12 weeks for implementation, 4–6 weeks for internal audit and management review, then 4–8 weeks for the certification body audit. Larger firms or those with complex subcontractor networks may take longer. We always quote a fixed timeline and fixed fee.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does ISO 45001 replace OHSAS 18001?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. OHSAS 18001 has been formally withdrawn. If you hold OHSAS 18001, you need to transition to ISO 45001:2018 by your next surveillance audit or before your current certificate expires. The transition typically costs less than first-time certification because your system already exists — we focus on the specific gaps ISO 45001 introduces (worker participation and legal compliance evaluation being the main ones).',
        },
      },
      {
        '@type': 'Question',
        name: 'What does a gap analysis involve for construction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We review your current processes, site procedures, safety records, quality controls, and documentation against the ISO standard you\'re pursuing. We look at: how you manage subcontractors, how you handle site inductions, what your incident and near-miss records show, how you manage change, and what your clients are currently asking for. Takes 2–3 days. You get a prioritised list of what\'s already compliant, what needs to be built, and realistic costs and timelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will ISO certification help us win more contracts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Increasingly, yes. More principal contractors and public sector clients now make ISO 9001 and/or ISO 45001 a precondition of tender. It removes a barrier. It doesn\'t win contracts on its own, but it gets you into the room. We work with firms who found certification unlocked 15–25% new revenue through contracts that previously required it.',
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
        <section className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-sm font-semibold text-yellow-400 mb-4">ISO CERTIFICATION FOR CONSTRUCTION</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ISO Certification Built for Construction.
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              ISO 9001, ISO 45001, and ISO 14001 certification that works for site work, subcontractors, and complex supply chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-yellow-500 text-blue-950 px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition">
                Book a Free Call
              </Link>
              <Link href="/sectors" className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded font-semibold hover:bg-blue-800 transition">
                Back to Sectors
              </Link>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Why Construction Firms Choose ISO</h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              Construction operates on contracts, compliance, and reputation. Client expectations have shifted: companies that can demonstrate consistent quality, safe working practices, and environmental responsibility win tenders. Companies that can't — or can't prove they do — lose them.
            </p>
            <p>
              ISO certification isn't compliance theatre. It's a structured way to document what you already do well and fix what you don't. For construction, that means:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-8 rounded">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Win More Contracts</h3>
              <p className="text-gray-700">
                Principal contractors and public sector clients increasingly require ISO 9001 and/or ISO 45001. Certification removes that barrier and gets you into the room.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Reduce Site Risk</h3>
              <p className="text-gray-700">
                ISO 45001 focuses on hazard identification, risk management, and legal compliance — the exact areas where construction incidents happen. Fewer incidents means lower insurance costs and fewer project delays.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Improve Delivery</h3>
              <p className="text-gray-700">
                ISO 9001 forces clarity on quality checks, change management, and subcontractor oversight. Better processes mean fewer rework cycles and faster handovers.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">Construction-Specific Challenges We Address</h2>
          
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Subcontractor Management</h3>
              <p className="text-gray-700">
                ISO 9001 and ISO 45001 both require you to manage subcontractor quality and competence. That means vetting, inductions, and ongoing oversight. We build this into your system from day one so it's not a surprise at audit.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Site Variability</h3>
              <p className="text-gray-700">
                Construction isn't a factory. Every site is different. We build flexibility into your quality and safety procedures so they work for domestic extensions, fit-outs, and large commercial projects without needing 50 different documents.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">OHSAS 18001 Transition</h3>
              <p className="text-gray-700">
                If you hold OHSAS 18001, the transition to ISO 45001 is straightforward — most of your system is already compliant. The two main new areas are worker participation and legal compliance evaluation. We identify those gaps in the first week.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Record-Keeping at Scale</h3>
              <p className="text-gray-700">
                Certification auditors want to see evidence: induction records, competence assessments, incident reports, site inspections. We help you structure this so you're not drowning in spreadsheets, and auditors can find what they need in minutes.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-950 mb-6">Our Typical Process</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">Weeks 1–2: Gap Analysis</h3>
                <p className="text-gray-700">
                  We review your current systems, site procedures, safety records, and quality controls. We talk to your teams, look at how you induct and manage subcontractors, and assess your documentation. You get a clear picture of where you stand and what needs to be built. Cost: typically £1,000–2,000.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">Weeks 3–10: Implementation</h3>
                <p className="text-gray-700">
                  We write your quality management system, health and safety management system, or environmental management system — depending on which standards you're pursuing. We write everything; you review and approve. Policies, procedures, risk registers, competence assessments, records templates — we handle it.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">Weeks 11–14: Internal Audit &amp; Management Review</h3>
                <p className="text-gray-700">
                  We conduct an independent internal audit to find gaps before your certification body does. We hold a management review where you (and your team) review system performance, nonconformities, and plan improvements. This is where auditors expect to see leadership engagement.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">Weeks 15–20: Certification Audit</h3>
                <p className="text-gray-700">
                  Your chosen UKAS-accredited certification body conducts a two-stage audit. We prepare you for both. After they grant certification, it's valid for three years with annual surveillance audits.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-950 mb-6">Cost &amp; Investment</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            First-year certification cost is typically <strong>£5,000 to £14,000</strong> depending on your size, complexity, and which standards you're pursuing:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-12">
            <li><strong>ISO 9001 alone:</strong> £5,000–8,000</li>
            <li><strong>ISO 45001 alone:</strong> £5,500–9,000</li>
            <li><strong>ISO 9001 + ISO 45001:</strong> £8,500–13,000</li>
            <li><strong>All three (9001 + 45001 + 14001):</strong> £10,000–14,000</li>
            <li><strong>OHSAS 18001 transition to ISO 45001:</strong> £3,500–6,000 (cheaper than first-time)</li>
          </ul>

          <p className="text-gray-700 mb-12">
            We always quote a fixed fee. You know the ceiling before we start. No surprises.
          </p>

          <h2 className="text-3xl font-bold text-blue-950 mb-6">Common Questions</h2>
          
          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Which standard should we pursue first?</h3>
              <p className="text-gray-700 mb-3">
                That depends on your bottleneck. If your biggest client issue is safety compliance or you're losing tenders due to health and safety gaps, start with ISO 45001. If it's quality or consistency, start with ISO 9001. If you're losing contracts due to environmental criteria, start with ISO 14001. Most construction firms do ISO 45001 first because client and public sector buyers now demand it.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Does ISO certification cost us money to maintain?</h3>
              <p className="text-gray-700 mb-3">
                Yes, but not much. After initial certification (year one), you pay for annual surveillance audits with your certification body — typically £800–1,500 per standard, per year. Every three years, you pay for a reassessment audit — same cost as the initial certificate. The real cost is internal: time spent on audits, management reviews, record-keeping. We minimize that by building efficient systems, not compliance theatre.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">What if we fail the audit?</h3>
              <p className="text-gray-700 mb-3">
                It's rare, but it happens. Usually because of gaps found in the internal audit stage that weren't fixed. We're independent, so we'll find those gaps before your certification body does. If we find nonconformities at the certification audit, you have 30 days to fix them and the auditor will re-audit that area. We'll support that corrective action at no extra cost.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Can we use ISO certification in our marketing?</h3>
              <p className="text-gray-700 mb-3">
                Yes. Once you're certified, you can use the certification body's logo and certificate number in your marketing materials, website, and tender submissions. Many firms see an immediate lift in enquiries from larger clients who now have proof you meet their standards.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-950 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Discuss ISO Certification?</h2>
            <p className="text-lg text-blue-100 mb-8">
              A free 30-minute call is the quickest way to find out which standards make sense for your business and what it would actually cost.
            </p>
            <Link href="/contact" className="bg-yellow-500 text-blue-950 px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition inline-block">
              Book a Free Consultation
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Rob Pragnell is a CQI/IRCA Certified Lead Auditor for ISO 9001, 14001, 27001, 45001, and 42001. He has advised construction firms ranging from domestic extensions to large commercial projects.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
