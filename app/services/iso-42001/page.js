import Link from 'next/link';

export const metadata = {
  title: 'ISO 42001 Consultant UK — AI Management System Certification',
  description: 'ISO 42001 artificial intelligence management system certification. Expert consultancy from a BSI BridgeAI participant and ISO ESG Committee contributor.',
};

export default function ISO42001() {
  return (
    <>
      <section className="bg-navy text-white py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <span className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mb-4 inline-block">ISO 42001:2023</span>
          <h1 className="text-4xl font-bold mb-4">Artificial Intelligence Management Systems</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            The world's first international standard for AI governance. Build client trust in your AI systems — and get ahead of the regulatory curve.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed">

            <h2 className="text-2xl font-bold text-navy">What is ISO 42001?</h2>
            <p>
              ISO 42001:2023 is the international standard for Artificial Intelligence Management Systems (AIMS). Published in December 2023, it is the world's first ISO standard specifically addressing the responsible development, deployment and use of AI systems. It provides organisations with a structured framework for governing their AI activities — managing risk, ensuring transparency, maintaining human oversight, and demonstrating accountability.
            </p>
            <p>
              ISO 42001 follows the same Annex SL high-level structure as ISO 9001, 14001, 27001 and 45001 — which means it can be integrated into an existing management system with considerably less effort than a standalone implementation.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-6">Why ISO 42001 matters now</h2>
            <p>
              AI is moving from a technical feature to a boardroom governance issue. Clients, investors, regulators and supply chain partners are beginning to ask the same questions about AI that they have asked about data protection and information security — what AI are you using? Who oversees it? What happens when it goes wrong? ISO 42001 gives you a defensible, internationally recognised answer.
            </p>
            <p>
              The EU AI Act, which came into full force in 2024, creates significant compliance obligations for AI systems deployed in or affecting EU markets. While ISO 42001 is not legally mandated by the Act, its framework maps closely to many of the Act's requirements — making it an efficient route to demonstrating compliance.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-6">Who needs ISO 42001?</h2>
            <ul className="list-none space-y-2">
              {[
                'Organisations that develop, sell, or deploy AI systems as part of their products or services',
                'Technology and software companies using AI or machine learning in client-facing applications',
                'Businesses that use AI tools (including large language models) in processes that affect clients or employees',
                'Companies supplying to the public sector or regulated industries where AI governance is assessed',
                'Any organisation that wants to demonstrate responsible, trustworthy AI use to clients and stakeholders',
                'Businesses building an ESG framework that includes technology governance',
              ].map(item => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="text-gold flex-shrink-0 mt-1">◆</span>{item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-6">What ISO 42001 covers</h2>
            <p>
              The standard addresses the full lifecycle of AI systems within an organisation — from initial planning and risk assessment through to deployment, monitoring and continual improvement. Key areas include AI risk management, impact assessment, transparency and explainability, human oversight, data governance, and the responsibilities of organisations that develop AI versus those that deploy third-party AI systems.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-6">How Anacruses helps</h2>
            <p>
              Anacruses has been working with ISO 42001 since its publication. Rob Pragnell contributes to the ISO ESG Committee and participates in the BSI BridgeAI standards community — which means our clients benefit from insight into not just current requirements, but where AI governance standards are heading.
            </p>
            <p>
              We start by mapping your AI systems — what you develop, what you use, and what you deploy on behalf of clients. We then build your AI Management System: risk assessment, impact assessments, governance policies, roles and responsibilities, and the documented evidence that auditors will require.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 my-6 text-center text-xs">
              {['AI System Mapping', 'Risk & Impact', 'Governance Docs', 'Internal Audit', 'Certification'].map((s, i) => (
                <div key={s} className="bg-mist rounded p-3">
                  <div className="w-7 h-7 rounded-full bg-navy text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">{i+1}</div>
                  <div className="font-semibold text-navy">{s}</div>
                </div>
              ))}
            </div>

            <p className="text-sm font-semibold text-navy">
              Typical implementation timeline: 10–16 weeks. For organisations already holding ISO 27001, integration with the existing ISMS is significantly more efficient.
            </p>

            <div className="pt-4">
              <Link href="/contact" className="btn-primary">Get a quote for ISO 42001 →</Link>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="card border-t-4 border-t-gold">
              <h3 className="font-bold text-navy mb-2 text-sm">Rob's ISO 42001 credentials</h3>
              <ul className="text-xs text-gray-600 space-y-1.5">
                {[
                  'ISO 42001 Practitioner — TRECCERT certified (Apr 2025)',
                  'AIQI ISO/IEC 42001 qualification — UKAS accredited (Mar 2026)',
                  'Contributor to the ISO ESG Committee',
                  'Participant in BSI BridgeAI standards community',
                  'Among the first independent consultants in the UK offering ISO 42001',
                ].map(c => (
                  <li key={c} className="flex gap-2"><span className="text-gold">◆</span>{c}</li>
                ))}
              </ul>
            </div>

            <div className="card bg-navy text-white">
              <h3 className="font-bold text-gold mb-2 text-sm">Get ahead of the curve</h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                ISO 42001 is new enough that very few UK businesses have achieved certification. Early certification positions your organisation as a leader in responsible AI — before it becomes a basic compliance requirement.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-navy mb-2 text-sm">Related services</h3>
              <ul className="text-xs text-gray-600 space-y-1.5">
                {[
                  ['ISO 27001 — Information Security', '/services/iso-27001'],
                  ['ISO 9001 — Quality', '/services/iso-9001'],
                  ['Get Certified — Our Process', '/get-certified'],
                ].map(([label, href]) => (
                  <li key={href}><Link href={href} className="text-gold hover:text-gold-dark">{label} →</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-gold py-10 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-3">Interested in ISO 42001?</h2>
          <p className="opacity-90 mb-5 text-sm">This is an emerging standard and many organisations are still at the 'what does it mean for us?' stage. Book a free conversation — no commitment required.</p>
          <Link href="/contact" className="inline-block bg-white text-gold-dark font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
