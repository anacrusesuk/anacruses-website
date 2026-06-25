import Link from 'next/link';

export const metadata = {
  title: 'About Rob Pragnell — ISO Consultant',
  description: 'Rob Pragnell is a CQI/IRCA certified Lead Auditor and founder of Anacruses Associates Ltd, with over 20 years of ISO consultancy experience across the UK.',
};

const qualifications = [
  'CQI/IRCA Certified Lead Auditor — ISO 9001, 14001, 27001, 45001 & 42001',
  'TRECCERT-accredited ISO trainer',
  'IOSH Managing Safely',
  'Member, IAN (International Associates Network)',
  'Member, Chartered College of Teaching Professional Framework',
  'Contributor, ISO ESG Committee',
  'Participant, BSI BridgeAI Standards Community',
  'Member, Small Business AI Club',
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
      <section className="bg-navy-DEFAULT text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gold-DEFAULT font-semibold text-sm uppercase tracking-widest mb-3">About</p>
          <h1 className="text-4xl font-bold mb-4">Rob Pragnell</h1>
          <p className="text-xl text-blue-100 max-w-2xl">ISO Standards Consultant · Lead Auditor · Founder of Anacruses Associates Ltd</p>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed">
            <p>
              Rob Pragnell is the founder and principal consultant of Anacruses Associates Ltd, bringing over 20 years of hands-on experience helping businesses across the UK achieve and maintain ISO certification. His approach combines deep technical knowledge of international standards with a practical, client-first philosophy — getting organisations certified efficiently, sustainably, and without unnecessary complexity.
            </p>
            <p>
              Rob is a certified Lead Auditor (CQI/IRCA) across five ISO standards: ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 27001 (Information Security), ISO 45001 (Health & Safety), and the emerging ISO 42001 (Artificial Intelligence Management). He is also a TRECCERT-accredited trainer, delivering tailored ISO training programmes from foundation level through to Lead Auditor qualification.
            </p>
            <p>
              His consultancy experience spans a wide range of sectors — from SMEs seeking their first certification to larger organisations managing integrated management systems across multiple sites. Rob has managed internal audit programmes, developed audit management software, and earned multiple achievement awards in the quality and compliance field.
            </p>
            <p>
              Rob is actively involved in shaping the future of ISO standards. He contributes to the ISO Committee for ESG, participates in the BridgeAI standards community operated by BSI, and supports SMEs through the Small Business AI Club. This direct involvement in standards development means Anacruses clients benefit not just from expertise in current requirements, but from insight into where standards are heading.
            </p>
            <p>
              He is also an IOSH Managing Safely trained professional with extensive experience supporting UKAS-accredited laboratories — a specialist area that few generalist ISO consultants cover.
            </p>
            <p className="font-semibold text-navy-DEFAULT">
              When you work with Anacruses, you work with Rob directly — not a junior consultant or a subcontractor. Every client gets the benefit of over two decades of experience, from the first conversation to the certification audit.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="btn-primary">Book a free consultation with Rob</Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card border-t-4 border-t-gold-DEFAULT">
              <h3 className="font-bold text-navy-DEFAULT mb-3 text-sm uppercase tracking-wide">Qualifications & Affiliations</h3>
              <ul className="space-y-2">
                {qualifications.map(q => (
                  <li key={q} className="text-xs text-gray-600 flex gap-2">
                    <span className="text-gold-DEFAULT mt-0.5 flex-shrink-0">◆</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card border-t-4 border-t-navy-DEFAULT">
              <h3 className="font-bold text-navy-DEFAULT mb-3 text-sm uppercase tracking-wide">Standards Expertise</h3>
              <ul className="space-y-2">
                {standards.map(([std, desc]) => (
                  <li key={std} className="text-xs text-gray-600">
                    <span className="font-bold text-navy-DEFAULT">{std}</span>
                    <br />{desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Anacruses company section */}
      <section className="bg-mist py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-DEFAULT mb-4">About Anacruses Associates Ltd</h2>
          <div className="max-w-3xl text-gray-700 leading-relaxed space-y-4">
            <p>
              Anacruses Associates Ltd was founded to provide independent, expert ISO consultancy to UK businesses of all sizes. The name reflects a core belief: that the journey to certification — and the improvement it drives — matters as much as the certificate itself.
            </p>
            <p>
              We are based in Hertfordshire and work with clients across the UK, delivering consultancy remotely or on-site depending on your preference and the scope of work. We are members of the IAN (International Associates Network) and the Chartered College of Teaching Professional Framework.
            </p>
            <p>
              Anacruses is not affiliated with any certification body. That independence means we can recommend the right body for your business — not the one that pays the highest commission.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
