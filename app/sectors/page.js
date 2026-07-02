import Link from 'next/link';

export const metadata = {
  title: 'ISO Certification by Sector | Anacruses Associates',
  description: 'ISO certification guidance for construction, manufacturing, technology, and financial services. Expert consultancy for your industry.',
};

export default function SectorsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ISO Certification for Your Industry.
          </h1>
          <p className="text-xl text-blue-100">
            Different sectors have different challenges. We tailor ISO certification to your industry — not the other way around.
          </p>
        </div>
      </section>

      {/* Sectors grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Construction */}
          <Link href="/sectors/construction" className="group">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg hover:shadow-lg transition border border-blue-200 group-hover:border-blue-400 h-full">
              <h2 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-blue-700 transition">Construction</h2>
              <p className="text-gray-700 mb-6">
                ISO 9001, ISO 45001, ISO 14001 certification for site work, subcontractors, and complex supply chains. Win tenders. Reduce site risk. Improve delivery.
              </p>
              <div className="flex items-center text-blue-950 font-semibold group-hover:translate-x-2 transition">
                Learn more →
              </div>
            </div>
          </Link>

          {/* Manufacturing */}
          <Link href="/sectors/manufacturing" className="group">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg hover:shadow-lg transition border border-blue-200 group-hover:border-blue-400 h-full">
              <h2 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-blue-700 transition">Manufacturing</h2>
              <p className="text-gray-700 mb-6">
                ISO 9001, ISO 45001, ISO 14001, ISO 50001 certification for production lines, supply chains, and multi-site operations. Win customer contracts. Reduce audits. Improve margins.
              </p>
              <div className="flex items-center text-blue-950 font-semibold group-hover:translate-x-2 transition">
                Learn more →
              </div>
            </div>
          </Link>

          {/* Technology */}
          <Link href="/sectors/technology" className="group">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg hover:shadow-lg transition border border-blue-200 group-hover:border-blue-400 h-full">
              <h2 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-blue-700 transition">Technology</h2>
              <p className="text-gray-700 mb-6">
                ISO 27001 (information security), ISO 9001, ISO 42001 (AI governance) for SaaS, software, and managed service providers. Win enterprise contracts. Reduce security audits. Formalize security practice.
              </p>
              <div className="flex items-center text-blue-950 font-semibold group-hover:translate-x-2 transition">
                Learn more →
              </div>
            </div>
          </Link>

          {/* Financial Services */}
          <Link href="/sectors/financial-services" className="group">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg hover:shadow-lg transition border border-blue-200 group-hover:border-blue-400 h-full">
              <h2 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-blue-700 transition">Financial Services</h2>
              <p className="text-gray-700 mb-6">
                ISO 27001 (information security), ISO 9001 (quality), ISO 22301 (business continuity) for advisory practices, asset managers, payment processors. Strengthen regulatory position. Win client confidence.
              </p>
              <div className="flex items-center text-blue-950 font-semibold group-hover:translate-x-2 transition">
                Learn more →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-blue-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't see your industry?</h2>
          <p className="text-lg text-blue-100 mb-8">
            We work across all sectors. If yours isn't listed, get in touch — we'll advise on the right ISO standards for your business.
          </p>
          <Link href="/contact" className="bg-yellow-500 text-blue-950 px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition inline-block">
            Book a Free Consultation
          </Link>
        </div>
      </section>

      {/* Services section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-950 mb-6">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">Gap Analysis</h3>
            <p className="text-gray-700">
              We review your current processes, systems, and documentation against the ISO standard. You get a clear picture of what's already compliant and what needs to be built.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">Implementation</h3>
            <p className="text-gray-700">
              We build your management system — policies, procedures, records, training, and controls. We write everything; you review and approve. No surprises.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">Internal Audit</h3>
            <p className="text-gray-700">
              We conduct an independent audit to find gaps before your certification body does. This is where you find and fix nonconformities quietly.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-950 mb-3">Certification Support</h3>
            <p className="text-gray-700">
              We prepare you for your certification audit and support you through it. After certification, we advise on maintaining your system for annual surveillance audits.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}