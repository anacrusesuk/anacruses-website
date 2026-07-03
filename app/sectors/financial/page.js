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
        name: 'Which ISO standards do financial services firms need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most UK financial services firms pursuing ISO certification need ISO 27001 for information security. Firms using AI in trading, underwriting, or client decisions increasingly add ISO 42001 for AI governance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does ISO 27001 satisfy FCA requirements?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "ISO 27001 isn't an FCA requirement by name, but the FCA and PRA expect firms to have systematic information security controls. ISO 27001 is internationally recognised evidence that those controls exist and are independently audited.",
        },
      },
      {
        '@type': 'Question',
        name: 'How long does ISO 27001 certification take for a financial services firm?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most UK financial services firms complete ISO 27001 certification in 12 to 20 weeks, covering gap analysis, risk assessment, controls implementation, internal audit, and the two-stage certification audit.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is ISO 42001 and do we need it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "ISO 42001 is the international standard for AI management systems. If you use AI for trading decisions, underwriting, fraud detection, or client-facing tools, it demonstrates you're governing that AI responsibly.",
        },
      },
      {
        '@type': 'Question',
        name: 'How much does certification cost for a financial services firm?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'First-year cost typically runs £7,000 to £18,000: ISO 27001 alone is £7,000–£11,000, ISO 42001 alone is £5,000–£8,000, and both together are £10,000–£16,000.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-blue-950 mb-4">Why Financial Services Choose ISO 27001 & ISO 42001</h2>
        
        <div className="space-y-4 mb-8 text-base text-gray-700">
          <p>
            Financial services handle money and sensitive personal data. Regulators expect you to have systematic information security. Clients expect you to protect their assets and privacy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-50 p-6 rounded">
            <h3 className="text-lg font-bold text-blue-950 mb-3">Satisfy Regulators</h3>
            <p className="text-sm text-gray-700">
              FCA and PRA expect information security controls. ISO 27001 is internationally recognized evidence that you have them.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded">
            <h3 className="text-lg font-bold text-blue-950 mb-3">Build Client Trust</h3>
            <p className="text-sm text-gray-700">
              Wealth management and fintech clients want assurance their money and data are secure. ISO 27001 certification is proof.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded">
            <h3 className="text-lg font-bold text-blue-950 mb-3">Govern AI Responsibly</h3>
            <p className="text-sm text-gray-700">
              If you use AI for trading or decisions, ISO 42001 demonstrates responsible governance. It's becoming a market differentiator.
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
          <li>Add ISO 22301: +£4,000–6,000</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-950 mb-4">Common Questions</h2>

        <div className="space-y-4 mb-10 text-sm">
          <div>
            <h3 className="font-bold text-blue-950 mb-1">Do we need ISO 22301 as well as ISO 27001?</h3>
            <p className="text-gray-700">
              Not automatically. ISO 22301 (business continuity) is worth adding if clients specifically ask about your recovery capability after an outage. Many firms add it once ISO 27001 is established rather than doing both together.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-blue-950 mb-1">Will ISO 27001 slow down our AI rollout?</h3>
            <p className="text-gray-700">
              No — if anything it structures it. ISO 42001 doesn't require you to stop using AI, it requires you to document how you assess and manage the risks. Firms that build this in from the start move faster than firms that retrofit governance later.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-blue-950 mb-1">Does certification help with client due diligence questionnaires?</h3>
            <p className="text-gray-700">
              Yes. ISO 27001 certification answers most information security questions in a typical client or partner due diligence questionnaire directly, since you can point to an independently audited certificate rather than completing a lengthy self-assessment each time.
            </p>
          </div>
        </div>

        <div className="bg-blue-950 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Secure Your Firm?</h2>
          <p className="text-blue-100 mb-6 text-sm">
            A free 30-minute call is the fastest way to understand certification scope, regulatory alignment, and investment for your financial business.
          </p>
          <Link href="/contact" className="bg-yellow-500 text-blue-950 px-6 py-2 rounded text-sm font-semibold hover:bg-yellow-400 transition inline-block">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
