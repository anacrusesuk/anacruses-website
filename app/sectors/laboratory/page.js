'use client';

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
          text: 'ISO 17025 is for laboratories that test products or conduct analysis. ISO 17065 is for organizations that certify products based on those test results. Some labs do both — testing under 17025 and certifying products under 17065.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do we need UKAS accreditation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on your clients. Many clients require UKAS-accredited test results. Some accept non-accredited testing. UKAS accreditation costs more initially but unlocks premium-paying clients and regulatory contracts.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does ISO 17025 accreditation take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Typically 20–30 weeks. Unlike general ISO standards, 17025 requires UKAS assessment, which is more rigorous. Scope of testing (number of methods, parameters, equipment) affects timeline.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if we expand our testing scope?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you add new testing methods or parameters, UKAS requires assessment of those changes. We help you document new procedures, validate methods, and prepare for UKAS extension assessments.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do we need ISO 9001 as well?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO 17025 includes quality management, so separate ISO 9001 isn\'t required. However, some labs find adding ISO 14001 (environmental) or ISO 45001 (safety) useful if they handle hazardous materials.',
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
        {/* Hero */}
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

        {/* Main content */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Why Laboratories Choose ISO 17025 & ISO 17065</h2>
          
          <div className="space-y-4 mb-8 text-base text-gray-700">
            <p>
              Testing laboratories and product certification bodies operate in a regulated world. Clients demand proof that your testing is accurate, your methods are validated, and your results are defensible. UKAS accreditation under ISO 17025 or ISO 17065 provides that proof.
            </p>
            <p>
              UKAS accreditation unlocks premium-paying clients, regulatory contracts, and government procurement. It signals that an independent body has assessed your competence and your results are internationally recognized.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Unlock Premium Clients</h3>
              <p className="text-sm text-gray-700">
                Regulatory bodies, OEMs, and government procurement require UKAS-accredited testing. Accreditation opens those contracts and commands higher fees.
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

          <h2 className="text-2xl font-bold text-blue-950 mb-4 mt-10">ISO 17025 vs ISO 17065</h2>
          
          <div className="space-y-4 mb-10">
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">ISO 17025 — Testing Laboratories</h3>
              <p className="text-sm text-gray-700">
                For organizations that conduct testing or calibration. You perform analytical, microbiological, or calibration work on samples. Your clients use your test results to make decisions or meet regulatory obligations. Accreditation covers specific test methods and parameters.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">ISO 17065 — Product Certification</h3>
              <p className="text-sm text-gray-700">
                For organizations that certify products based on test results. You review test data (often from ISO 17025 labs), evaluate compliance, and issue certificates. You're the third-party verifier that a product meets a standard.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Our Process</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-10 space-y-4 text-sm">
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 1–2: Scope Definition & Assessment</h3>
              <p className="text-gray-700">
                We work with you to define your accreditation scope: which test methods, parameters, and ranges you want covered. This determines the rigor of the assessment and timeline.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 3–14: System Building</h3>
              <p className="text-gray-700">
                We establish your management system: quality procedures, test method documentation, staff competence records, equipment calibration, and uncertainty analysis. For 17025, this is substantial work.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-970 mb-1">Weeks 15–24: Pre-Assessment & Readiness</h3>
              <p className="text-gray-700">
                We conduct a pre-assessment to identify gaps before UKAS arrives. We prepare your staff and documentation. UKAS is unforgiving — we make sure you're ready.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 25–30: UKAS Assessment</h3>
              <p className="text-gray-700">
                UKAS conducts an initial assessment, typically 2–5 days on-site depending on scope. After assessment and remediation of any findings, UKAS grants accreditation.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Cost & Investment</h2>
          
          <p className="text-sm text-gray-700 mb-4">
            First-year accreditation typically costs <strong>£8,000 to £18,000</strong>:
          </p>
          
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-10">
            <li>ISO 17025 (narrow scope, few methods): £8,000–12,000</li>
            <li>ISO 17025 (broad scope, many parameters): £12,000–18,000</li>
            <li>ISO 17065 (standalone): £8,000–14,000</li>
            <li>Both 17025 + 17065: £14,000–22,000</li>
          </ul>

          <p className="text-sm text-gray-700 mb-10">
            We always quote a fixed fee. UKAS fees (assessment, accreditation) are separate.
          </p>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Common Questions</h2>
          
          <div className="space-y-4 mb-10 text-sm">
            <div>
              <h3 className="font-bold text-blue-950 mb-1">How much does UKAS accreditation cost annually?</h3>
              <p className="text-gray-700">
                UKAS fees vary by scope but typically £1,500–3,000 per year. This covers annual fees plus periodic surveillance assessments. Narrower scope = lower fees.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">What if we want to expand our scope?</h3>
              <p className="text-gray-700">
                You can apply for extension assessments to add new test methods or parameters. UKAS will assess those new areas. We help you document procedures and prepare for assessment.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">How often does UKAS assess us?</h3>
              <p className="text-gray-700">
                Typically annually for surveillance. Full reassessments happen every 4 years. Reassessment is similar rigor to initial accreditation.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-950 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Get Accredited?</h2>
            <p className="text-blue-100 mb-6 text-sm">
              A free 30-minute call is the fastest way to understand accreditation scope, timeline, and investment for your lab.
            </p>
            <Link href="/contact" className="bg-yellow-500 text-blue-950 px-6 py-2 rounded text-sm font-semibold hover:bg-yellow-400 transition inline-block">
              Book a Free Consultation
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              Rob Pragnell has audited UKAS-accredited laboratories and brings deep experience in ISO 17025 and 17065. He understands the rigor required and helps labs avoid common pitfalls.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
