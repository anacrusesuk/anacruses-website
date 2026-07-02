import Link from 'next/link';

export const metadata = {
  title: 'ISO 27001 & ISO 42001 for Healthcare | Anacruses Associates',
  description: 'ISO 27001 cybersecurity and ISO 42001 AI governance for digital health, medtech, and healthcare providers. GDPR-compliant. Free consultation.',
};

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-white">
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

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-blue-950 mb-4">Why Healthcare Organizations Choose ISO 27001 & ISO 42001</h2>
        
        <div className="space-y-4 mb-8 text-base text-gray-700">
          <p>
            Healthcare organizations hold some of the most sensitive information in the world: patient medical records, genetic information, mental health data. A breach doesn't just expose data — it damages patient trust and can affect clinical outcomes.
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
            <h3 className="text-lg font-bold text-blue-950 mb-3">Unlock NHS & System Contracts</h3>
            <p className="text-sm text-gray-700">
              NHS increasingly requires supplier ISO 27001 certification. It's becoming a condition of system integration and NHS contracts.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-blue-950 mb-4">Cost & Investment</h2>
        
        <p className="text-sm text-gray-700 mb-4">
          First-year certification typically costs <strong>£7,000 to £16,000</strong>:
        </p>
        
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-10">
          <li>ISO 27001 alone: £7,000–11,000</li>
          <li>ISO 42001 alone: £5,000–8,000</li>
          <li>ISO 27001 + ISO 42001: £10,000–16,000</li>
        </ul>

        <div className="bg-blue-950 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Protect Patient Trust?</h2>
          <p className="text-blue-100 mb-6 text-sm">
            A free 30-minute call is the fastest way to understand certification scope, regulatory alignment, and investment for your healthcare organization.
          </p>
          <Link href="/contact" className="bg-yellow-500 text-blue-950 px-6 py-2 rounded text-sm font-semibold hover:bg-yellow-400 transition inline-block">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
