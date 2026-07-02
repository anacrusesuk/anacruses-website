import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'ISO Certification for Tech Companies | Anacruses Associates',
  description: 'ISO 27001 (Information Security), ISO 9001, and ISO 42001 (AI Governance) for UK tech firms, SaaS, and MSPs. Free consultation.',
};

export default function TechnologyPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which ISO standards do tech companies need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most tech companies need ISO 27001 (information security) — it\'s increasingly required by enterprise customers, especially in financial services, healthcare, and government. ISO 9001 (quality) is useful if you want to formalize development and service delivery. ISO 42001 (AI governance) is emerging as important if you build or use AI systems. SaaS vendors particularly need ISO 27001 to win enterprise contracts.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do enterprise customers require ISO 27001?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enterprise customers now include ISO 27001 certification in vendor selection criteria — or they conduct extensive security audits themselves. ISO 27001 removes that burden. It proves you have defined security policies, manage access controls, handle incidents responsibly, and maintain documentation. Enterprise procurement teams recognize it as a baseline. Without it, you\'re at a competitive disadvantage when bidding for enterprise deals.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does ISO 27001 implementation look like for a software company?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO 27001 for tech focuses on: access controls (who can do what), data protection (encrypting sensitive data at rest and in transit), software development security (secure coding, penetration testing), incident response (what to do if there\'s a breach), and vendor management (your third-party tools and libraries are secure). We build this around your actual development and deployment processes, not against them.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is ISO 42001 and do we need it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO 42001 is AI governance — a new standard covering risks around AI systems, fairness, transparency, and accountability. If you build AI models or use generative AI in your product, buyers are increasingly asking for it. It\'s not mandatory yet, but it will be. It\'s similar to ISO 27001 in scope (policies, procedures, risk management) but focused on AI specifically. We can build it alongside ISO 27001.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does ISO 27001 certification take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'First-time certification typically takes 16–24 weeks: 2 weeks for gap analysis, 8–12 weeks to build security policies and procedures, 4–6 weeks for internal audit and management review, then 4–8 weeks for the certification body audit. Tech companies are often faster because they already have many security practices in place — we\'re mainly formalizing and documenting what you do.',
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
            <p className="text-sm font-semibold text-yellow-400 mb-4">ISO CERTIFICATION FOR TECH</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ISO 27001 for Tech Companies.
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Information security certification built for SaaS, software, and managed service providers. Plus ISO 9001 and ISO 42001 for AI governance.
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
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Why Tech Companies Choose ISO 27001</h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              Enterprise buyers now make security a precondition of purchase. They want proof that your company takes information security seriously: that you encrypt data, manage access, handle incidents responsibly, and maintain documentation.
            </p>
            <p>
              ISO 27001 is that proof. It's the global standard for information security management. Enterprise procurement teams recognize it immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-8 rounded">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Win Enterprise Contracts</h3>
              <p className="text-gray-700">
                Many enterprise buyers include ISO 27001 in their vendor selection criteria or conduct intensive security audits. Certification removes that friction and positions you as a trusted vendor.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Reduce Security Audit Burden</h3>
              <p className="text-gray-700">
                Enterprise customers stop auditing your security when you're certified — they trust the third-party auditor. This saves your team weeks and lets you focus on product development.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Formalize Security Practice</h3>
              <p className="text-gray-700">
                ISO 27001 forces you to define security policies, assign responsibilities, and manage access. This typically finds gaps before attackers do and reduces breach risk.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">Tech-Specific Challenges We Address</h2>
          
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">SaaS Data Protection</h3>
              <p className="text-gray-700">
                If your SaaS platform stores customer data (CRM, HR, financial records, health data), you need to prove it's secure. ISO 27001 covers encryption, access controls, backup procedures, and incident response. We audit your data flow and build security controls around it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Development Security</h3>
              <p className="text-gray-700">
                ISO 27001 covers secure coding, dependency management (your third-party libraries), vulnerability testing, and deployment procedures. We work with your development team to document these practices and identify gaps.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Compliance &amp; Privacy (GDPR, etc.)</h3>
              <p className="text-gray-700">
                ISO 27001 isn't GDPR, but it supports GDPR compliance. We align your information security controls with your data protection obligations — particularly around consent, data transfers, breach notification, and user rights.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Managed Service Provider (MSP) Security</h3>
              <p className="text-gray-700">
                MSPs manage other people's infrastructure and data. ISO 27001 is essential for you — it proves you protect client environments and respond to incidents. Many MSPs pursue it specifically to win enterprise contracts.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Third-Party Risk (Vendors &amp; Dependencies)</h3>
              <p className="text-gray-700">
                You depend on third-party APIs, cloud providers, and open-source libraries. ISO 27001 requires you to evaluate and monitor them. We help you build a vendor risk management process that's practical and auditable.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">AI Governance (ISO 42001)</h3>
              <p className="text-gray-700">
                If you use or build generative AI, buyers will increasingly ask for ISO 42001 (AI governance). It's similar to ISO 27001 but focused on AI risks: fairness, transparency, accountability, and security of training data. We can build it alongside ISO 27001.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-950 mb-6">Our Typical Process</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">Weeks 1–2: Gap Analysis</h3>
                <p className="text-gray-700">
                  We review your current security practices: data handling, access controls, encryption, incident response, vendor management, development security. We talk to your teams, review your policies and documentation, and assess your infrastructure. You get a clear picture of what's strong and what needs to be built. Cost: typically £1,200–2,000.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">Weeks 3–10: Implementation</h3>
                <p className="text-gray-700">
                  We build your information security management system. We write security policies, define access controls, document incident response procedures, create a vendor risk management process, and define security requirements for development and deployment. We work with your development and ops teams so the system actually fits how you work.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">Weeks 11–14: Internal Audit &amp; Management Review</h3>
                <p className="text-gray-700">
                  We conduct an independent security audit to find gaps before your certification body does. We hold a management review where you review security incidents, improvement opportunities, and resource needs. Auditors expect to see leadership engagement.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">Weeks 15–20: Certification Audit</h3>
                <p className="text-gray-700">
                  Your chosen UKAS-accredited certification body conducts a two-stage security audit. We prepare you for both. After they grant certification, it's valid for three years with annual surveillance audits.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-950 mb-6">Cost &amp; Investment</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            First-year certification cost is typically <strong>£6,000 to £16,000</strong> depending on your size and scope:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-12">
            <li><strong>ISO 27001 (SaaS / Software):</strong> £6,000–10,000</li>
            <li><strong>ISO 27001 (MSP):</strong> £7,000–12,000 (more complex)</li>
            <li><strong>ISO 9001 (Quality / Development):</strong> £5,000–8,000</li>
            <li><strong>ISO 27001 + ISO 9001:</strong> £9,500–15,000</li>
            <li><strong>ISO 42001 (AI Governance):</strong> Add £2,000–4,000</li>
          </ul>

          <p className="text-gray-700 mb-12">
            We quote a fixed fee. You know the ceiling before we start. No surprises.
          </p>

          <h2 className="text-3xl font-bold text-blue-950 mb-6">Common Questions</h2>
          
          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Do we need to hire a CISO to get ISO 27001?</h3>
              <p className="text-gray-700 mb-3">
                No. You need someone to own information security — it could be your CTO, a senior developer, or an external consultant. They don't need to be a full-time CISO. ISO 27001 is about having defined policies and responsibilities, not about having a specific job title.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Will ISO 27001 slow down our development?</h3>
              <p className="text-gray-700 mb-3">
                No — done right, it shouldn't. We build security controls into your existing development workflow, not against it. Good security practices (code review, dependency scanning, testing) should already be happening. ISO 27001 just formalizes and documents them.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">What if we're using AWS / Google Cloud / Azure?</h3>
              <p className="text-gray-700 mb-3">
                That's normal. Many companies pursue ISO 27001 while running on major cloud providers. You're responsible for your application security and your data governance; the cloud provider is responsible for infrastructure. We work within that shared responsibility model.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">How does ISO 27001 relate to SOC 2?</h3>
              <p className="text-gray-700 mb-3">
                They overlap but are different. ISO 27001 is a third-party certified standard. SOC 2 is an audit-based attestation. Many SaaS companies pursue both. ISO 27001 is usually more valuable for enterprise sales; SOC 2 is valued by some finance and healthcare buyers. We discuss which makes sense for your market during your consultation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Should we do ISO 42001 now or wait?</h3>
              <p className="text-gray-700 mb-3">
                If you're already building AI into your product, or using LLMs (like ChatGPT), consider doing it now. If you're not using AI yet, wait until you are. ISO 42001 is still emerging — demand from enterprise buyers will grow over the next 2–3 years. It's a good hedge if you're forward-thinking.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-950 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Discuss ISO Certification?</h2>
            <p className="text-lg text-blue-100 mb-8">
              A free 30-minute call is the quickest way to find out which standards will help you win enterprise contracts.
            </p>
            <Link href="/contact" className="bg-yellow-500 text-blue-950 px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition inline-block">
              Book a Free Consultation
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Rob Pragnell is a CQI/IRCA Certified Lead Auditor for ISO 27001 and a TRECCERT-accredited ISO 42001 Practitioner. He has advised SaaS companies, MSPs, software vendors, and tech startups.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
