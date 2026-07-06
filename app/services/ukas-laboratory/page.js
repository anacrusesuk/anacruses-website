import Link from 'next/link';
import RelatedInsights from "../../../components/RelatedInsights";

export const metadata = {
  title: 'UKAS Laboratory Accreditation Consultant UK — ISO 17025',
  description: 'ISO 17025 UKAS laboratory accreditation consultancy for UK testing and calibration laboratories. Expert support from a consultant with direct UKAS laboratory experience.',
};

export default function UKASLaboratory() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is the difference between ISO 17025 and ISO 9001?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ISO 9001 is a general quality management standard. ISO/IEC 17025 includes all the management system requirements of ISO 9001 but adds technical requirements covering measurement uncertainty, method validation, equipment calibration, and traceability.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does UKAS laboratory accreditation take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "UKAS accreditation typically takes 9 to 18 months from initial engagement to accreditation, depending on your laboratory's current position and the breadth of scope sought.",
                },
              },
              {
                '@type': 'Question',
                name: 'What does the UKAS accreditation process involve?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The process includes an application to UKAS, a desk review of your documentation, a formal assessment visit where UKAS assessors witness your testing or calibration methods, and ongoing surveillance assessments to maintain accreditation.',
                },
              },
              {
                '@type': 'Question',
                name: 'Who needs UKAS laboratory accreditation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Environmental, construction materials, calibration, food testing, and medical or pharmaceutical laboratories typically need UKAS accreditation, along with any laboratory whose results are submitted to regulators or used in legal proceedings.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can Anacruses support us between UKAS surveillance visits?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Anacruses provides ongoing support between UKAS surveillance visits, helping maintain compliance, respond to UKAS findings, and extend your scope of accreditation as your laboratory grows.',
                },
              },
            ],
          }),
        }}
      />

      <section className="bg-navy text-white py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <span className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mb-4 inline-block">ISO 17025:2017 · UKAS</span>
          <h1 className="text-4xl font-bold mb-4">UKAS Laboratory Accreditation</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Expert support for testing and calibration laboratories seeking UKAS accreditation to ISO/IEC 17025 — a specialist area that most generalist ISO consultants do not cover.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed">

            <h2 className="text-2xl font-bold text-navy">What is UKAS laboratory accreditation?</h2>
            <p>
              UKAS (United Kingdom Accreditation Service) is the sole national accreditation body for the UK, recognised by the government to assess and accredit organisations that provide testing, calibration, measurement, inspection, and certification services.
            </p>
            <p>
              Laboratory accreditation to ISO/IEC 17025:2017 is the internationally recognised standard for testing and calibration laboratories. Accreditation demonstrates that a laboratory is technically competent, operates a quality management system, and produces metrologically traceable, reliable results. It is required for laboratories whose test results are used in regulatory, legal, or procurement contexts.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-6">ISO 17025 vs ISO 9001 — what is the difference?</h2>
            <p>
              ISO 9001 is a general quality management standard applicable to any organisation. ISO/IEC 17025 is specifically designed for laboratories — it includes all the management system requirements of ISO 9001 but adds extensive technical requirements covering measurement uncertainty, method validation, calibration of equipment, traceability, sampling, and the handling of test and calibration items.
            </p>
            <p>
              A laboratory holding ISO 9001 certification has demonstrated quality management capability. A laboratory holding UKAS accreditation to ISO 17025 has demonstrated both quality management and technical competence in the specific tests or calibrations it performs. These are not interchangeable — many laboratory clients, regulators and procurement teams specifically require UKAS accreditation, not ISO 9001.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-6">Who needs UKAS laboratory accreditation?</h2>
            <ul className="list-none space-y-2">
              {[
                'Environmental testing laboratories carrying out regulated monitoring and analysis',
                'Calibration laboratories providing traceable measurement services',
                'Construction materials testing laboratories (aggregates, concrete, asphalt, soil)',
                'Food testing and analysis laboratories',
                'Medical, clinical and pharmaceutical testing laboratories',
                'Any laboratory whose results are submitted to regulators or used in legal proceedings',
                'Laboratories supplying test services to clients who specify UKAS accreditation as a requirement',
              ].map(item => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="text-gold flex-shrink-0 mt-1">◆</span>{item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-6">The UKAS accreditation process</h2>
            <p>
              UKAS accreditation is a more involved process than ISO management system certification. It requires an application to UKAS, a desk review of your documentation, a formal assessment visit by UKAS assessors (including witnessed testing or calibration), and ongoing surveillance assessments. The whole process typically takes 6–18 months depending on the laboratory's readiness and the complexity of the scope of accreditation.
            </p>
            <p>
              Anacruses has direct experience working with UKAS-accredited laboratories — supporting them through their initial accreditation process, preparing for UKAS assessment visits, addressing findings raised by UKAS assessors, and maintaining compliance between surveillance cycles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 my-6 text-center text-xs">
              {['Gap Analysis', 'Quality Manual & Docs', 'Technical Setup', 'Pre-Assessment', 'UKAS Assessment'].map((s, i) => (
                <div key={s} className="bg-mist rounded p-3">
                  <div className="w-7 h-7 rounded-full bg-navy text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">{i+1}</div>
                  <div className="font-semibold text-navy">{s}</div>
                </div>
              ))}
            </div>

            <p className="text-sm font-semibold text-navy">
              Typical timeline: 9–18 months from initial engagement to UKAS accreditation, depending on your laboratory's current position and the breadth of accreditation scope sought.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-6">How Anacruses helps</h2>
            <p>
              We begin with a detailed gap analysis against ISO/IEC 17025:2017 — reviewing your quality management system, method documentation, equipment records, personnel competence records, measurement uncertainty estimates, and traceability arrangements. We then work with you systematically to close the gaps, prepare your documentation to UKAS standards, and get you ready for your assessment visit.
            </p>
            <p>
              We can also provide ongoing support between UKAS surveillance visits — helping you maintain compliance, respond to UKAS findings, and extend your scope of accreditation as your laboratory grows.
            </p>

            <div className="pt-4">
              <Link href="/contact" className="btn-primary">Discuss UKAS accreditation support →</Link>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="card border-t-4 border-t-gold">
              <h3 className="font-bold text-navy mb-2 text-sm">Rob's laboratory accreditation experience</h3>
              <ul className="text-xs text-gray-600 space-y-1.5">
                {[
                  'Direct experience auditing and supporting UKAS-accredited laboratories',
                  'Familiar with UKAS assessment processes and expectations',
                  'Experience across environmental, construction materials and calibration laboratories',
                  'Practical understanding of measurement uncertainty and traceability requirements',
                  'Able to support ISO 9001 alongside ISO 17025 where relevant',
                ].map(c => (
                  <li key={c} className="flex gap-2"><span className="text-gold">◆</span>{c}</li>
                ))}
              </ul>
            </div>

            <div className="card bg-mist">
              <h3 className="font-bold text-navy mb-2 text-sm">UKAS vs non-UKAS — does it matter?</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">
                For laboratory services, UKAS accreditation and non-UKAS certification are not equivalent. Many regulatory frameworks, procurement specifications, and contractual requirements specifically require UKAS accreditation — not a certificate from a private certification body.
              </p>
              <Link href="/about" className="text-gold text-xs font-semibold hover:text-gold-dark">
                Read more: UKAS vs non-UKAS explained →
              </Link>
            </div>

            <div className="card">
              <h3 className="font-bold text-navy mb-2 text-sm">Related services</h3>
              <ul className="text-xs text-gray-600 space-y-1.5">
                {[
                  ['ISO 9001 — Quality', '/services/iso-9001'],
                  ['UKAS vs non-UKAS Explained', '/about'],
                  ['Get Certified — Our Process', '/get-certified'],
                ].map(([label, href]) => (
                  <li key={href}><Link href={href} className="text-gold hover:text-gold-dark">{label} →</Link></li>
                ))}
              </ul>
            </div>
            <RelatedInsights tag="ISO Certification" />
          </aside>
        </div>
      </section>

      <section className="bg-gold py-10 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-3">Interested in UKAS laboratory accreditation?</h2>
          <p className="opacity-90 mb-5 text-sm">UKAS accreditation is a significant undertaking — but the right preparation makes the process straightforward. Book a free consultation to discuss your laboratory's current position and what is involved.</p>
          <Link href="/contact" className="inline-block bg-white text-gold-dark font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
