import Link from 'next/link';

export const metadata = {
  title: 'ISO Consultant UK — Anacruses Associates Ltd',
  description: 'Expert ISO consultancy for UK businesses. CQI/IRCA certified Lead Auditor with 20+ years experience. ISO 9001, 14001, 27001, 45001 and 42001.',
};

const services = [
  { std: 'ISO 9001', title: 'Quality Management', desc: 'The foundation of supply chain compliance. Required by most large buyers and public sector contracts.', href: '/services/iso-9001', icon: '✓' },
  { std: 'ISO 14001', title: 'Environmental Management', desc: 'Demonstrate your environmental responsibility and win contracts where sustainability is assessed.', href: '/services/iso-14001', icon: '🌿' },
  { std: 'ISO 27001', title: 'Information Security', desc: 'Mandatory in IT, finance and healthcare supply chains. Protect your data and prove it to clients.', href: '/services/iso-27001', icon: '🔒' },
  { std: 'ISO 45001', title: 'Health & Safety', desc: 'The international replacement for OHSAS 18001. Required by construction, engineering and facilities sectors.', href: '/services/iso-45001', icon: '⚠' },
  { std: 'ISO 42001', title: 'Artificial Intelligence', desc: 'The new frontier. Build trust in your AI systems with the world\'s first international AI management standard.', href: '/services/iso-42001', icon: '🤖' },
  { std: 'UKAS Lab', title: 'Laboratory Accreditation', desc: 'ISO 17025 accreditation for testing and calibration laboratories. A specialist area few consultants cover.', href: '/services/ukas-laboratory', icon: '🔬' },
];

const credentials = [
  '20+ years\' experience',
  'CQI/IRCA certified Lead Auditor',
  'ISO 9001 · 14001 · 27001 · 45001 · 42001',
  'UKAS accreditation support',
  'ISO ESG Committee contributor',
  'BSI BridgeAI participant',
];

export default function Home() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Anacruses Associates Ltd",
          "description": "Expert ISO consultancy for UK businesses. CQI/IRCA certified Lead Auditor.",
          "url": "https://www.anacruses.co.uk",
          "address": { "@type": "PostalAddress", "addressRegion": "Hertfordshire", "addressCountry": "GB" },
          "areaServed": "GB",
          "serviceType": "ISO Management Systems Consultancy",
        })}}
      />

      {/* HERO */}
      <section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
              ISO Consultancy · Hertfordshire & UK-wide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              ISO Certification,<br />Delivered Properly.
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              Expert ISO consultancy for UK businesses that need to get it right — on time, first time, and to a standard that lasts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
              <Link href="/about" className="btn-outline">How We Work</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS BAR */}
      <section className="bg-navy-dark border-t border-navy-light">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
          {credentials.map(c => (
            <span key={c} className="text-gold text-xs font-medium flex items-center gap-1">
              <span className="text-gold-light">◆</span> {c}
            </span>
          ))}
        </div>
      </section>

      {/* WHY ANACRUSES */}
      <section className="bg-mist py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-2 text-center">Why choose Anacruses?</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
            We have been helping UK businesses achieve ISO certification for over two decades. Here is what sets us apart.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Deep Experience', body: 'Over 20 years implementing and auditing ISO standards across manufacturing, technology, healthcare, construction and professional services. We have seen every type of business and every type of audit.' },
              { title: 'Independent & Honest', body: 'We are not aligned to any single certification body. We work with you to choose the right body for your sector and budget — and we will tell you if the timing is not right.' },
              { title: 'Results That Stick', body: 'Certification is only the beginning. We build management systems that continue to work after the auditors leave — systems your team actually uses and that genuinely improve how your business operates.' },
            ].map(item => (
              <div key={item.title} className="card border-t-4 border-t-gold">
                <h3 className="text-navy font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-2 text-center">ISO Standards We Cover</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
            We help UK businesses certify to the standards their customers and supply chains require.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <Link key={s.href} href={s.href}
                className="card group hover:border-gold border border-transparent flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-navy text-white text-xs font-bold px-2 py-1 rounded">{s.std}</span>
                  <span className="text-2xl">{s.icon}</span>
                </div>
                <h3 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{s.desc}</p>
                <div className="mt-4 text-gold text-sm font-semibold">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-grow">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Meet the consultant</p>
            <h2 className="text-3xl font-bold mb-4">Rob Pragnell</h2>
            <p className="text-blue-100 leading-relaxed mb-4 max-w-2xl">
              Rob is a CQI/IRCA certified Lead Auditor with over 20 years of experience implementing and auditing ISO standards across the UK. He is a TRECCERT-accredited trainer, a contributor to the ISO ESG Committee, and a participant in the BSI BridgeAI standards community.
            </p>
            <p className="text-blue-100 leading-relaxed mb-6 max-w-2xl">
              Certified in ISO 9001, 14001, 27001, 45001 and 42001, Rob works directly with every Anacruses client — you will always deal with the expert, not a junior consultant.
            </p>
            <Link href="/about" className="btn-outline">Full biography →</Link>
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="py-16 bg-mist">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-2 text-center">How certification works</h2>
          <p className="text-center text-gray-500 mb-10">A clear, managed process from first conversation to certificate.</p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center">
            {[
              ['1', 'Gap Analysis', 'Understand where you are vs. where the standard requires you to be.'],
              ['2', 'Documentation', 'Policies, procedures and records — built for your business, not copied from a template.'],
              ['3', 'Training', 'Your team understands the system and their responsibilities within it.'],
              ['4', 'Internal Audit', 'We audit your system before the certification body does.'],
              ['5', 'Certification', 'External audit with your chosen UKAS-accredited certification body.'],
            ].map(([num, title, desc]) => (
              <div key={num} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-navy text-white font-bold text-lg flex items-center justify-center mb-3">{num}</div>
                <div className="font-bold text-navy mb-1">{title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/about" className="btn-primary">See the full process →</Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gold py-12 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Ready to get certified?</h2>
          <p className="mb-6 opacity-90">Book a free, no-obligation consultation. We will tell you exactly what is involved, how long it will take, and what it will cost.</p>
          <Link href="/contact" className="inline-block bg-white text-gold-dark font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
