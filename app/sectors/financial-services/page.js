import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'ISO Certification for Financial Services | Anacruses Associates',
  description: 'ISO 27001, ISO 9001, ISO 22301 for UK financial firms. FCA compliance. Free consultation.',
};

export default function FinancialServicesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which ISO standards do financial services firms need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most financial services firms need ISO 27001 (information security) — it\'s essential for protecting client data and meeting FCA expectations. ISO 9001 (quality) is valuable for formalizing client onboarding, advice processes, and complaint handling. ISO 22301 (business continuity) is worth considering if operational disruption would harm clients or your business. Some firms add ISO 42001 (AI governance) if they use AI in advice or risk assessment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do we need ISO 27001 if we\'re already FCA-regulated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'FCA regulation sets minimum requirements for information security. ISO 27001 goes further — it provides a structured, third-party verified framework for information security management. Many FCA-regulated firms pursue ISO 27001 because it demonstrates to clients, regulators, and counterparties that you take security seriously. It also strengthens your defense if there\'s ever a data breach or regulatory investigation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does ISO 27001 implementation look like for a financial services firm?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO 27001 for financial services focuses on: access controls (who can access client data and trading systems), data protection (encryption of sensitive information), incident response (what to do if there\'s a breach), business continuity (systems and procedures to keep operating if there\'s a disaster), and compliance (meeting regulatory requirements). We build this around your actual operations and regulatory obligations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does ISO 22301 replace our business continuity plan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, but it formalizes and strengthens it. Your business continuity plan is your response to a disaster; ISO 22301 is a management system that covers planning, testing, training, and continuous improvement. If your clients depend on you being available 24/7, ISO 22301 proves you have processes in place to keep operating. It\'s particularly valuable for trading firms, payment processors, and investment platforms.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does ISO 27001 certification take for a financial services firm?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'First-time certification typically takes 16–24 weeks: 2 weeks for gap analysis, 8–12 weeks to build security policies and procedures (many financial firms already have these, so it\'s faster), 4–6 weeks for internal audit and management review, then 4–8 weeks for the certification body audit. Financial services firms are often faster because they already have strong security practices in place.',
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
            <p className="text-sm font-semibold text-yellow-400 mb-4">ISO CERTIFICATION FOR FINANCIAL SERVICES</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ISO Certification for Financial Services.
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              ISO 27001 (information security), ISO 9001 (quality), and ISO 22301 (business continuity) for UK financial firms, advisory practices, and asset managers.
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
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Why Financial Services Firms Choose ISO</h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              Financial services operates on trust, regulatory compliance, and client protection. Your clients trust you with money and sensitive information. Regulators expect you to protect that information and maintain operational continuity.
            </p>
            <p>
              ISO certification proves you have the systems in place to do that. It demonstrates to clients, regulators, and partners that you take security, quality, and resilience seriously.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-8 rounded">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Strengthen Regulatory Position</h3>
              <p className="text-gray-700">
                FCA regulation sets a floor for information security. ISO 27001 goes beyond it and demonstrates commitment to your regulator, your clients, and prospective counterparties.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Win Client Confidence</h3>
              <p className="text-gray-700">
                Sophisticated investors, corporate clients, and institutions expect ISO certification. It's a signal that you're serious about protecting their interests and their data.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Reduce Breach &amp; Regulatory Risk</h3>
              <p className="text-gray-700">
                ISO certification forces you to identify security gaps before attackers or regulators do. Reduces breach likelihood and strengthens your defense in case of regulatory action.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">Financial Services-Specific Challenges We Address</h2>
          
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Client Data Protection</h3>
              <p className="text-gray-700">
                You hold sensitive client data: bank details, investment portfolios, health and lifestyle information, credit history. ISO 27001 requires you to define how that data is accessed, stored, encrypted, and disposed of. We map your data flows and build controls around them.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Trading &amp; Transaction Systems Security</h3>
              <p className="text-gray-700">
                If you operate trading platforms or payment systems, those systems are high-value attack targets. ISO 27001 covers access controls, change management, monitoring, and incident response. We work with your technology team to secure your critical systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Regulatory Compliance (FCA, PRA, etc.)</h3>
              <p className="text-gray-700">
                Financial regulators expect you to have information security controls, incident response, and business continuity plans. ISO 27001 and ISO 22301 directly support those expectations. We align your systems with regulatory requirements during implementation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Third-Party &amp; Counterparty Risk</h3>
              <p className="text-gray-700">
                You depend on banks, brokers, data providers, and technology partners. ISO 27001 requires you to evaluate and monitor them. We help you build a vendor risk management process that meets regulatory expectations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Business Continuity &amp; Disaster Recovery</h3>
              <p className="text-gray-700">
                If your systems go down, your clients can't trade, access their accounts, or conduct transactions. ISO 22301 (business continuity) formalizes your disaster recovery plan, tests it regularly, and ensures your team knows what to do. It's a regulatory expectation and a business necessity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Advisor &amp; Client Relationship Quality</h3>
              <p className="text-gray-700">
                ISO 9001 formalizes your advice process, fact-finding, client profiling, and suitability assessment. It reduces the risk of unsuitable recommendations and strengthens your compliance file.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-950 mb-6">Our Typical Process</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">Weeks 1–2: Gap Analysis</h3>
                <p className="text-gray-700">
                  We review your current security practices, data protection procedures, business continuity plans, and regulatory compliance. We talk to your compliance team, technology team, and operations team. We look at your existing policies and documentation. You get a clear picture of what's strong and what needs to be built. Cost: typically £1,500–2,500.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">Weeks 3–10: Implementation</h3>
                <p className="text-gray-700">
                  We build your information security management system (ISO 27001) and/or business continuity management system (ISO 22301). We write security policies, define access controls, document incident response procedures, formalize your disaster recovery plan, and align everything with your regulatory obligations. We work with your compliance and technology teams.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">Weeks 11–14: Internal Audit &amp; Management Review</h3>
                <p className="text-gray-700">
                  We conduct an independent audit to find gaps before your certification body does. We hold a management review where you review incidents, security performance, and resource needs. Regulators and auditors expect to see management engagement.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">Weeks 15–20: Certification Audit</h3>
                <p className="text-gray-700">
                  Your chosen UKAS-accredited certification body conducts a two-stage audit, covering information security, business continuity, and (if relevant) quality processes. We prepare you for both stages. After they grant certification, it's valid for three years with annual surveillance audits.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-950 mb-6">Cost &amp; Investment</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            First-year certification cost is typically <strong>£7,000 to £18,000</strong> depending on your size and scope:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-12">
            <li><strong>ISO 27001 alone:</strong> £7,000–11,000</li>
            <li><strong>ISO 22301 (Business Continuity) alone:</strong> £6,000–9,000</li>
            <li><strong>ISO 9001 (Quality) alone:</strong> £5,500–8,000</li>
            <li><strong>ISO 27001 + ISO 22301:</strong> £11,000–16,000</li>
            <li><strong>All three (27001 + 22301 + 9001):</strong> £13,000–18,000</li>
          </ul>

          <p className="text-gray-700 mb-12">
            We quote a fixed fee. You know the ceiling before we start. Financial services firms are often faster because you typically already have strong security and compliance frameworks in place — we're mainly formalizing and aligning them with ISO standards.
          </p>

          <h2 className="text-3xl font-bold text-blue-950 mb-6">Common Questions</h2>
          
          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Will ISO certification help with FCA audits?</h3>
              <p className="text-gray-700 mb-3">
                Yes. FCA regulators expect you to have information security controls, incident response, and business continuity procedures. ISO 27001 and ISO 22301 directly support those expectations. If the FCA questions your security practices, ISO certification and audit records demonstrate you take it seriously.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Do we need ISO 22301 if we already have a business continuity plan?</h3>
              <p className="text-gray-700 mb-3">
                Having a plan is good. ISO 22301 formalizes and tests it, assigns clear responsibilities, and requires continuous improvement. Clients, regulators, and partners recognize ISO 22301 as proof that you've seriously thought about resilience. It's increasingly expected in the industry.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Should advisory practices get ISO 9001?</h3>
              <p className="text-gray-700 mb-3">
                Yes, if you want to formalize and strengthen your advice process. ISO 9001 covers client fact-finding, profiling, suitability assessment, advice documentation, and follow-up. It reduces regulatory risk and demonstrates quality to clients. Many advisory firms find it valuable.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Will certification slow down our operations?</h3>
              <p className="text-gray-700 mb-3">
                No. You should already have these controls in place — compliance teams, risk teams, and regulators expect them. ISO certification just formalizes and documents what you're already doing. We work within your existing processes, not against them.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">How do we use certification in client communications?</h3>
              <p className="text-gray-700 mb-3">
                You can use your certification prominently — on your website, in marketing materials, in client pitches. Many financial services firms do. It's a trust signal that resonates with institutional clients, corporate clients, and sophisticated individuals.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-950 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Discuss ISO Certification?</h2>
            <p className="text-lg text-blue-100 mb-8">
              A free 30-minute call is the quickest way to find out which standards strengthen your regulatory position and win client confidence.
            </p>
            <Link href="/contact" className="bg-yellow-500 text-blue-950 px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition inline-block">
              Book a Free Consultation
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Rob Pragnell is a CQI/IRCA Certified Lead Auditor for ISO 27001 and has advised financial services firms, advisory practices, asset managers, and payment processors.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
