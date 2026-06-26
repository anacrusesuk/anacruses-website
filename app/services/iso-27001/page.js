import Link from 'next/link';

export const metadata = {
  title: 'ISO 27001 Consultant UK — Information Security Certification',
  description: 'ISO 27001 information security management certification for UK businesses. Expert consultancy from a CQI/IRCA certified Lead Auditor with 20+ years experience.',
};

export default function ISO27001() {
  return (
    <>
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
            <p>
              Anacruses has been implementing the 2022 standard since its publication and has guided multiple organisations through the transition process.
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

            <div className="pt-4">
              <Link href="/contact" className="btn-primary">Get a quote for ISO 27001 →</Link>
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
                  <li key="how-long-does-iso-27001-take-uk-sme"><Link href="/insights/how-long-does-iso-27001-take-uk-sme" className="text-gold hover:text-gold-dark text-xs leading-snug block">How Long Does ISO 27001 Take for a UK SME? →</Link></li>
                  <li key="iso-27001-audit-failures"><Link href="/insights/iso-27001-audit-failures" className="text-gold hover:text-gold-dark text-xs leading-snug block">The Five Most Common ISO 27001 Audit Failures →</Link></li>
                  <li key="iso-9001-vs-iso-27001-which-first"><Link href="/insights/iso-9001-vs-iso-27001-which-first" className="text-gold hover:text-gold-dark text-xs leading-snug block">ISO 9001 vs ISO 27001: Which Should You Do First? →</Link></li>
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
