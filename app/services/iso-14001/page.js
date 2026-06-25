import Link from 'next/link';

export const metadata = {
  title: 'ISO 14001 Consultant UK — Environmental Management Certification',
  description: 'ISO 14001 environmental management certification for UK businesses. Expert consultancy from a CQI/IRCA certified Lead Auditor with 20+ years experience.',
};

export default function ISO14001() {
  return (
    <>
      <section className="bg-navy text-white py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <span className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mb-4 inline-block">ISO 14001:2015</span>
          <h1 className="text-4xl font-bold mb-4">Environmental Management Systems</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Demonstrate your environmental commitment, reduce your operational impact, and win contracts where sustainability is assessed.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed">

            <h2 className="text-2xl font-bold text-navy">What is ISO 14001?</h2>
            <p>
              ISO 14001:2015 is the international standard for Environmental Management Systems. It provides a framework for organisations to manage their environmental responsibilities in a systematic way — reducing waste, cutting energy use, ensuring legal compliance, and demonstrating genuine environmental commitment to customers and stakeholders.
            </p>
            <p>
              Over 300,000 organisations worldwide hold ISO 14001 certification. It is increasingly required as a condition of tendering for public sector contracts and large corporate supply chains, particularly in construction, engineering, manufacturing, and facilities management.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-6">Who needs ISO 14001?</h2>
            <p>ISO 14001 is particularly valuable for businesses that:</p>
            <ul className="list-none space-y-2">
              {[
                'Tender for public sector or local authority contracts where environmental management is assessed',
                'Supply to large corporates with sustainability requirements in their procurement criteria',
                'Operate in sectors with significant environmental impact — construction, manufacturing, logistics, facilities',
                'Want to reduce energy costs, waste disposal costs, or raw material usage',
                'Face increasing scrutiny from clients or regulators on environmental performance',
                'Are building an ESG (Environmental, Social and Governance) strategy',
              ].map(item => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="text-gold flex-shrink-0 mt-1">◆</span>{item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-6">How Anacruses helps</h2>
            <p>
              We start with a gap analysis — understanding your current environmental impacts, legal obligations, and how your existing processes compare to what ISO 14001 requires. From there, we build a practical Environmental Management System that fits your business, not a generic template.
            </p>
            <p>
              We handle all documentation — your environmental policy, objectives, aspects and impacts register, legal register, and operational procedures. We train your team, conduct your internal audit, and support you through the external certification audit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 my-6 text-center text-xs">
              {['Gap Analysis', 'Aspects & Impacts', 'Documentation', 'Internal Audit', 'Certification'].map((s, i) => (
                <div key={s} className="bg-mist rounded p-3">
                  <div className="w-7 h-7 rounded-full bg-navy text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">{i+1}</div>
                  <div className="font-semibold text-navy">{s}</div>
                </div>
              ))}
            </div>

            <p className="text-sm font-semibold text-navy">
              Typical implementation timeline: 10–16 weeks, depending on your organisation's size, number of sites, and the complexity of your environmental aspects.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-6">ISO 14001 and integrated management systems</h2>
            <p>
              ISO 14001 shares the same high-level structure (Annex SL) as ISO 9001 and ISO 45001. If you already hold ISO 9001, adding ISO 14001 is significantly more efficient — much of the documentation, risk management, and audit framework can be integrated. This is known as an Integrated Management System (IMS) and is an area where Anacruses has considerable expertise.
            </p>

            <div className="pt-4">
              <Link href="/contact" className="btn-primary">Get a quote for ISO 14001 →</Link>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="card border-t-4 border-t-gold">
              <h3 className="font-bold text-navy mb-2 text-sm">Rob's ISO 14001 credentials</h3>
              <ul className="text-xs text-gray-600 space-y-1.5">
                {[
                  'CQI/IRCA Certified Lead Auditor — ISO 14001',
                  '20+ years implementing environmental management systems',
                  'Experience across construction, manufacturing and services',
                  'ISO ESG Committee contributor — current standards development',
                  'Approved by multiple UKAS-accredited certification bodies',
                ].map(c => (
                  <li key={c} className="flex gap-2"><span className="text-gold">◆</span>{c}</li>
                ))}
              </ul>
            </div>

            <div className="card bg-mist">
              <h3 className="font-bold text-navy mb-2 text-sm">Did you know?</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                ISO 14001 certification can give you a material advantage when tendering for public sector contracts. Many local authorities and government departments assess environmental management as part of their procurement scoring — ISO 14001 provides objective evidence of your commitment.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-navy mb-2 text-sm">Related services</h3>
              <ul className="text-xs text-gray-600 space-y-1.5">
                {[
                  ['ISO 9001 — Quality', '/services/iso-9001'],
                  ['ISO 45001 — Health & Safety', '/services/iso-45001'],
                  ['ISO 27001 — Information Security', '/services/iso-27001'],
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
          <h2 className="text-xl font-bold mb-3">Ready to get ISO 14001 certified?</h2>
          <p className="opacity-90 mb-5 text-sm">Book a free consultation and we will explain exactly what is involved for your business — including how to integrate it with any existing ISO certifications.</p>
          <Link href="/contact" className="inline-block bg-white text-gold-dark font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
