import Link from 'next/link';

export const metadata = {
  title: 'ISO 17025 & ISO 17065 for Labs & Testing | Anacruses Associates',
  description: 'ISO 17025 testing accreditation and ISO 17065 product certification. UKAS support for UK laboratories. Free consultation.',
};

export default function LaboratoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs md:text-sm font-semibold text-yellow-400 mb-3 tracking-wide">UKAS ACCREDITATION FOR LABORATORIES</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            ISO 17025 & ISO 17065 Accreditation
          </h1>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl">
            UKAS-accredited testing and product certification. Unlock premium clients and regulatory contracts.
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
        <h2 className="text-2xl font-bold text-blue-950 mb-4">Why Laboratories Choose ISO 17025 & ISO 17065</h2>
        
        <div className="space-y-4 mb-8 text-base text-gray-700">
          <p>
            Testing laboratories and product certification bodies operate in a regulated world. Clients demand proof that your testing is accurate, your methods are validated, and your results are defensible. UKAS accreditation under ISO 17025 or ISO 17065 provides that proof.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-50 p-6 rounded">
            <h3 className="text-lg font-bold text-blue-950 mb-3">Unlock Premium Clients</h3>
            <p className="text-sm text-gray-700">
              Regulatory bodies and government procurement require UKAS-accredited testing. Accreditation opens those contracts and commands higher fees.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded">
            <h3 className="text-lg font-bold text-blue-950 mb-3">Prove Competence</h3>
            <p className="text-sm text-gray-700">
              UKAS assessment confirms your methods are validated, staff are competent, and equipment is calibrated. Independent verification of your competence.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded">
            <h3 className="text-lg font-bold text-blue-950 mb-3">Defend Your Results</h3>
            <p className="text-sm text-gray-700">
              Accredited results stand up to customer challenge and legal scrutiny. Courts recognize UKAS-accredited data. Non-accredited results may be questioned.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-blue-950 mb-4 mt-10">Cost & Investment</h2>
        
        <p className="text-sm text-gray-700 mb-4">
          First-year accreditation typically costs <strong>£8,000 to £18,000</strong>:
        </p>
        
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-10">
          <li>ISO 17025 (narrow scope): £8,000–12,000</li>
          <li>ISO 17025 (broad scope): £12,000–18,000</li>
          <li>ISO 17065 (standalone): £8,000–14,000</li>
          <li>Both 17025 + 17065: £14,000–22,000</li>
        </ul>

        <div className="bg-blue-950 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Get Accredited?</h2>
          <p className="text-blue-100 mb-6 text-sm">
            A free 30-minute call is the fastest way to understand accreditation scope, timeline, and investment for your lab.
          </p>
          <Link href="/contact" className="bg-yellow-500 text-blue-950 px-6 py-2 rounded text-sm font-semibold hover:bg-yellow-400 transition inline-block">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
