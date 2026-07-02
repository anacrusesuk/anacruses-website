import Link from 'next/link';

export const metadata = {
  title: 'ISO 9001 & ISO 14001 for Manufacturing | Anacruses Associates',
  description: 'ISO 9001, ISO 14001, and ISO 45001 for UK manufacturers. Quality, environmental, and safety management. Free consultation.',
};

export default function ManufacturingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why do manufacturers need ISO standards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO 9001 demonstrates consistent quality. ISO 14001 shows environmental responsibility. ISO 45001 proves worker safety. Together, they unlock supply chain contracts and reduce operational risk.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does ISO help with supply chain compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'OEMs and principal contractors now require supplier ISO certification. It signals you have documented processes, traceability, and risk management. Without it, you lose tenders. With it, you become a preferred supplier.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we integrate ISO 9001, 14001, and 45001?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. An integrated management system is more efficient than managing three separate systems. Many manufacturers do all three together — cost is only 20-30% higher than single-standard, but coverage is complete.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does manufacturing certification take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'First-time certification typically takes 16–24 weeks depending on standard and scope. ISO 9001 alone can be faster; integrated systems take longer but are worth the investment.',
        },
      },
      {
        '@type': 'Question',
        name: 'What about traceability and ISO 9001?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO 9001 requires you to document and track material and product traceability. We help you build traceability systems that satisfy auditors and your OEM customers without creating unnecessary overhead.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xs md:text-sm font-semibold text-yellow-400 mb-3 tracking-wide">ISO CERTIFICATION FOR MANUFACTURING</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              ISO Standards for Manufacturers
            </h1>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl">
              ISO 9001, ISO 14001, and ISO 45001 that unlocks supply chain contracts and improves operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="bg-yellow-500 text-blue-950 px-6 py-2 rounded text-sm font-semibold hover:bg-yellow-400 transition inline-block w-fit">
                Book a Free Call
              </Link>
              <Link href="/sectors" className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition inline-block w-fit">
                Back to Sectors
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Why Manufacturers Choose ISO</h2>
          
          <div className="space-y-4 mb-8 text-base text-gray-700">
            <p>
              Manufacturing supply chains have shifted. OEMs and principal contractors no longer accept verbal assurances about quality, safety, or environmental practices. They demand ISO certification as a condition of supply. Without it, you lose contracts. With it, you become a trusted partner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Win Supply Contracts</h3>
              <p className="text-sm text-gray-700">
                OEMs increasingly require supplier ISO certification. Certification removes that barrier and unlocks major supply chain deals.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Reduce Quality Costs</h3>
              <p className="text-sm text-gray-700">
                ISO 9001 improves process consistency and catches defects early. Fewer rework cycles, lower scrap rates, and fewer customer complaints mean lower costs and higher margins.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Improve Efficiency</h3>
              <p className="text-sm text-gray-700">
                Documented processes, clear responsibilities, and systematic improvement reduce waste, improve throughput, and make training new staff easier.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4 mt-10">Cost & Investment</h2>
          
          <p className="text-sm text-gray-700 mb-4">
            First-year certification typically costs <strong>£5,000 to £15,000</strong>:
          </p>
          
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-10">
            <li>ISO 9001 alone: £5,000–8,000</li>
            <li>ISO 14001 alone: £4,500–7,000</li>
            <li>ISO 45001 alone: £5,000–8,000</li>
            <li>All three integrated: £9,000–15,000</li>
          </ul>

          <div className="bg-blue-950 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Unlock Supply Contracts?</h2>
            <p className="text-blue-100 mb-6 text-sm">
              A free 30-minute call is the fastest way to understand which ISO standards make sense for your business and what certification would cost.
            </p>
            <Link href="/contact" className="bg-yellow-500 text-blue-950 px-6 py-2 rounded text-sm font-semibold hover:bg-yellow-400 transition inline-block">
              Book a Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
