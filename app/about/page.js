import Link from 'next/link';

export const metadata = {
  title: 'About Rob Pragnell — ISO Consultant',
  description: 'Rob Pragnell is a CQI and TRECCERT certified Lead Auditor and founder of Anacruses Associates Ltd, with over 20 years of ISO consultancy experience across the UK.',
};

const qualifications = [
  'CQI Certified Lead Auditor — ISO 9001, 14001 & 45001',
  'TRECCERT Certified Lead Auditor — ISO 27001',
  'ISO 42001 Practitioner — TRECCERT & AIQI (UKAS-accredited)',
  'ISO 27001 Implementer — BSI',
  'TRECCERT-accredited ISO Standards Trainer',
  'IOSH Managing Safely',
  'PRINCE2 Practitioner',
  'Member, IAN (International Associates Network)',
  'Member, Chartered College of Teaching Professional Framework',
  'Contributor, ISO ESG Committee',
  'Participant, BSI BridgeAI Standards Community',
];

const standards = [
  ['ISO 9001:2015', 'Quality Management Systems'],
  ['ISO 14001:2015', 'Environmental Management Systems'],
  ['ISO 27001:2022', 'Information Security Management Systems'],
  ['ISO 45001:2018', 'Occupational Health and Safety'],
  ['ISO 42001:2023', 'Artificial Intelligence Management Systems'],
  ['ISO 17025', 'UKAS Laboratory Accreditation'],
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">About</p>
          <h1 className="text-4xl font-bold mb-4">Rob Pragnell</h1>
          <p className="text-xl text-blue-100 max-w-2xl">ISO Lead Auditor · Consultant · Founder of Anacruses Associates Ltd</p>
        </div>
      </section>

      {/* Biography */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed">
            {/* Photo on mobile — shows above text */}
            <div className="md:hidden flex justify-center mb-4">
              <img src="/images/rob.jpg" alt="Rob Pragnell — ISO Consultant"
                   className="w-40 h-40 rounded-full object-cover object-center border-4 border-gold shadow-lg" />
            </div>
            <p>
              I started Anacruses because I kept seeing the same thing — businesses going through ISO certification and not seeing the benefits of their hard work. Often businesses will get the certificate on the wall, then not touch or look at their management system for 12 months.
            </p>
            <p>
              That is not what certification is supposed to do. Done properly, an ISO management system changes how a business operates — it removes the guesswork, builds the kind of consistency customers notice, and creates a foundation that scales. That is what I set up Anacruses to deliver.
            </p>
            <p>
              I have been working in ISO standards and management systems for over 20 years, across a wide range of sectors and business sizes — from SMEs seeking their first certification to larger organisations running integrated systems across multiple sites.
            </p>
            <p>
              As a CQI/IRCA certified Lead Auditor across ISO 9001, 14001, 27001, and 45001 — and implementer for those standards plus ISO 42001 — I have been on both sides of the audit table, which matters. I know what auditors look for, how findings tend to arise, and how to build a system that holds up when the pressure is on.
            </p>
            <p>
              I am also a TRECCERT-accredited trainer, which means I can train your team — from awareness sessions through to Lead Auditor qualification — without needing to bring in a separate provider.
            </p>
            <p>
              Outside of client work, I have sat on the ISO ESG Committee and contribute to the BSI BridgeAI community, which means I am directly involved in shaping the standards your business will need to meet in the years ahead. When ISO 42001 becomes a procurement requirement, or when the revisions to ISO 9001 and 14001 land, Anacruses clients will not be reading about it in a newsletter — they will have been briefed months in advance.
            </p>
            <p>
              I work directly with every Anacruses client. You will not be handed to a subcontractor or a junior consultant after the first call. If you are talking to me, I am the person doing the work.
            </p>
            <p className="font-semibold text-navy">
              If you want a straight conversation about what certification would actually involve for your business — timescales, cost, realistic expectations — book a free call. No sales pitch, no obligation.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="btn-primary">Book a free consultation with Rob</Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Photo — desktop */}
            <div className="hidden md:flex justify-center">
              <img src="/images/rob.jpg" alt="Rob Pragnell — ISO Consultant"
                   className="w-48 h-48 rounded-full object-cover object-center border-4 border-gold shadow-xl" />
            </div>
            <div className="card border-t-4 border-t-gold">
              <h3 className="font-bold text-navy mb-3 text-sm uppercase tracking-wide">Qualifications & Affiliations</h3>
              <ul className="space-y-2">
                {qualifications.map(q => (
                  <li key={q} className="text-xs text-gray-600 flex gap-2">
                    <span className="text-gold mt-0.5 flex-shrink-0">◆</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card border-t-4 border-t-navy">
              <h3 className="font-bold text-navy mb-3 text-sm uppercase tracking-wide">Standards Expertise</h3>
              <ul className="space-y-2">
                {standards.map(([std, desc]) => (
                  <li key={std} className="text-xs text-gray-600">
                    <span className="font-bold text-navy">{std}</span>
                    <br />{desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Anacruses company section */}
      <section className="bg-mist py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-4">About Anacruses Associates Ltd</h2>
          <div className="max-w-3xl text-gray-700 leading-relaxed space-y-4">
            <p>
              Anacruses Associates Ltd was founded to provide independent, expert ISO consultancy to UK businesses of all sizes. The name reflects a core belief: that the journey to certification — and the improvement it drives — matters as much as the certificate itself.
            </p>
            <p>
              We are based in Hertfordshire and work with clients across the UK, delivering consultancy remotely or on-site depending on your preference and the scope of work. We are members of the IAN (International Associates Network) and the Chartered College of Teaching Professional Framework.
            </p>
            <p>
              Anacruses works closely with leading UKAS-accredited certification bodies — including ISOQAR, with whom we have a strong working relationship — and can recommend the right body for your specific sector, size, and timescales.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
