import Link from 'next/link';

export const metadata = {
  title: 'ISO 9001 Consultant UK — Quality Management Certification',
  description: 'ISO 9001 quality management certification for UK businesses. CQI/IRCA certified Lead Auditor with 20+ years experience. Gap analysis through to certification.',
};

export default function ISO9001() {
  return (
    <>
      <section className="bg-navy text-white py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <span className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mb-4 inline-block">ISO 9001:2015</span>
          <h1 className="text-4xl font-bold mb-4">Quality Management Systems</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            The world's most widely adopted management standard. Required by most large buyers, public sector contracts, and supply chains across every sector.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-navy">What is ISO 9001?</h2>
            <p>
              ISO 9001:2015 is the international standard for Quality Management Systems. It sets out a framework for consistently delivering products and services that meet customer requirements and regulatory obligations — and for continuously improving how your organisation works.
            </p>
            <p>
              More than one million organisations worldwide hold ISO 9001 certification. It is recognised across every industry sector and every country. For many UK businesses, it is a condition of being placed on a supplier list, invited to tender, or awarded a contract.
            </p>
            <h2 className="text-2xl font-bold text-navy mt-6">Who needs ISO 9001?</h2>
            <p>Any business that:</p>
            <ul className="list-none space-y-2">
              {[
                'Supplies to the public sector or large corporates and is asked to demonstrate quality assurance',
                'Wants to win contracts where ISO 9001 is a tender requirement',
                'Is experiencing quality issues, customer complaints, or inconsistent service delivery',
                'Wants to improve operational efficiency and reduce costly mistakes',
                'Is growing and needs documented processes to scale reliably',
              ].map(item => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="text-gold flex-shrink-0 mt-1">◆</span>{item}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-navy mt-6">How Anacruses helps</h2>
            <p>
              We manage the entire process — from understanding where your business currently sits against the standard through to supporting you through the external certification audit. You focus on running your business; we handle the compliance work.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 my-6 text-center text-xs">
              {['Gap Analysis', 'Documentation', 'Training', 'Internal Audit', 'Certification'].map((step, i) => (
                <div key={step} className="bg-mist rounded p-3">
                  <div className="w-7 h-7 rounded-full bg-navy text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">{i+1}</div>
                  <div className="font-semibold text-navy">{step}</div>
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-navy">
              Typical implementation timeline: 8–16 weeks, depending on your organisation's size and current level of documentation.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="btn-primary">Get a quote for ISO 9001 →</Link>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="card border-t-4 border-t-gold">
              <h3 className="font-bold text-navy mb-2 text-sm">Rob's ISO 9001 credentials</h3>
              <ul className="text-xs text-gray-600 space-y-1.5">
                <li className="flex gap-2"><span className="text-gold">◆</span>CQI/IRCA Certified Lead Auditor — ISO 9001</li>
                <li className="flex gap-2"><span className="text-gold">◆</span>Over 20 years implementing ISO 9001 across multiple sectors</li>
                <li className="flex gap-2"><span className="text-gold">◆</span>Internal Audit Manager experience</li>
                <li className="flex gap-2"><span className="text-gold">◆</span>Approved by multiple UKAS-accredited certification bodies</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-navy mb-2 text-sm">Related services</h3>
              <ul className="text-xs text-gray-600 space-y-1.5">
                {[
                  ['ISO 14001 — Environmental', '/services/iso-14001'],
                  ['ISO 45001 — Health & Safety', '/services/iso-45001'],
                  ['ISO 27001 — Information Security', '/services/iso-27001'],
                  ['Integrated Management Systems', '/get-certified'],
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
          <h2 className="text-xl font-bold mb-3">Ready to get ISO 9001 certified?</h2>
          <p className="opacity-90 mb-5 text-sm">Book a free consultation and we will explain exactly what is involved for your business.</p>
          <Link href="/contact" className="inline-block bg-white text-gold-dark font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
