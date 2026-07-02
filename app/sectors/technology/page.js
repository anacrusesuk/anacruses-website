'use client';

import Link from 'next/link';

export const metadata = {
  title: 'ISO 27001 & ISO 42001 for Technology & SaaS | Anacruses Associates',
  description: 'ISO 27001, ISO 42001, and ISO 9001 for UK tech firms, MSPs, and SaaS companies. Security + AI governance + quality. Free consultation.',
};

export default function TechnologyPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why do tech companies need ISO 27001?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your clients and prospects want proof that you handle their data securely. ISO 27001 demonstrates you have systematic controls over information security, risk management, and compliance. It\'s increasingly a condition of contract — especially for SaaS and MSPs selling to enterprise or regulated sectors.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is ISO 42001 and why does it matter for AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO 42001 is the new international standard for managing AI systems responsibly. It covers governance, risk management, ethical use, and transparency. If your product uses AI — for recommendations, automation, analytics, or decision-making — certification demonstrates you\'ve thought through safety, bias, and regulatory compliance. It\'s becoming a market differentiator.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we do ISO 27001 and ISO 42001 together?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. ISO 42001 complements ISO 27001 — both govern data and risk. Many tech firms do both in parallel (saves 20-30% on combined costs vs. sequential). If you\'re using AI and handling customer data, doing both together makes sense and signals comprehensive governance.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does ISO 27001 take for a SaaS company?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Typically 14–20 weeks for first-time certification. Gap analysis (2-3 weeks), build security policies and technical controls (6-10 weeks), internal audit (2 weeks), then certification body audit (4-6 weeks). We've worked with MSPs and SaaS firms — most timelines compress because you already have some security controls.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will ISO 27001 and ISO 42001 help us win contracts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Enterprise buyers, regulated sectors (finance, healthcare), and public sector clients increasingly demand ISO 27001. ISO 42001 is newer but already expected by forward-thinking procurement teams. Certification removes a barrier and signals trust. We\'ve seen tech firms unlock 15-30% new revenue after certification.',
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
            <p className="text-xs md:text-sm font-semibold text-yellow-400 mb-3 tracking-wide">ISO CERTIFICATION FOR TECHNOLOGY</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              ISO 27001 & ISO 42001 for Tech, SaaS & MSPs
            </h1>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl">
              Security certification your clients demand. AI governance that sets you apart. Quality management that scales.
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
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Why Tech Companies Choose ISO 27001 & ISO 42001</h2>
          
          <div className="space-y-4 mb-8 text-base text-gray-700">
            <p>
              Tech companies live or die by trust. Your customers hand you sensitive data — customer lists, financial records, personal information, intellectual property. Your AI systems influence decisions that affect their business. One breach or biased algorithm can destroy your reputation and your revenue pipeline.
            </p>
            <p>
              ISO 27001 and ISO 42001 aren't compliance badges. They're proof that you've systematically managed information security and AI governance. For SaaS firms and MSPs, they unlock enterprise contracts. For AI-first companies, they demonstrate ethics and risk management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Win Enterprise Deals</h3>
              <p className="text-sm text-gray-700">
                Enterprise and regulated-sector buyers demand ISO 27001. It's often a non-negotiable tender requirement. Certification removes that barrier and opens RFPs you couldn't bid on before.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Prove AI Safety</h3>
              <p className="text-sm text-gray-700">
                ISO 42001 shows you've thought through bias, transparency, and governance in your AI. It signals to customers and partners that AI is managed responsibly, not as an afterthought.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Reduce Breach Risk</h3>
              <p className="text-sm text-gray-700">
                Systematic security controls lower your attack surface, reduce insider risk, and improve incident response. Lower breach risk means lower insurance costs and fewer customer incidents.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4 mt-10">What We Cover</h2>
          
          <div className="space-y-4 mb-10">
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">ISO 27001 (Information Security)</h3>
              <p className="text-sm text-gray-700">
                We build your security management system: access controls, encryption, incident response, supplier management, data classification. We focus on what your customers actually care about and what auditors actually check.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">ISO 42001 (AI Governance)</h3>
              <p className="text-sm text-gray-700">
                We establish governance for your AI systems: risk assessment, bias testing, transparency documentation, human oversight controls. We help you meet ethical requirements and regulatory expectations as AI governance matures.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">ISO 9001 (Quality Management)</h3>
              <p className="text-sm text-gray-700">
                Optional but valuable. Quality systems ensure consistent service delivery, change management, and incident management. Many SaaS firms find it pairs well with ISO 27001.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Our Process</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-10 space-y-4 text-sm">
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 1–2: Security Assessment</h3>
              <p className="text-gray-700">
                We review your current security practices, infrastructure, data flows, and AI systems. We talk to your engineering, product, and ops teams. You get a clear picture of gaps and realistic costs.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 3–10: Build Your System</h3>
              <p className="text-gray-700">
                We write policies, procedures, risk registers, and AI governance documents. We review with your team. We help design practical controls that integrate into your dev cycle and incident response, not bolt-on compliance.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 11–14: Internal Audit & Review</h3>
              <p className="text-gray-700">
                We audit your system independently to find gaps before your certification body does. We conduct a management review so leadership can speak to the auditor about governance and risk.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 15–20: Certification Audit</h3>
              <p className="text-gray-700">
                Your chosen UKAS accredited certification body conducts a two-stage audit. We prepare you for both. Post-certification, annual surveillance audits maintain your certificate.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Cost & Timeline</h2>
          
          <p className="text-sm text-gray-700 mb-4">
            First-year certification typically costs <strong>£6,000 to £16,000</strong> depending on scope and complexity:
          </p>
          
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-10">
            <li><strong>ISO 27001 alone:</strong> £6,000–10,000</li>
            <li><strong>ISO 42001 alone:</strong> £5,000–8,000</li>
            <li><strong>ISO 27001 + ISO 42001:</strong> £9,000–15,000</li>
            <li><strong>All three (9001 + 27001 + 42001):</strong> £11,000–16,000</li>
          </ul>

          <p className="text-sm text-gray-700 mb-10">
            We always quote a fixed fee upfront. No surprises.
          </p>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Common Questions</h2>
          
          <div className="space-y-4 mb-10 text-sm">
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Should we start with ISO 27001 or ISO 42001?</h3>
              <p className="text-gray-700">
                Start with what your customers demand right now. If enterprise sales require ISO 27001, start there. If you're leading with AI products, ISO 42001 signals governance. Many firms do both in parallel — it's cheaper and faster than sequential.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Does certification cost us money to maintain?</h3>
              <p className="text-gray-700">
                Yes. After year one, you pay annual surveillance audits (typically £800–1,500 per standard per year). Every three years, you pay for a reassessment. The real cost is internal: time spent on audits, risk reviews, incident logs. We minimize that by building efficient systems.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Can we use ISO certification in our marketing?</h3>
              <p className="text-gray-700">
                Yes. Once certified, you can use the certification body's logo and certificate number in marketing, website, and tender responses. Many tech firms see an immediate lift in enterprise leads.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-950 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Secure Your Business?</h2>
            <p className="text-blue-100 mb-6 text-sm">
              A free 30-minute call is the fastest way to find out which standards make sense for your product and what it would cost.
            </p>
            <Link href="/contact" className="bg-yellow-500 text-blue-950 px-6 py-2 rounded text-sm font-semibold hover:bg-yellow-400 transition inline-block">
              Book a Free Consultation
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              Rob Pragnell is a CQI/IRCA Certified Lead Auditor for ISO 9001, 14001, 27001, 45001, and 42001. He has advised tech firms, SaaS startups, and MSPs on security and AI governance.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
