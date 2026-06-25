import Link from 'next/link';

export const metadata = {
  title: 'ISO 45001 Consultant UK — Health & Safety Management Certification',
  description: 'ISO 45001 health and safety management certification for UK businesses. Expert consultancy from a CQI/IRCA certified Lead Auditor. IOSH Managing Safely trained.',
};

export default function ISO45001() {
  return (
    <>
      <section className="bg-navy text-white py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <span className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mb-4 inline-block">ISO 45001:2018</span>
          <h1 className="text-4xl font-bold mb-4">Occupational Health & Safety Management Systems</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            The international gold standard for workplace health and safety — and the formal replacement for OHSAS 18001.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed">

            <h2 className="text-2xl font-bold text-navy">What is ISO 45001?</h2>
            <p>
              ISO 45001:2018 is the international standard for Occupational Health and Safety Management Systems. It replaced OHSAS 18001 as the recognised framework for managing workplace health and safety risks — reducing incidents, protecting employees and contractors, and demonstrating a systematic, proactive approach to safety governance.
            </p>
            <p>
              If your organisation still holds OHSAS 18001 certification, it should already have transitioned to ISO 45001 — the OHSAS standard was officially withdrawn in March 2021. If you have not yet made that transition, Anacruses can help.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-6">Who needs ISO 45001?</h2>
            <ul className="list-none space-y-2">
              {[
                'Construction, engineering, civil and rail businesses where H&S is assessed in pre-qualification questionnaires',
                'Facilities management, utilities and infrastructure organisations',
                'Manufacturing businesses with significant machinery, chemical or physical hazards',
                'Any organisation tendering for contracts where safety performance is evaluated',
                'Businesses that want to move beyond legal compliance to proactive safety leadership',
                'Organisations that have experienced incidents or near-misses and want a structured improvement framework',
              ].map(item => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="text-gold flex-shrink-0 mt-1">◆</span>{item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-6">What ISO 45001 requires</h2>
            <p>
              ISO 45001 goes beyond simply documenting health and safety procedures. It requires organisations to demonstrate a systematic approach to identifying hazards and assessing risks, engaging workers in safety governance, setting measurable H&S objectives, and driving continual improvement in safety performance. Leadership commitment is explicitly required — this standard cannot be delegated entirely to a safety officer.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-6">How Anacruses helps</h2>
            <p>
              We begin with a gap analysis against the ISO 45001 requirements — reviewing your existing H&S arrangements, documentation, and incident records. We then build or enhance your Occupational Health and Safety Management System, covering hazard identification, risk assessment, legal register, objectives, competence records, emergency procedures, and audit programme.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 my-6 text-center text-xs">
              {['Gap Analysis', 'Hazard & Risk', 'Documentation', 'Internal Audit', 'Certification'].map((s, i) => (
                <div key={s} className="bg-mist rounded p-3">
                  <div className="w-7 h-7 rounded-full bg-navy text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">{i+1}</div>
                  <div className="font-semibold text-navy">{s}</div>
                </div>
              ))}
            </div>

            <p className="text-sm font-semibold text-navy">
              Typical implementation timeline: 10–16 weeks. Transition from OHSAS 18001 to ISO 45001 is typically faster — 6–10 weeks.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-6">Integrating ISO 45001 with your other standards</h2>
            <p>
              ISO 45001 shares the same Annex SL high-level structure as ISO 9001 and ISO 14001. If you hold either of those standards — or are implementing them alongside ISO 45001 — a significant proportion of your management system can be integrated. An Integrated Management System covering quality, environment and health and safety is increasingly common in construction, engineering and manufacturing, and Anacruses has delivered a number of these.
            </p>

            <div className="pt-4">
              <Link href="/contact" className="btn-primary">Get a quote for ISO 45001 →</Link>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="card border-t-4 border-t-gold">
              <h3 className="font-bold text-navy mb-2 text-sm">Rob's ISO 45001 credentials</h3>
              <ul className="text-xs text-gray-600 space-y-1.5">
                {[
                  'CQI/IRCA Certified Lead Auditor — ISO 45001',
                  'IOSH Managing Safely trained',
                  'Experience across construction, rail, civils and manufacturing',
                  'OHSAS 18001 to ISO 45001 transition experience',
                  'Integrated management system (IMS) expertise',
                ].map(c => (
                  <li key={c} className="flex gap-2"><span className="text-gold">◆</span>{c}</li>
                ))}
              </ul>
            </div>

            <div className="card bg-mist">
              <h3 className="font-bold text-navy mb-2 text-sm">Still on OHSAS 18001?</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                OHSAS 18001 was withdrawn in March 2021. If your certificate still references OHSAS 18001, it is no longer to a current standard. Transitioning to ISO 45001 is typically straightforward for organisations with an existing health and safety management system. Get in touch to discuss what is involved.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-navy mb-2 text-sm">Related services</h3>
              <ul className="text-xs text-gray-600 space-y-1.5">
                {[
                  ['ISO 9001 — Quality', '/services/iso-9001'],
                  ['ISO 14001 — Environmental', '/services/iso-14001'],
                  ['Get Certified — Our Process', '/get-certified'],
                  ['UKAS vs non-UKAS Explained', '/about'],
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
          <h2 className="text-xl font-bold mb-3">Ready to get ISO 45001 certified?</h2>
          <p className="opacity-90 mb-5 text-sm">Book a free consultation. We will review your existing H&S arrangements and explain exactly what is needed — whether you are starting from scratch or transitioning from OHSAS 18001.</p>
          <Link href="/contact" className="inline-block bg-white text-gold-dark font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
