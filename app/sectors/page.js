import Link from 'next/link';

export const metadata = {
  title: 'ISO Sectors | Anacruses Associates',
  description: 'ISO certification for manufacturing, technology, construction, healthcare, financial services, and laboratories.',
};

export default function SectorsPage() {
  const sectors = [
    {
      slug: 'technology',
      title: 'Technology & SaaS',
      icon: '🔒',
      description: 'ISO 27001 (cybersecurity) and ISO 42001 (AI governance) for tech firms, MSPs, and SaaS companies.',
      standards: ['ISO 27001', 'ISO 42001', 'ISO 9001'],
    },
    {
      slug: 'construction',
      title: 'Construction',
      icon: '🏗️',
      description: 'ISO 9001 (quality), ISO 45001 (safety), and ISO 14001 (environmental) for construction firms.',
      standards: ['ISO 9001', 'ISO 45001', 'ISO 14001'],
    },
    {
      slug: 'manufacturing',
      title: 'Manufacturing',
      icon: '⚙️',
      description: 'ISO 9001 (quality), ISO 14001 (environmental), and ISO 45001 (safety) for manufacturers.',
      standards: ['ISO 9001', 'ISO 14001', 'ISO 45001'],
    },
    {
      slug: 'laboratory',
      title: 'Laboratory Services & Testing',
      icon: '🧪',
      description: 'ISO 17025 (testing) and ISO 17065 (product certification). UKAS accreditation support.',
      standards: ['ISO 17025', 'ISO 17065', 'ISO 9001'],
    },
    {
      slug: 'financial',
      title: 'Financial Services',
      icon: '💰',
      description: 'ISO 27001 (security) and ISO 42001 (AI governance) for fintech, wealth management, and financial firms.',
      standards: ['ISO 27001', 'ISO 42001', 'ISO 22301'],
    },
    {
      slug: 'healthcare',
      title: 'Healthcare & Digital Health',
      icon: '🏥',
      description: 'ISO 27001 (patient data security) and ISO 42001 (AI governance) for digital health and medtech.',
      standards: ['ISO 27001', 'ISO 42001', 'ISO 9001'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs md:text-sm font-semibold text-yellow-400 mb-3 tracking-wide">SECTORS</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            ISO Certification for Your Industry
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Sector-specific expertise. Standards that unlock contracts. Practical guidance from consultants who know your industry.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <Link
              key={sector.slug}
              href={`/sectors/${sector.slug}`}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-950 hover:shadow-md transition cursor-pointer group"
            >
              <div className="text-4xl mb-3">{sector.icon}</div>
              <h3 className="text-xl font-bold text-blue-950 mb-2 group-hover:text-blue-700 transition">
                {sector.title}
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                {sector.description}
              </p>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-500">Standards covered:</p>
                <div className="flex flex-wrap gap-2">
                  {sector.standards.map((standard) => (
                    <span
                      key={standard}
                      className="bg-blue-50 text-blue-950 text-xs px-2 py-1 rounded font-semibold"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-blue-950 text-white py-12 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Not sure which sector is yours?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl">
            A free 30-minute call is the fastest way to understand which ISO standards make sense for your business and what it would cost.
          </p>
          <Link
            href="/contact"
            className="bg-yellow-500 text-blue-950 px-6 py-2 rounded text-sm font-semibold hover:bg-yellow-400 transition inline-block"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
