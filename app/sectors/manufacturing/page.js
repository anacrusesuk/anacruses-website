import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'ISO Certification for Manufacturing | Anacruses Associates',
  description: 'ISO 9001, ISO 45001, ISO 14001, and ISO 50001 certification for UK manufacturers. Supply chain compliance. Free consultation.',
};

export default function ManufacturingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which ISO standards do manufacturing companies need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most manufacturers need ISO 9001 (quality), ISO 45001 (health and safety), and ISO 14001 (environmental). Some sectors add ISO 50001 (energy) if energy efficiency is strategically important. Large OEMs often require suppliers to hold ISO 9001. Automotive and aerospace suppliers may require IATF 16949 or equivalent. The right portfolio depends on your sector and customer base.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does ISO certification impact supply chain relationships?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many large OEMs and contract manufacturers now require ISO 9001 (and sometimes ISO 45001 and ISO 14001) as a condition of supplying them. Without it, you can\'t bid. Certification also removes audits from your customers — they trust the third-party auditor\'s assessment instead of conducting their own. This saves you time and shows you\'re serious about quality.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does ISO 9001 implementation look like in manufacturing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO 9001 for manufacturing focuses on process control, product inspection, traceability, and corrective action. We build your quality management system around your production processes: incoming inspection, in-process controls, final inspection, packaging, and traceability records. We structure your procedures so they actually work on the factory floor, not just in an office.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do we need ISO 14001 for environmental compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends. If you operate within your environmental permit, you\'re likely compliant by law. ISO 14001 goes further — it requires you to identify and manage environmental impacts, plan for improvement, and demonstrate commitment. Many customers now expect it. If you\'re in a regulated sector (chemicals, textiles, food), or if your waste, emissions, or effluent is significant, ISO 14001 is worth considering. We advise during the gap analysis.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does ISO certification take for a manufacturing plant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'First-time certification typically takes 16–24 weeks: 2 weeks for gap analysis, 8–12 weeks for system build and process documentation, 4–6 weeks for internal audit and management review, then 4–8 weeks for the certification body audit. Multi-site manufacturers take longer. We always quote a fixed timeline and fixed fee upfront.',
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
            <p className="text-sm font-semibold text-yellow-400 mb-4">ISO CERTIFICATION FOR MANUFACTURING</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ISO Certification Built for Manufacturing.
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              ISO 9001, ISO 45001, ISO 14001 certification that works for production lines, supply chains, and multi-site operations.
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
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Why Manufacturing Firms Choose ISO</h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              Manufacturing operates on customer requirements, supply chain compliance, and operational efficiency. Your customers want proof that you control quality, manage risk, and operate responsibly. Your competitors are pursuing ISO. Your suppliers probably already have it.
            </p>
            <p>
              ISO certification isn't compliance theatre. It's a structured system for identifying what you do well, fixing what you don't, and proving it to auditors and customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-8 rounded">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Win Customer Contracts</h3>
              <p className="text-gray-700">
                Many OEMs require ISO 9001 as a precondition of supply. Without it, you can't bid on those contracts. Certification removes that barrier and demonstrates quality commitment.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Reduce Customer Audits</h3>
              <p className="text-gray-700">
                Customers stop auditing you when you're certified — they trust the third-party assessment instead. This saves your team time and reduces disruption to production.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Improve Processes</h3>
              <p className="text-gray-700">
                ISO forces clarity on quality controls, traceability, corrective action, and process discipline. Better processes mean fewer rework cycles, faster throughput, and higher margins.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">Manufacturing-Specific Challenges We Address</h2>
          
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Production Process Control</h3>
              <p className="text-gray-700">
                ISO 9001 requires defined, controlled, and monitored production processes. We work with your teams to document your production workflow, define control points, set acceptance criteria, and build traceability records. The goal is repeatability and auditability — not creating paperwork.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Supplier Management at Scale</h3>
              <p className="text-gray-700">
                You depend on suppliers for raw materials and components. ISO 9001 requires you to evaluate and monitor them. We build a supplier management system that's practical: risk-based evaluation, clear requirements, and routine check-ins. Not a compliance checklist — a real process.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Product Traceability &amp; Recall</h3>
              <p className="text-gray-700">
                If you ever need to recall a batch, you need to know where it went. ISO 9001 requires documented traceability. We help you build this into your system so if there's ever a quality issue, you can act fast and minimize damage to your reputation and supply chain.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Multi-Site Operations</h3>
              <p className="text-gray-700">
                If you operate multiple facilities, ISO certification covers all of them under one certificate — but they all need to follow the same system. We build a central QMS framework that's flexible enough for local variation but tight enough for consistency.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">Energy &amp; Environmental Efficiency</h3>
              <p className="text-gray-700">
                ISO 14001 helps you identify environmental impacts (waste, emissions, effluent, energy). ISO 50001 (energy) is separate but complementary. Both can help you reduce operating costs. We identify which makes sense for your site during the gap analysis.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-950 mb-6">Our Typical Process</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">Weeks 1–2: Gap Analysis</h3>
                <p className="text-gray-700">
                  We walk your production lines, review your current processes and documentation, talk to your teams, and assess your supplier management and traceability systems. We look at what's already strong and what needs to be built. You get a clear picture and a prioritised roadmap. Cost: typically £1,200–2,000.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">Weeks 3–10: Implementation</h3>
                <p className="text-gray-700">
                  We build your quality management system and (if pursuing ISO 14001) environmental management system. We document your production processes, define control points, build supplier management procedures, and create traceability records. We write everything; you review and approve.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">Weeks 11–14: Internal Audit &amp; Management Review</h3>
                <p className="text-gray-700">
                  We conduct an independent internal audit, checking that your processes work as documented. We hold a management review where you review system performance, decide on improvements, and discuss investment. Auditors expect to see management engagement here.
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
            First-year certification cost is typically <strong>£5,000 to £15,000</strong> depending on your size, complexity, and which standards you pursue:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-12">
            <li><strong>ISO 9001 alone:</strong> £5,000–8,000</li>
            <li><strong>ISO 45001 alone:</strong> £5,500–9,000</li>
            <li><strong>ISO 14001 alone:</strong> £4,500–7,000</li>
            <li><strong>ISO 9001 + ISO 45001:</strong> £8,500–13,000</li>
            <li><strong>All three (9001 + 45001 + 14001):</strong> £11,000–15,000</li>
            <li><strong>ISO 50001 (energy):</strong> Add £2,000–3,000</li>
          </ul>

          <p className="text-gray-700 mb-12">
            We quote a fixed fee. No surprises. Multi-site operations may have different pricing — we discuss that in the initial consultation.
          </p>

          <h2 className="text-3xl font-bold text-blue-950 mb-6">Common Questions</h2>
          
          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Which standard should we pursue first?</h3>
              <p className="text-gray-700 mb-3">
                Start with your biggest pain point or customer requirement. If customer audits are disrupting production, ISO 9001 removes that. If your biggest customer insists on it, that makes it the first priority. Many manufacturers do ISO 9001 + ISO 45001 together because the investment difference is small but the coverage is comprehensive.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Do we need ISO 50001 for energy?</h3>
              <p className="text-gray-700 mb-3">
                Only if energy is a significant cost or sustainability is strategically important. ISO 50001 requires you to measure energy use, identify inefficiencies, and plan improvements. If energy is 20%+ of your operating costs, it's usually worth it — the system typically pays for itself within 3–5 years through efficiency improvements. We assess this during the gap analysis.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">What if we operate in multiple countries?</h3>
              <p className="text-gray-700 mb-3">
                ISO certificates are recognized globally. A UK UKAS certificate is respected in Europe, North America, and most other markets. If you have facilities in multiple countries, each can pursue certification separately under the same QMS framework, or you can integrate them under one certificate (requires your certification body to audit all sites). We discuss the best approach in your consultation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">How does ISO certification affect our insurance?</h3>
              <p className="text-gray-700 mb-3">
                Some insurers offer premium discounts for certified organizations — particularly for ISO 45001 (safety) and ISO 14001 (environmental liability). Ask your broker what discounts are available. Over three years, those discounts can offset a significant portion of your certification cost.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">What happens if we fail the audit?</h3>
              <p className="text-gray-700 mb-3">
                It's rare. The internal audit stage finds most gaps before your certification body auditor arrives. If nonconformities are found at certification audit, you have 30 days to correct them and the auditor will re-audit that area. We support that at no extra cost.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-950 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Discuss ISO Certification?</h2>
            <p className="text-lg text-blue-100 mb-8">
              A free 30-minute call is the quickest way to find out which standards make sense and what certification would cost for your operation.
            </p>
            <Link href="/contact" className="bg-yellow-500 text-blue-950 px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition inline-block">
              Book a Free Consultation
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Rob Pragnell is a CQI/IRCA Certified Lead Auditor for ISO 9001, 14001, 27001, 45001, and 42001. He has advised manufacturing firms ranging from precision engineering to food production.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
