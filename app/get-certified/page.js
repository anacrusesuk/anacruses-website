import Link from 'next/link';

export const metadata = {
  title: 'Get Certified — Our ISO Certification Process',
  description: 'A clear, managed process from first conversation to certificate. See how Anacruses takes UK businesses through ISO certification, including integrated multi-standard systems.',
};

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

export default function GetCertified() {
  return (
    <>
      <section className="bg-navy text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Get Certified</p>
          <h1 className="text-4xl font-bold mb-4">Our Process</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            A clear, managed process from first conversation to certificate — whether you're certifying to one standard or building an integrated management system across several.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-2 text-center">How certification works</h2>
          <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
            Every engagement follows the same five stages. The scope and timeline flex to fit your business and how many standards you're certifying to — the structure doesn't change.
          </p>
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

      <section className="bg-mist py-10">
        <div className="max-w-6xl mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-navy mb-4">Integrated Management Systems</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Many businesses need more than one ISO standard — most commonly ISO 9001, 14001 and 45001 together, or ISO 27001 alongside ISO 42001 for AI governance. You don't have to run these as separate projects.
            </p>
            <p>
              There is no hard and fast rule on sequencing. If one standard is being driven by a contract or a deadline, we start there. But if you're planning to certify to several standards, it's often more efficient to tackle them together — the shared Annex SL structure means a lot of the documentation and evidence overlaps, so an integrated management system typically costs and takes less than running each standard as a standalone project.
            </p>
            <p>
              We'll advise on the right approach for your situation at the outset, as part of the free initial consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-navy mb-4">How long does it take and what does it cost?</h2>
          <p className="text-gray-700 leading-relaxed">
            For a UK SME with no existing management system, realistic timelines run 4 to 9 months depending on your starting point and internal capacity. Certification body fees typically run £1,500 to £4,000 per year for SMEs. We provide fixed-fee consultancy quotes so you know the ceiling upfront — no open-ended day rates.
          </p>
        </div>
      </section>

      <section className="bg-gold py-10 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-3">Ready to get certified?</h2>
          <p className="opacity-90 mb-5 text-sm">Book a free, no-obligation consultation. We will tell you exactly what is involved, how long it will take, and what it will cost.</p>
          <Link href="/contact" className="inline-block bg-white text-gold-dark font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
