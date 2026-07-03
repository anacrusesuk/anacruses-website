import Link from 'next/link';

export const metadata = {
  title: 'ISO 17025 & ISO 17065 for Labs & Testing | Anacruses Associates',
  description: 'ISO 17025 testing accreditation and ISO 17065 product certification. UKAS support for UK laboratories. Free consultation.',
};

export default function LaboratoryPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between ISO 17025 and ISO 17065?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO 17025 accredits testing and calibration laboratories. ISO 17065 accredits product certification bodies — organisations that certify a product meets a defined standard. Most testing labs need 17025; product certifiers need 17065.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do we need UKAS accreditation, or is ISO 9001 enough?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "For laboratory services, they're not interchangeable. UKAS accreditation to ISO 17025 additionally demonstrates technical competence in your specific tests — measurement uncertainty, method validation, traceability — which many regulators specifically require.",
        },
      },
      {
        '@type': 'Question',
        name: 'How long does UKAS laboratory accreditation take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "UKAS accreditation typically takes 9 to 18 months from initial engagement to accreditation, depending on your laboratory's starting position and the breadth of scope sought.",
        },
      },
      {
        '@type': 'Question',
        name: 'What does the UKAS assessment involve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'UKAS assessment includes a desk review of your documentation, a formal on-site visit where assessors witness your testing or calibration methods directly, and ongoing surveillance assessments to maintain accreditation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does UKAS accreditation cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'First-year accreditation typically costs £8,000 to £18,000 depending on scope: £8,000–£12,000 for narrow ISO 17025 scope, up to £18,000 for broad scope, and £14,000–£22,000 for both ISO 17025 and ISO 17065.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

        <h2 className="text-2xl font-bold text-blue-950 mb-4">Common Questions</h2>

        <div className="space-y-4 mb-10 text-sm">
          <div>
            <h3 className="font-bold text-blue-950 mb-1">Can we hold both ISO 9001 and UKAS accreditation?</h3>
            <p className="text-gray-700">
              Yes, and many labs do. ISO 9001 can cover the wider business while UKAS accreditation to ISO 17025 covers the specific tests or calibrations you want independently verified. We can support both together.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-blue-950 mb-1">What happens if we fail a UKAS assessment?</h3>
            <p className="text-gray-700">
              It's uncommon after proper preparation, but not unheard of. UKAS will raise findings that need addressing within a set timeframe before accreditation is granted. We prepare you to minimise findings and support corrective action if any are raised.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-blue-950 mb-1">Can we extend our scope of accreditation later?</h3>
            <p className="text-gray-700">
              Yes. Most laboratories start with a defined scope and extend it as the business grows — adding new test methods or calibration ranges through a scope extension application, rather than starting the whole process again.
            </p>
          </div>
        </div>

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
