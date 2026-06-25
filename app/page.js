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
];

const process = [
  {
    num: '1',
    title: 'Gap Analysis',
    desc: 'We assess where your business currently stands against the standard\'s requirements — identifying what\'s already in place, what needs building, and what the realistic path to certification looks like.',
  },
  {
    num: '2',
    title: 'Documentation',
    desc: 'We build the policies, procedures and records the standard requires — written for your business, not copied from a generic template. Everything is practical and proportionate to your size and sector.',
  },
  {
    num: '3',
    title: 'Training',
    desc: 'Your team needs to understand the system and own it. We train the people responsible for day-to-day compliance so the management system works after we leave, not just on audit day.',
  },
  {
    num: '4',
    title: 'Internal Audit',
    desc: 'Before your certification body visits, we conduct a full internal audit — finding and fixing any gaps so there are no surprises at Stage 2. This is where poorly prepared businesses fail; our clients don\'t.',
  },
  {
    num: '5',
    title: 'Certification',
    desc: 'We support you through Stage 1 and Stage 2 audits with your chosen UKAS-accredited certification body, helping to respond to any findings and ensuring you come out with your certificate.',
  },
];

const faqs = [
  {
    q: 'Can we integrate multiple standards at once, or do we have to do them one at a time?',
    a: 'There is no hard and fast rule. If one standard is being driven by a contract or a deadline, start there. However, if you are planning to certify to ISO 9001, 14001 and 45001, it is often more efficient to tackle them together — the Annex SL structure they share means a lot of the documentation and evidence overlaps. We will advise on the right approach for your situation at the outset.',
  },
  {
    q: 'Why is ISO 9001:2015 so focused on risk compared to earlier versions?',
    a: 'Earlier versions of the standard were process-focused but did not explicitly require risk-based thinking. The 2015 revision introduced Clause 6.1 — Risks and Opportunities — because ISO recognised that businesses managing risk proactively produce more consistent, reliable outcomes. It is not about creating a bureaucratic risk register; it is about demonstrating that your business thinks ahead and manages what could go wrong.',
  },
  {
    q: 'Will getting certified actually increase sales?',
    a: 'For most of our clients, yes — and often more directly than they expect. Many larger buyers and public sector procurement teams require ISO certification as a minimum to tender. Beyond that, certification demonstrates to any potential customer that an independent body has reviewed your processes and approved them. It builds trust without the buyer having to audit you themselves.',
  },
  {
    q: 'How long does certification take and what does it cost?',
    a: 'For a UK SME with no existing management system, realistic timelines run 4 to 9 months depending on your starting point and internal capacity. Certification body fees typically run £1,500 to £4,000 per year for SMEs. We provide fixed-fee consultancy quotes so you know the ceiling upfront — no open-ended day rates.',
  },
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
          "telephone": "07792259840",
          "email": "assurance@anacruses.co.uk",
          "address": { "@type": "PostalAddress", "addressRegion": "Hertfordshire", "addressCountry": "GB" },
          "areaServed": "GB",
          "serviceType": "ISO Management Systems Consultancy",
        })}}
      />

      {/* HERO */}
      <section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
              ISO Consultancy · Hertfordshire & UK-wide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              ISO Certification,<br />Delivered Properly.
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-4 max-w-2xl">
              Expert ISO consultancy for UK businesses that need to get it right — on time, first time, and to a standard that lasts.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
              <Link href="/about" className="btn-outline">How We Work</Link>
            </div>
            {/* Contact details in hero */}
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-blue-100 text-sm">
              <a href="tel:07792259840" className="hover:text-gold transition-colors">📞 07792 259840</a>
              <a href="mailto:assurance@anacruses.co.uk" className="hover:text-gold transition-colors">✉ assurance@anacruses.co.uk</a>
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
      <section className="bg-mist py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-2 text-center">Why choose Anacruses?</h2>
          <p className="text-center text-gray-500 mb-4 max-w-xl mx-auto">
            We have been helping UK businesses achieve ISO certification for over two decades. Here is what sets us apart.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Deep Experience', body: 'Over 20 years implementing and auditing ISO standards across manufacturing, technology, healthcare, construction and professional services. We have seen every type of business and every type of audit.' },
              { title: 'Independent & Honest', body: 'We work with you to choose the right certification body for your sector, budget and timescales — and we will always tell you if the timing is not right.' },
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
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-2 text-center">ISO Standards We Cover</h2>
          <p className="text-center text-gray-500 mb-4 max-w-xl mx-auto">
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
      <section className="bg-navy text-white py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-grow">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Meet the consultant</p>
            <h2 className="text-3xl font-bold mb-4">Rob Pragnell</h2>
            <p className="text-blue-100 leading-relaxed mb-4 max-w-2xl">
              Rob is a CQI/IRCA certified Lead Auditor with over 20 years of experience implementing and auditing ISO standards across the UK. He is a TRECCERT-accredited trainer certified across ISO 9001, 14001, 27001, 45001 and 42001.
            </p>
            <p className="text-blue-100 leading-relaxed mb-4 max-w-2xl">
              Rob works directly with every Anacruses client — you will always deal with the expert, not a junior consultant or a subcontractor.
            </p>
            <Link href="/about" className="btn-outline">Full biography →</Link>
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="py-10 bg-mist">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-2 text-center">How certification works</h2>
          <p className="text-center text-gray-500 mb-6">A clear, managed process from first conversation to certificate.</p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 text-center">
            {process.map(({ num, title, desc }) => (
              <div key={num} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-navy text-white font-bold text-lg flex items-center justify-center mb-3">{num}</div>
                <div className="font-bold text-navy mb-2">{title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-2 text-center">Common questions</h2>
          <p className="text-center text-gray-500 mb-6">The questions we get asked most before a first conversation.</p>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="card border-l-4 border-l-gold">
                <h3 className="font-bold text-navy mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gold py-8 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Ready to get certified?</h2>
          <p className="mb-4 opacity-90">Book a free, no-obligation consultation. We will tell you exactly what is involved, how long it will take, and what it will cost.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-block bg-white text-gold-dark font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
              Book a Free Consultation
            </Link>
            <a href="tel:07792259840" className="text-white font-semibold hover:underline">
              or call 07792 259840
            </a>
          </div>
          <p className="mt-3 text-sm opacity-80">
            Or email us at <a href="mailto:assurance@anacruses.co.uk" className="underline hover:opacity-100">assurance@anacruses.co.uk</a>
          </p>
        </div>
      </section>
    </>
  );
}
