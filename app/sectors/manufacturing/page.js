'use client';

import Link from 'next/link';

export const metadata = {
  title: 'ISO 9001 & ISO 14001 for Manufacturing | Anacruses Associates',
  description: 'ISO 9001, ISO 14001, and ISO 45001 for UK manufacturers. Quality, environmental, and safety management. Free consultation.',
};

export default function ManufacturingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why do manufacturers need ISO standards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO 9001 demonstrates consistent quality. ISO 14001 shows environmental responsibility. ISO 45001 proves worker safety. Together, they unlock supply chain contracts and reduce operational risk.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does ISO help with supply chain compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'OEMs and principal contractors now require supplier ISO certification. It signals you have documented processes, traceability, and risk management. Without it, you lose tenders. With it, you become a preferred supplier.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we integrate ISO 9001, 14001, and 45001?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. An integrated management system is more efficient than managing three separate systems. Many manufacturers do all three together — cost is only 20-30% higher than single-standard, but coverage is complete.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does manufacturing certification take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'First-time certification typically takes 16–24 weeks depending on standard and scope. ISO 9001 alone can be faster; integrated systems take longer but are worth the investment.',
        },
      },
      {
        '@type': 'Question',
        name: 'What about traceability and ISO 9001?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO 9001 requires you to document and track material and product traceability. We help you build traceability systems that satisfy auditors and your OEM customers without creating unnecessary overhead.',
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
            <p className="text-xs md:text-sm font-semibold text-yellow-400 mb-3 tracking-wide">ISO CERTIFICATION FOR MANUFACTURING</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              ISO Standards for Manufacturers
            </h1>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl">
              ISO 9001, ISO 14001, and ISO 45001 that unlocks supply chain contracts and improves operations.
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
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Why Manufacturers Choose ISO</h2>
          
          <div className="space-y-4 mb-8 text-base text-gray-700">
            <p>
              Manufacturing supply chains have shifted. OEMs and principal contractors no longer accept verbal assurances about quality, safety, or environmental practices. They demand ISO certification as a condition of supply. Without it, you lose contracts. With it, you become a trusted partner.
            </p>
            <p>
              ISO 9001, 14001, and 45001 provide documented proof that you have consistent processes, documented traceability, and systematic risk management. They reduce your operational risk and unlock supply contracts you couldn't access before.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Win Supply Contracts</h3>
              <p className="text-sm text-gray-700">
                OEMs increasingly require supplier ISO certification. It's often non-negotiable. Certification removes that barrier and unlocks major supply chain deals.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Reduce Quality Costs</h3>
              <p className="text-sm text-gray-700">
                ISO 9001 improves process consistency and catches defects early. Fewer rework cycles, lower scrap rates, and fewer customer complaints mean lower costs and higher margins.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Improve Efficiency</h3>
              <p className="text-sm text-gray-700">
                Documented processes, clear responsibilities, and systematic improvement reduce waste, improve throughput, and make training new staff easier.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4 mt-10">What We Cover</h2>
          
          <div className="space-y-4 mb-10">
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">ISO 9001 (Quality Management)</h3>
              <p className="text-sm text-gray-700">
                We establish quality controls, process documentation, traceability systems, and inspection procedures. We help you build systems that actually work on the shop floor, not just satisfy auditors.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">ISO 14001 (Environmental Management)</h3>
              <p className="text-sm text-gray-700">
                We identify environmental impacts, set controls, and document compliance with waste, emissions, and regulatory obligations. We help you reduce environmental costs while meeting customer expectations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">ISO 45001 (Health & Safety)</h3>
              <p className="text-sm text-gray-700">
                We establish hazard identification, risk assessment, and safety procedures. We help you reduce workplace incidents and demonstrate commitment to worker safety.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Our Process</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-10 space-y-4 text-sm">
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 1–2: Gap Analysis</h3>
              <p className="text-gray-700">
                We walk your manufacturing floor. We review your processes, quality controls, safety practices, and environmental procedures. You get a clear picture of gaps and what needs building.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 3–10: Implementation</h3>
              <p className="text-gray-700">
                We write process documentation, quality procedures, traceability systems, and safety controls. We work with your team to ensure systems integrate into your operations, not disrupt them.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 11–14: Internal Audit & Review</h3>
              <p className="text-gray-700">
                We conduct an independent internal audit to find gaps before your certification body does. We hold a management review to ensure leadership understands and commits to the system.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 15–20: Certification Audit</h3>
              <p className="text-gray-700">
                Your chosen UKAS-accredited certification body conducts a two-stage audit. After certification, annual surveillance audits maintain your three-year certificate.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Cost & Investment</h2>
          
          <p className="text-sm text-gray-700 mb-4">
            First-year certification typically costs <strong>£5,000 to £15,000</strong>:
          </p>
          
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-10">
            <li>ISO 9001 alone: £5,000–8,000</li>
            <li>ISO 14001 alone: £4,500–7,000</li>
            <li>ISO 45001 alone: £5,000–8,000</li>
            <li>All three integrated: £9,000–15,000</li>
          </ul>

          <p className="text-sm text-gray-700 mb-10">
            We always quote a fixed fee upfront. No surprises.
          </p>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Common Questions</h2>
          
          <div className="space-y-4 mb-10 text-sm">
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Should we integrate all three standards?</h3>
              <p className="text-gray-700">
                Most manufacturers find integrated systems more efficient. You manage one set of processes, one audit schedule, and one management review instead of three separate systems. Cost is only 20-30% higher than single-standard.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">How do we handle traceability?</h3>
              <p className="text-gray-700">
                We help you establish material tracking, lot coding, and record-keeping systems that satisfy OEM audits without creating excessive overhead. Most manufacturers find that batching materials and documenting storage locations is sufficient.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-970 mb-1">Does certification cost us money to maintain?</h3>
              <p className="text-gray-700">
                Yes. After year one, you pay annual surveillance audits (typically £800–1,500 per standard per year). The real cost is internal: time on audits, management reviews, and process documentation. We minimize this by building efficient systems.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-950 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Unlock Supply Contracts?</h2>
            <p className="text-blue-100 mb-6 text-sm">
              A free 30-minute call is the fastest way to find out which standards make sense for your business and what certification would cost.
            </p>
            <Link href="/contact" className="bg-yellow-500 text-blue-950 px-6 py-2 rounded text-sm font-semibold hover:bg-yellow-400 transition inline-block">
              Book a Free Consultation
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              Rob Pragnell is a CQI/IRCA Certified Lead Auditor for ISO 9001, 14001, 27001, 45001, and 42001. He has advised manufacturers ranging from SMEs to large multi-site operations.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
