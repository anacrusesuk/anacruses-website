import Link from 'next/link';
import RelatedInsights from "../../../components/RelatedInsights";

export const metadata = {
  title: 'ISO 14001:2026 Transition Consultant UK — Environmental Management',
  description: 'ISO 14001:2026 is published. UK transition and new-certification support from a CQI/IRCA Lead Auditor: what changed, the timeline, and a practical gap analysis.',
  alternates: { canonical: 'https://anacruses.co.uk/services/iso-14001-2026/' },
};

const FAQS = [
  {
    "q": "Is my ISO 14001:2015 certificate still valid?",
    "a": "Yes. Certificates to the 2015 edition remain valid throughout the transition period, provided you maintain conformity and complete surveillance and recertification audits on schedule."
  },
  {
    "q": "When do I need to transition to ISO 14001:2026?",
    "a": "Approximately three years from publication in April 2026, to around spring 2029. Check the exact date with your certification body."
  },
  {
    "q": "What is new in ISO 14001:2026?",
    "a": "A new Clause 6.3 on change management, a broader definition of environmental context, formal integration of the 2024 climate change amendment, tightened terminology, and expanded leadership responsibility."
  },
  {
    "q": "When can I actually be certified to the 2026 edition?",
    "a": "Certification bodies need nine to twelve months after publication to gain accreditation, so transition audits are unlikely to be widely available before 2027."
  },
  {
    "q": "Should a new client certify to 2015 or 2026?",
    "a": "Implement to the 2026 edition so you do not have to transition later. Confirm with your certification body when they can audit against it."
  }
];
const CHANGES = [
  {
    "h": "New Clause 6.3 — change management",
    "b": "Planned changes must be assessed for their environmental consequences before they happen, not reviewed afterwards."
  },
  {
    "h": "Broader environmental context (Clause 4.1)",
    "b": "You must explicitly consider biodiversity, pollution levels, resource availability and ecosystem health, not just the issues your organisation directly controls."
  },
  {
    "h": "Climate change amendment built in",
    "b": "The 2024 climate change amendment is now part of Clauses 4.1 and 4.2. If you addressed it in 2024, you are ahead."
  },
  {
    "h": "Tightened terminology",
    "b": "For example, \"externally provided processes\" replaces \"outsourced processes\". Small changes, but worth reflecting in your documentation."
  },
  {
    "h": "Expanded leadership responsibility",
    "b": "Expectations extend to non-management roles with environmental responsibilities."
  }
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />

      <section className="bg-navy text-white py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <span className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mb-4 inline-block">ISO 14001:2026</span>
          <h1 className="text-4xl font-bold mb-4">Environmental Management Systems — the 2026 Edition</h1>
          <p className="text-xl text-blue-100 max-w-2xl">ISO 14001:2026 has been published. Certificates to the 2015 edition stay valid during the transition period. Here is what changed and how to move across.</p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed">

            <p className="text-gray-600 leading-relaxed border-l-4 border-gold pl-4 py-1">ISO 14001:2026 became the official edition on 15 April 2026, replacing the 2015 version. The revision is targeted rather than transformative: a new change management clause, a broader view of environmental context, and stronger leadership expectations. A well-functioning system needs refinement, not a rebuild.</p>

            <div className="card border-l-4 border-l-gold">
              <p className="text-sm text-gray-700">
                Certified to or working towards <strong className="text-navy">ISO 14001:2015</strong>?{' '}
                <Link href="/services/iso-14001" className="text-gold hover:underline">See our ISO 14001:2015 page →</Link>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy">What has changed in ISO 14001:2026</h2>
            <p>The headline changes are below. Most organisations are already doing some of this informally and need to document it properly.</p>
            <div className="space-y-4">
              {CHANGES.map(({ h, b }) => (
                <div key={h} className="border-l-4 border-mist pl-4">
                  <p className="font-bold text-navy text-sm mb-1">{h}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{b}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy mt-6">Transition timeline</h2>
            <p>The transition period runs for approximately three years from publication in April 2026, taking the deadline to around spring 2029. Your certification body will confirm the exact date for your certificate.</p>
            <p>Certification bodies need nine to twelve months after publication to gain accreditation, so widespread transition audits are unlikely before 2027. The usable window is closer to eighteen months than three years, and auditor availability will tighten towards the deadline.</p>

            <h2 className="text-2xl font-bold text-navy mt-6">What to do now</h2>
            <ul className="list-none space-y-2">
              {[
  "Run a gap analysis against Clause 6.3 and the broadened context requirements",
  "Update aspects, impacts and context documentation for biodiversity, pollution and resource availability",
  "Align terminology across your documents",
  "Plan your transition into your next scheduled surveillance or recertification audit",
  "Ask your certification body early about their accreditation timeline"
].map(item => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="text-gold flex-shrink-0 mt-1">◆</span>{item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-6">How Anacruses helps</h2>
            <p>We run a gap analysis against the 2026 edition, update your documentation, brief your team, and support you through the transition audit. If you are certifying for the first time, we implement directly to ISO 14001:2026.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 my-6 text-center text-xs">
              {['2026 Gap Analysis', 'Documentation Update', 'Training', 'Transition Audit Support'].map((step, i) => (
                <div key={step} className="bg-mist rounded p-3">
                  <div className="w-7 h-7 rounded-full bg-navy text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">{i+1}</div>
                  <div className="font-semibold text-navy">{step}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              New to ISO 14001? We implement directly to the 2026 edition, so you never have to transition later.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="border-l-4 border-mist pl-4">
                  <p className="font-bold text-navy text-sm mb-1">{q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/contact" className="btn-primary">Book a ISO 14001:2026 gap check →</Link>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="card border-t-4 border-t-gold">
              <h3 className="font-bold text-navy mb-2 text-sm">Rob's ISO 14001 credentials</h3>
              <ul className="text-xs text-gray-600 space-y-1.5">
                <li className="flex gap-2"><span className="text-gold">◆</span>CQI/IRCA Certified Lead Auditor — ISO 14001</li>
                <li className="flex gap-2"><span className="text-gold">◆</span>Over 20 years implementing ISO standards across multiple sectors</li>
                <li className="flex gap-2"><span className="text-gold">◆</span>Approved by multiple UKAS-accredited certification bodies</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-navy mb-2 text-sm">Related services</h3>
              <ul className="text-xs text-gray-600 space-y-1.5">
                {[
                  ['ISO 14001:2015 — current edition', '/services/iso-14001'],
                  ['ISO 9001 — Quality:2026', '/services/iso-9001-2026'],
                  ['ISO 45001 — Health & Safety', '/services/iso-45001'],
                  ['Get Certified — Our Process', '/get-certified'],
                ].map(([label, href]) => (
                  <li key={href}><Link href={href} className="text-gold hover:text-gold-dark">{label} →</Link></li>
                ))}
              </ul>
            </div>
            <RelatedInsights tag="ISO 14001" />
          </aside>
        </div>
      </section>

      <section className="bg-gold py-10 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-3">Ready to move to ISO 14001:2026?</h2>
          <p className="opacity-90 mb-5 text-sm">Book a free consultation and we will show you exactly where your system stands against the new edition.</p>
          <Link href="/contact" className="inline-block bg-white text-gold-dark font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
