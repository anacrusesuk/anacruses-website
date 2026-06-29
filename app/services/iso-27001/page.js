import Link from 'next/link';

export const metadata = {
  title: 'ISO 27001 Consultant UK — Information Security Certification',
  description: 'ISO 27001 information security management certification for UK businesses. Expert consultancy from a CQI/IRCA certified Lead Auditor with 20+ years experience.',
};

export default function ISO27001() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How long does ISO 27001 certification take for a UK business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'For a UK SME implementing ISO 27001 from scratch, realistic timelines are 12 to 20 weeks from gap analysis to certification audit. Organisations with mature IT security practices and existing documentation move faster.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does ISO 27001 certification cost in the UK?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Total first-year cost for a UK SME is typically £8,000 to £25,000, covering consultancy fees of £5,000 to £20,000 and certification body audit fees of £2,500 to £6,000. Ongoing annual surveillance audit fees are typically £1,500 to £3,500.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is a Statement of Applicability in ISO 27001?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The Statement of Applicability (SoA) is a document that lists all 93 Annex A controls from ISO 27001:2022, states whether each control is applicable to your organisation, and documents your reasoning for inclusion or exclusion. It is a key document reviewed in detail by the certification body auditor.',
                },
              },
              {
                '@type': 'Question',
                name: 'How many controls are in ISO 27001:2022?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ISO 27001:2022 contains 93 Annex A controls across four themes: Organisational (37 controls), People (8 controls), Physical (14 controls), and Technological (34 controls). This replaced the 114 controls across 14 domains in the 2013 version.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does ISO 27001 certification help with UK GDPR compliance?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Many of the technical and organisational measures required under GDPR Article 32 are directly addressed by ISO 27001 Annex A controls. ISO 27001 certification provides documented evidence of your information security programme, which is valuable in demonstrating GDPR compliance and in the event of an ICO investigation.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do cyber insurers require ISO 27001?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Cyber insurers are increasingly requiring ISO 27001 certification — or evidence of equivalent controls — as a condition of cover. Achieving certification can reduce premiums and significantly strengthens your position when making a claim.',
                },
              },
            ],
          }),
        }}
      />

      <section className="bg-navy text-white py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <span className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mb-4 inline-block">ISO 27001:2022</span>
          <h1 className="text-4xl font-bold mb-4">Information Security Management Systems</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Protect your data, prove it to clients, and meet the security requirements that IT, finance, and healthcare supply chains increasingly demand.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed">

            <p className="text-gray-600 leading-relaxed border-l-4 border-gold pl-4 py-1">
              ISO 27001:2022 is the international standard for Information Security Management Systems. It provides a framework for managing information security risks and protecting the confidentiality, integrity, and availability of data. It is the benchmark credential for IT, financial services, healthcare, and public sector supply chains, and is increasingly required by cyber insurers. UK certification takes 12 to 20 weeks for an SME.
            </p>

            <h2 className="text-2xl font-bold text-navy">What is ISO 27001?</h2>
            <p>
              ISO 27001:2022 is the international standard for Information Security Management Systems. It provides a structured framework for identifying, assessing and managing information security risks — protecting the confidentiality, integrity and availability of your data and the data your clients entrust to you.
            </p>
            <p>
              ISO 27001 certification is recognised globally as the gold standard for information security governance. It is increasingly a contractual requirement in technology, financial services, healthcare, and public sector supply chains, and is now routinely required by cyber insurers as a condition of cover.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-6">Who needs ISO 27001?</h2>
            <p>ISO 27001 is particularly relevant for businesses that:</p>
            <ul className="list-none space-y-2">
              {[
                'Handle sensitive client data, personal data, or confidential business information',
                'Supply IT, software, cloud, or managed services to other businesses',
                'Operate in financial services, healthcare, legal, or public sector',
                'Are required by clients or contracts to demonstrate information security controls',
                'Want to strengthen their cyber insurance position or reduce premiums',
                'Have experienced or want to prevent data breaches, ransomware, or security incidents',
                'Need to demonstrate compliance with UK GDPR alongside their data protection obligations',
              ].map(item => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="text-gold flex-shrink-0 mt-1">◆</span>{item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-6">ISO 27001:2022 — the updated standard</h2>
            <p>
              The 2022 revision of ISO 27001 introduced a significantly updated set of Annex A controls — 93 controls across four themes (Organisational, People, Physical, and Technological), replacing the 114 controls from the 2013 version. Organisations certified to the 2013 standard were required to transition to the 2022 version by October 2025. All new certifications are now to the 2022 standard.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-6">How Anacruses helps</h2>
            <p>
              ISO 27001 implementation is more involved than quality or environmental management — it requires a formal risk assessment, a Statement of Applicability, and evidence that 93 Annex A controls have been considered and where applicable implemented. We manage all of this.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 my-6 text-center text-xs">
              {['Gap Analysis', 'Risk Assessment', 'Controls & Docs', 'Internal Audit', 'Certification'].map((s, i) => (
                <div key={s} className="bg-mist rounded p-3">
                  <div className="w-7 h-7 rounded-full bg-navy text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">{i+1}</div>
                  <div className="font-semibold text-navy">{s}</div>
                </div>
              ))}
            </div>

            <p className="text-sm font-semibold text-navy">
              Typical implementation timeline: 12–20 weeks, depending on your organisation's size, existing security controls, and the complexity of your information assets.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-6">ISO 27001 and UK GDPR</h2>
            <p>
              ISO 27001 and UK GDPR are complementary. Many of the technical and organisational measures required by GDPR Article 32 are addressed directly by ISO 27001 Annex A controls. Achieving ISO 27001 certification strengthens your GDPR compliance position and provides documented evidence of your information security measures — valuable in the event of an ICO investigation.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How long does ISO 27001 certification take?',
                  a: '12 to 20 weeks for a UK SME from scratch. Organisations with mature IT security practices move faster.',
                },
                {
                  q: 'How much does ISO 27001 cost in the UK?',
                  a: 'Total first-year cost is typically £8,000 to £25,000 — consultancy fees of £5,000 to £20,000 and certification body fees of £2,500 to £6,000. Anacruses quotes fixed fees.',
                },
                {
                  q: 'What is the Statement of Applicability?',
                  a: 'A document listing all 93 Annex A controls, stating whether each applies to your organisation and why. It is one of the key documents your certification auditor will examine.',
                },
                {
                  q: 'How many controls are in ISO 27001:2022?',
                  a: '93 controls across four themes: Organisational (37), People (8), Physical (14), and Technological (34). This replaced 114 controls across 14 domains in the 2013 version.',
                },
                {
                  q: 'Does ISO 27001 help with UK GDPR?',
                  a: 'Yes. Many GDPR Article 32 requirements are directly addressed by Annex A controls. ISO 27001 provides documented evidence of your security programme, which is valuable in the event of an ICO investigation.',
                },
                {
                  q: 'Do cyber insurers require ISO 27001?',
                  a: 'Increasingly yes — as a condition of cover or a factor in premium pricing. Certification can reduce premiums and strengthens your position when making a claim.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="border-l-4 border-mist pl-4">
                  <p className="font-bold text-navy text-sm mb-1">{q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Get a quote for ISO 27001 →</Link>
              <Link href="/iso-27001-checklist" className="btn-secondary border border-navy text-navy px-4 py-2 rounded text-sm font-semibold hover:bg-mist transition-colors">Free certification checklist →</Link>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="card border-t-4 border-t-gold">
              <h3 className="font-bold text-navy mb-2 text-sm">Rob's ISO 27001 credentials</h3>
              <ul className="text-xs text-gray-600 space-y-1.5">
                {[
                  'CQI/IRCA Certified Lead Auditor — ISO 27001',
                  'Experienced in ISO 27001:2022 (updated standard)',
                  'Guided organisations through 2013 to 2022 transition',
                  'Experience in IT, financial services, healthcare and professional services',
                  'BSI BridgeAI community participant — AI and information security',
                ].map(c => (
                  <li key={c} className="flex gap-2"><span className="text-gold">◆</span>{c}</li>
                ))}
              </ul>
            </div>
            <div className="card bg-mist">
              <h3 className="font-bold text-navy mb-2 text-sm">ISO 27001 and cyber insurance</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cyber insurers are increasingly requiring ISO 27001 certification — or at minimum, evidence of ISO 27001-equivalent controls — as a condition of cover. Achieving certification can reduce your premium and significantly strengthens your position when making a claim.
              </p>
            </div>
            <div className="card border-t-4 border-t-gold">
              <h3 className="font-bold text-navy mb-2 text-sm">Free resource</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">Download the free ISO 27001 Certification Checklist — all seven areas your certification body will examine, with every required item listed.</p>
              <Link href="/iso-27001-checklist" className="text-gold text-xs font-semibold hover:underline">Download free checklist →</Link>
            </div>
            <div className="card">
              <h3 className="font-bold text-navy mb-2 text-sm">Related services</h3>
              <ul className="text-xs text-gray-600 space-y-1.5">
                {[
                  ['ISO 9001 — Quality', '/services/iso-9001'],
                  ['ISO 42001 — AI Management', '/services/iso-42001'],
                  ['UKAS Laboratory Accreditation', '/services/ukas-laboratory'],
                  ['Get Certified — Our Process', '/get-certified'],
                ].map(([label, href]) => (
                  <li key={href}><Link href={href} className="text-gold hover:text-gold-dark">{label} →</Link></li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-navy mb-2 text-sm">Related Insights</h3>
              <ul className="space-y-2">
                <li><Link href="/insights/how-to-get-iso-27001-certified-uk" className="text-gold hover:text-gold-dark text-xs leading-snug block">How to Get ISO 27001 Certified in the UK: A Complete Guide →</Link></li>
                <li><Link href="/insights/how-long-does-iso-27001-take-uk-sme" className="text-gold hover:text-gold-dark text-xs leading-snug block">How Long Does ISO 27001 Take for a UK SME? →</Link></li>
                <li><Link href="/insights/iso-27001-audit-failures" className="text-gold hover:text-gold-dark text-xs leading-snug block">The Five Most Common ISO 27001 Audit Failures →</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-gold py-10 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-3">Ready to get ISO 27001 certified?</h2>
          <p className="opacity-90 mb-5 text-sm">Book a free consultation and we will explain exactly what the 2022 standard requires and how long implementation will take for your business.</p>
          <Link href="/contact" className="inline-block bg-white text-gold-dark font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
