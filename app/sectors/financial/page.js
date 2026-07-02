'use client';

import Link from 'next/link';

export const metadata = {
  title: 'ISO 27001 & ISO 42001 for Financial Services | Anacruses Associates',
  description: 'ISO 27001 cybersecurity and ISO 42001 AI governance for fintech, wealth management, and financial firms. FCA-compliant. Free consultation.',
};

export default function FinancialPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why does financial services need ISO 27001?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Financial services handle sensitive customer data and money. Regulators (FCA, PRA) expect you to have systematic information security controls. ISO 27001 is the international standard for this. It demonstrates you\'ve identified risks, implemented controls, and can defend against breaches.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does ISO 27001 complement FCA compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'FCA expects firms to have appropriate information security. ISO 27001 provides the framework and documented evidence that you do. It doesn\'t replace FCA obligations but demonstrates you\'ve met them systematically.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is ISO 42001 and why does fintech need it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO 42001 governs AI systems. Fintech companies using AI for trading, portfolio analysis, risk assessment, or credit decisions need AI governance to demonstrate ethical use and regulatory compliance. It\'s an emerging requirement for forward-thinking fintechs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we get ISO 27001 without disrupting our business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We design security controls that work with your existing infrastructure, not against it. We help you implement access controls, encryption, and incident response in ways that enhance security without slowing down your team.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does ISO 27001 help with client confidence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. In wealth management and fintech, clients want assurance that their money and data are secure. ISO 27001 certification demonstrates this. We\'ve seen fintech firms unlock institutional clients after certification.',
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
            <p className="text-xs md:text-sm font-semibold text-yellow-400 mb-3 tracking-wide">ISO CERTIFICATION FOR FINANCIAL SERVICES</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              ISO 27001 & ISO 42001 for Fintech & Wealth Management
            </h1>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl">
              Security governance that satisfies regulators and clients. AI governance for responsible fintech innovation.
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
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Why Financial Services Choose ISO 27001 & ISO 42001</h2>
          
          <div className="space-y-4 mb-8 text-base text-gray-700">
            <p>
              Financial services handle money and sensitive personal data. Regulators expect you to have systematic information security. Clients expect you to protect their assets and privacy. A single breach can destroy your reputation and trigger regulatory sanctions.
            </p>
            <p>
              ISO 27001 provides the framework and evidence that you've identified risks, implemented controls, and can defend against threats. ISO 42001 is emerging as critical for fintech firms using AI in trading, portfolio management, or credit decisions. Together, they demonstrate responsible financial governance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Satisfy Regulators</h3>
              <p className="text-sm text-gray-700">
                FCA and PRA expect information security controls. ISO 27001 is internationally recognized evidence that you have them. It demonstrates regulatory compliance and reduces regulator scrutiny.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Build Client Trust</h3>
              <p className="text-sm text-gray-700">
                Wealth management and fintech clients want assurance their money and data are secure. ISO 27001 certification is proof. Institutional clients increasingly demand it.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Govern AI Responsibly</h3>
              <p className="text-sm text-gray-700">
                If you use AI for trading, risk assessment, or credit decisions, ISO 42001 demonstrates you've thought through bias, transparency, and regulatory compliance. It's becoming a market differentiator.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4 mt-10">What We Cover</h2>
          
          <div className="space-y-4 mb-10">
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">ISO 27001 (Information Security)</h3>
              <p className="text-sm text-gray-700">
                We establish access controls, encryption, incident response, vendor management, and data classification. We work with your compliance team to ensure controls meet both ISO requirements and FCA expectations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">ISO 42001 (AI Governance)</h3>
              <p className="text-sm text-gray-700">
                We establish AI governance: risk assessment, bias testing, transparency documentation, and human oversight. We help you demonstrate responsible AI use to regulators and clients.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">ISO 22301 (Business Continuity) — Optional</h3>
              <p className="text-sm text-gray-700">
                Many financial firms add ISO 22301 to demonstrate resilience to operational disruptions. Useful for demonstrating robustness to institutional clients.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Our Process</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-10 space-y-4 text-sm">
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 1–2: Security Assessment</h3>
              <p className="text-gray-700">
                We review your current security practices, infrastructure, data flows, and regulatory obligations. We identify gaps between your current state and ISO 27001 requirements. We understand your FCA compliance obligations and show how ISO 27001 helps meet them.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 3–10: Build Your System</h3>
              <p className="text-gray-700">
                We write policies, access control procedures, incident response plans, vendor management processes, and AI governance documentation. We work with your compliance and technical teams to ensure implementation is practical and effective.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 11–14: Internal Audit & Review</h3>
              <p className="text-gray-700">
                We audit your system independently to find gaps before your certification body does. We conduct a management review so leadership can discuss governance and risk with auditors.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 15–20: Certification Audit</h3>
              <p className="text-gray-700">
                Your chosen UKAS accredited certification body conducts a two-stage audit. We prepare you for both. Post-certification, annual surveillance audits maintain your certificate.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Cost & Investment</h2>
          
          <p className="text-sm text-gray-700 mb-4">
            First-year certification typically costs <strong>£7,000 to £18,000</strong>:
          </p>
          
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-10">
            <li>ISO 27001 alone: £7,000–11,000</li>
            <li>ISO 42001 alone: £5,000–8,000</li>
            <li>ISO 27001 + ISO 42001: £10,000–16,000</li>
            <li>Add ISO 22301 (business continuity): +£4,000–6,000</li>
          </ul>

          <p className="text-sm text-gray-700 mb-10">
            We always quote a fixed fee. No surprises.
          </p>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Common Questions</h2>
          
          <div className="space-y-4 mb-10 text-sm">
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Will ISO 27001 require us to change our infrastructure?</h3>
              <p className="text-gray-700">
                Not necessarily. We design controls that work with your existing infrastructure. Most controls are procedural or policy-based. Some infrastructure changes (encryption, MFA) may be required depending on your current state.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">How does this interact with our FCA compliance?</h3>
              <p className="text-gray-700">
                ISO 27001 is a best-practice framework for information security. FCA expects firms to have appropriate controls. ISO 27001 demonstrates you have them. We liaise with your compliance team to ensure ISO aligns with FCA obligations.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Can we do ISO 27001 and ISO 42001 together?</h3>
              <p className="text-gray-700">
                Yes. Both cover data and risk. Many fintech firms do both in parallel — saves 20-30% on costs vs. sequential. If you use AI and handle customer data, doing both together makes sense.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-950 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Secure Your Firm?</h2>
            <p className="text-blue-100 mb-6 text-sm">
              A free 30-minute call is the fastest way to understand certification scope, regulatory alignment, and investment for your financial business.
            </p>
            <Link href="/contact" className="bg-yellow-500 text-blue-950 px-6 py-2 rounded text-sm font-semibold hover:bg-yellow-400 transition inline-block">
              Book a Free Consultation
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              Rob Pragnell is a CQI/IRCA Certified Lead Auditor for ISO 27001 and 42001. He has advised fintech firms, wealth managers, and payment service providers on security governance.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
