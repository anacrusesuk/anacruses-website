import Link from 'next/link';

export const metadata = {
  title: 'Sectors We Work With — Anacruses Associates Ltd',
  description: 'ISO consultancy for UK businesses across technology, professional services, manufacturing, construction, FinTech, LegalTech and AI-adopting organisations.',
};

const sectors = [
  {
    title: 'Technology & IT Services',
    icon: '💻',
    standards: ['ISO 27001', 'ISO 9001'],
    body: 'Software developers, MSPs, and IT service businesses seeking ISO 27001 to satisfy client contracts and tender requirements — often alongside ISO 9001 as a quality foundation. Information security certification is increasingly a condition of enterprise sales in this sector, and the window to get ahead of competitors is narrowing.',
  },
  {
    title: 'Professional Services',
    icon: '📋',
    standards: ['ISO 27001', 'ISO 9001'],
    body: 'Consultancies, legal, financial, and business services firms where information security and quality management credentials are increasingly expected by enterprise clients. Larger buyers are routinely asking for ISO certification before renewing or extending contracts — and the businesses that have it win the work.',
  },
  {
    title: 'Manufacturing & Engineering',
    icon: '⚙️',
    standards: ['ISO 9001', 'ISO 14001', 'ISO 45001'],
    body: 'Businesses supplying into larger supply chains where ISO 9001 and ISO 14001 are baseline supplier requirements. Integrated management systems covering quality, environment, and health and safety are the norm in this sector — and building them as a single system rather than three separate exercises saves significant time and cost.',
  },
  {
    title: 'Construction & Facilities',
    icon: '🏗️',
    standards: ['ISO 45001', 'ISO 9001', 'ISO 14001'],
    body: 'Contractors and facilities management businesses requiring ISO 45001 for health and safety compliance, typically alongside ISO 9001 and ISO 14001 for tendering purposes. Pre-qualification questionnaires in this sector increasingly treat ISO certification as a pass/fail threshold, not a differentiator.',
  },
  {
    title: 'FinTech & LegalTech',
    icon: '🔒',
    standards: ['ISO 27001', 'ISO 9001'],
    body: 'Scale-up and growth-stage businesses handling sensitive data or client funds, where ISO 27001 is increasingly a condition of enterprise sales, investor due diligence, and regulatory readiness. Getting certified early — before a large client demands it with a short deadline — is almost always the right decision.',
  },
  {
    title: 'Organisations Adopting AI',
    icon: '🤖',
    standards: ['ISO 42001', 'ISO 27001'],
    body: 'Any business integrating AI tools into products, services, or decision-making processes where ISO 42001 provides a governance framework ahead of regulation. Early adoption signals to customers and partners that AI risk, bias, and transparency are being managed deliberately — not reactively. This is the standard where being first genuinely matters.',
  },
];

export default function Sectors() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <span className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mb-4 inline-block">Sectors We Work With</span>
          <h1 className="text-4xl font-bold mb-4">ISO Expertise Across the UK Economy</h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            Anacruses works with UK businesses across a wide range of sectors where ISO certification is a commercial requirement, a procurement differentiator, or a board-level priority.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-10 bg-mist">
        <div className="max-w-4xl mx-auto px-4 text-gray-700 leading-relaxed space-y-4">
          <p>
            Most businesses begin their ISO journey because a customer has asked for it — a tender requirement, a contract renewal condition, or a procurement questionnaire with a deadline attached. That is a perfectly good reason to start. But the businesses that get the most out of certification are the ones that use it as a platform to improve how they operate, not just a box to tick before the audit.
          </p>
          <p>
            Whatever your sector, Anacruses brings the same approach: understand your business first, then build a management system that fits it. Not the other way around.
          </p>
        </div>
      </section>

      {/* SECTORS GRID */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map(s => (
              <div key={s.title} className="card border-t-4 border-t-gold">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="font-bold text-navy text-lg">{s.title}</h2>
                  <span className="text-2xl ml-4">{s.icon}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {s.standards.map(std => (
                    <span key={std} className="bg-navy text-white text-xs font-bold px-2 py-1 rounded">{std}</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOT LISTED SECTION */}
      <section className="py-10 bg-mist">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Your sector not listed?</h2>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            It almost certainly is covered. If you handle data, serve customers, manage risk, or operate in a supply chain, there is an ISO standard that applies to you. The list above covers the sectors where we are most active — it is not a ceiling on where we work.
          </p>
          <Link href="/contact" className="btn-primary">Tell us about your business</Link>
        </div>
      </section>

      {/* ROB STRIP */}
      <section className="bg-navy text-white py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-shrink-0">
            <img src="/images/rob.jpg" alt="Rob Pragnell — ISO Consultant"
                 className="w-40 h-40 rounded-full object-cover object-center border-4 border-gold shadow-xl" />
          </div>
          <div className="flex-grow">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">One consultant. Every sector.</p>
            <h2 className="text-2xl font-bold mb-3">Rob Pragnell works directly with every client</h2>
            <p className="text-blue-100 leading-relaxed mb-4 max-w-2xl text-sm">
              Over 20 years of experience across manufacturing, technology, professional services, construction and more. CQI/IRCA certified Lead Auditor across ISO 9001, 14001, 27001 and 45001 — and implementer for ISO 42001. Whatever your sector, you get the same level of expertise on your project.
            </p>
            <Link href="/about" className="btn-outline">About Rob →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-8 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Ready to find out what certification would involve?</h2>
          <p className="mb-4 opacity-90">Book a free, no-obligation call. We will tell you exactly what is involved, how long it will take, and what it will cost — for your sector, your size, and your starting point.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-block bg-white text-gold-dark font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
              Book a Free Consultation
            </Link>
            <a href="tel:07792259840" className="text-white font-semibold hover:underline">or call 07792 259840</a>
          </div>
        </div>
      </section>
    </>
  );
}
