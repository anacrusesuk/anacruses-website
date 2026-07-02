'use client';

import Link from 'next/link';

export const metadata = {
  title: 'ISO 27001 & ISO 42001 for Healthcare | Anacruses Associates',
  description: 'ISO 27001 cybersecurity and ISO 42001 AI governance for digital health, medtech, and healthcare providers. GDPR-compliant. Free consultation.',
};

export default function HealthcarePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why do healthcare organizations need ISO 27001?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Healthcare handles sensitive patient data and medical information. Regulators (MHRA, CQC) expect you to have information security controls. Patients trust you with their health records. ISO 27001 demonstrates you\'ve systematically protected that data against breaches.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does ISO 27001 support GDPR compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GDPR requires appropriate technical and organizational measures to protect personal data. ISO 27001 provides the framework and evidence that you have them. It covers access controls, encryption, incident response, and staff training — all GDPR requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is ISO 42001 and why matters for digital health?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ISO 42001 governs AI systems. If your digital health platform uses AI for diagnostics, risk prediction, or treatment recommendations, you need AI governance to demonstrate safety, bias testing, and medical appropriateness. Regulators increasingly expect this.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we implement ISO without disrupting patient care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We design security controls that protect patient safety without disrupting clinical workflows. We work with clinical staff to ensure security measures enhance trust and safety, not complicate care.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does ISO 27001 help us win NHS contracts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NHS increasingly requires supplier ISO 27001 certification. It\'s becoming a tender requirement for healthcare providers and medtech suppliers. Certification can unlock NHS contracts and system integration opportunities.',
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
            <p className="text-xs md:text-sm font-semibold text-yellow-400 mb-3 tracking-wide">ISO CERTIFICATION FOR HEALTHCARE</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              ISO 27001 & ISO 42001 for Healthcare & Digital Health
            </h1>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl">
              Security governance for patient data. Responsible AI for clinical decision-making. Trust and compliance.
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
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Why Healthcare Organizations Choose ISO 27001 & ISO 42001</h2>
          
          <div className="space-y-4 mb-8 text-base text-gray-700">
            <p>
              Healthcare organizations hold some of the most sensitive information in the world: patient medical records, genetic information, mental health data, treatment histories. A breach doesn't just expose data — it damages patient trust and can affect clinical outcomes.
            </p>
            <p>
              ISO 27001 demonstrates you've systematically protected patient data. ISO 42001 is emerging as critical for digital health platforms using AI in diagnostics, risk prediction, or treatment recommendations. Together, they signal to patients, regulators, and partners that you take security and responsible AI seriously.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Protect Patient Trust</h3>
              <p className="text-sm text-gray-700">
                Patients trust you with their health data. ISO 27001 certification demonstrates you've implemented systematic security controls to protect that trust.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-950 mb-3">Meet Regulatory Expectations</h3>
              <p className="text-sm text-gray-700">
                CQC, MHRA, and ICO expect healthcare organizations to have appropriate security controls. ISO 27001 is internationally recognized evidence that you do.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-970 mb-3">Unlock NHS & System Contracts</h3>
              <p className="text-sm text-gray-700">
                NHS increasingly requires supplier ISO 27001 certification. It's becoming a condition of system integration and NHS contracts.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4 mt-10">What We Cover</h2>
          
          <div className="space-y-4 mb-10">
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">ISO 27001 (Information Security)</h3>
              <p className="text-sm text-gray-700">
                We establish access controls, encryption, incident response, staff training, and vendor management for patient data. We work with your clinical and IT teams to ensure controls protect patient safety without disrupting care workflows.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">ISO 42001 (AI Governance)</h3>
              <p className="text-sm text-gray-700">
                If your digital health platform uses AI for diagnostics, risk prediction, or treatment recommendations, ISO 42001 governance demonstrates safety, bias testing, and medical appropriateness to regulators and patients.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">GDPR Alignment</h3>
              <p className="text-sm text-gray-700">
                ISO 27001 covers technical and organizational measures GDPR requires. We help you demonstrate compliance to regulators and build patient confidence.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Our Process</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-10 space-y-4 text-sm">
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 1–2: Security & Clinical Assessment</h3>
              <p className="text-gray-700">
                We review your current security practices, IT infrastructure, data flows, and clinical workflows. We understand how you handle patient data and identify where additional controls are needed. We work with clinical leaders to ensure controls protect patient safety.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 3–10: Build Your System</h3>
              <p className="text-gray-700">
                We write security policies, access control procedures, incident response plans, staff training requirements, and vendor management processes. We ensure all controls integrate into clinical workflows, not disrupt them.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 11–14: Internal Audit & Review</h3>
              <p className="text-gray-700">
                We audit your system independently to find gaps before your certification body does. We conduct a management review so clinical and executive leadership can discuss governance with auditors.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Weeks 15–20: Certification Audit</h3>
              <p className="text-gray-700">
                Your chosen UKAS accredited certification body conducts a two-stage audit. We prepare you for both. Post-certification, annual surveillance audits maintain your certificate.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Cost & Investment</h2>
          
          <p className="text-sm text-gray-700 mb-4">
            First-year certification typically costs <strong>£7,000 to £16,000</strong>:
          </p>
          
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-10">
            <li>ISO 27001 alone: £7,000–11,000</li>
            <li>ISO 42001 alone (digital health with AI): £5,000–8,000</li>
            <li>ISO 27001 + ISO 42001: £10,000–16,000</li>
          </ul>

          <p className="text-sm text-gray-700 mb-10">
            We always quote a fixed fee. No surprises.
          </p>

          <h2 className="text-2xl font-bold text-blue-950 mb-4">Common Questions</h2>
          
          <div className="space-y-4 mb-10 text-sm">
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Will ISO 27001 slow down our clinical workflows?</h3>
              <p className="text-gray-700">
                No. We design security controls that protect patient safety without disrupting care delivery. Most controls are procedural or policy-based. We work with clinical leaders to ensure all controls enhance trust and safety.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">How does this help with NHS contracts?</h3>
              <p className="text-gray-700">
                NHS increasingly requires supplier ISO 27001 certification as a tender condition. It's particularly important for digital health platforms, telehealth providers, and medtech suppliers seeking NHS integration.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-950 mb-1">Do we need ISO 27001 if we have GDPR compliance?</h3>
              <p className="text-gray-700">
                GDPR requires appropriate security but doesn't prescribe how to achieve it. ISO 27001 provides the framework and evidence that you have appropriate technical and organizational controls. They're complementary — ISO 27001 helps you demonstrate GDPR compliance.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-950 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Protect Patient Trust?</h2>
            <p className="text-blue-100 mb-6 text-sm">
              A free 30-minute call is the fastest way to understand certification scope, regulatory alignment, and investment for your healthcare organization.
            </p>
            <Link href="/contact" className="bg-yellow-500 text-blue-950 px-6 py-2 rounded text-sm font-semibold hover:bg-yellow-400 transition inline-block">
              Book a Free Consultation
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              Rob Pragnell is a CQI/IRCA Certified Lead Auditor for ISO 27001 and 42001. He has advised digital health platforms, medtech companies, and healthcare providers on security and AI governance.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
