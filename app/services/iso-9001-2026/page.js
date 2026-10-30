import Link from 'next/link';
import RelatedInsights from "../../../components/RelatedInsights";

export const metadata = {
  title: 'ISO 9001:2026 Transition Consultant UK — Quality Management',
  description: 'ISO 9001:2026 is published. UK transition and new-certification support from a CQI/IRCA Lead Auditor: what changed, the timeline, and a practical gap analysis.',
  alternates: { canonical: 'https://anacruses.co.uk/services/iso-9001-2026/' },
};

const FAQS = [
  {
    "q": "Is my ISO 9001:2015 certificate still valid?",
    "a": "Yes. Certificates to the 2015 edition remain valid throughout the transition period, provided you continue with your surveillance and recertification audits on schedule."
  },
  {
    "q": "When do I have to transition to ISO 9001:2026?",
    "a": "The transition period is expected to run for three years from publication in September 2026, to around September 2029. Your certification body will confirm the exact date for your certificate."
  },
  {
    "q": "Do I need to rewrite my quality management system?",
    "a": "Almost certainly not. The changes are targeted. Most organisations need to update context analysis, separate risk and opportunity, add evidence of quality culture and ethics, and extend awareness training."
  },
  {
    "q": "Should a new client certify to 2015 or 2026?",
    "a": "If you are starting now, implement to the 2026 edition so you do not have to transition later. Speak to your chosen certification body about when they can audit against it."
  },
  {
    "q": "Does ISO 9001:2026 include AI or ESG requirements?",
    "a": "No. The standard remains technology-neutral, and there are no formal AI governance, ESG reporting or supply chain resilience requirements."
  }
];
const CHANGES = [
  {
    "h": "Climate change (Clauses 4.1 and 4.2)",
    "b": "Introduced by Amendment 1:2024 and now part of the edition. You must determine whether climate change is a relevant issue for your context, and consider whether interested parties have climate-related requirements. Auditors expect a documented assessment, even where the conclusion is that it is not relevant."
  },
  {
    "h": "Quality culture and ethics (Clause 5.1.1)",
    "b": "Top management must promote and demonstrate a quality culture and ethical behaviour. Expect auditors to look for evidence in leadership communications and management review."
  },
  {
    "h": "Risk and opportunity (Clause 6.1)",
    "b": "Clause 6.1 is split into subclauses 6.1.1, 6.1.2 and 6.1.3, separating risk from opportunity. If you currently combine both in one register, you will need to separate them."
  },
  {
    "h": "Awareness (Clause 7.3)",
    "b": "Awareness requirements extend to quality culture and ethical behaviour, not just the quality policy and each person's contribution to objectives."
  },
  {
    "h": "New Annex A guidance",
    "b": "ISO 9001 now includes an informative guidance annex covering Clauses 4 to 10. It creates no new requirements, but it is likely to shape how auditors interpret the standard."
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
          <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <span className="bg-gold text-white text-xs font-bold px-2 py-1 rounded mb-4 inline-block">ISO 9001:2026</span>
          <h1 className="text-4xl font-bold mb-4">Quality Management Systems — the 2026 Edition</h1>
          <p className="text-xl text-blue-100 max-w-2xl">ISO 9001:2026 is here. Certificates to the 2015 edition stay valid during the transition period. Here is what changed and how to move across without disruption.</p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-gray-700 leading-relaxed">

            <p className="text-gray-600 leading-relaxed border-l-4 border-gold pl-4 py-1">ISO 9001:2026 replaces the 2015 edition. The revision is evolutionary: the clause structure and core requirements stay the same, with targeted changes to quality culture, ethics, risk and opportunity, and awareness. Most organisations with a working QMS need a focused update, not a rebuild.</p>

            <div className="card border-l-4 border-l-gold">
              <p className="text-sm text-gray-700">
                Certified to or working towards <strong className="text-navy">ISO 9001:2015</strong>?{' '}
                <Link href="/services/iso-9001" className="text-gold hover:underline">See our ISO 9001:2015 page →</Link>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy">What has changed in ISO 9001:2026</h2>
            <p>The changes are targeted. These are the areas auditors will look at first.</p>
            <div className="space-y-4">
              {CHANGES.map(({ h, b }) => (
                <div key={h} className="border-l-4 border-mist pl-4">
                  <p className="font-bold text-navy text-sm mb-1">{h}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{b}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy mt-6">Transition timeline</h2>
            <p>Certification bodies are expected to offer a three-year transition period from publication in September 2026, taking the deadline to around September 2029. Your exact date will be confirmed by your certification body.</p>
            <p>Certification bodies typically need nine to twelve months to gain accreditation for a new edition, so the first ISO 9001:2026 certificates are realistically expected around mid-to-late 2027. Start planning early: auditor capacity tightens as the deadline approaches.</p>

            <h2 className="text-2xl font-bold text-navy mt-6">What to do now</h2>
            <ul className="list-none space-y-2">
              {[
  "Update your Clause 4.1 context analysis to address climate change, if you have not already",
  "Start building an evidence trail for quality culture and ethics in leadership communications and management review",
  "Separate risk and opportunity in your documentation",
  "Add quality culture and ethics to induction and awareness training",
  "Ask your certification body when your transition audit can be scheduled, ideally alongside a surveillance or recertification audit"
].map(item => (
                <li key={item} className="flex gap-2 text-sm">
                  <span className="text-gold flex-shrink-0 mt-1">◆</span>{item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-6">How Anacruses helps</h2>
            <p>We run a gap analysis against the 2026 edition, update your documentation, brief your team, and support you through the transition audit. If you are certifying for the first time, we implement directly to ISO 9001:2026.</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 my-6 text-center text-xs">
              {['2026 Gap Analysis', 'Documentation Update', 'Training', 'Transition Audit Support'].map((step, i) => (
                <div key={step} className="bg-mist rounded p-3">
                  <div className="w-7 h-7 rounded-full bg-navy text-white font-bold text-sm flex items-center justify-center mx-auto mb-2">{i+1}</div>
                  <div className="font-semibold text-navy">{step}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              New to ISO 9001? We implement directly to the 2026 edition, so you never have to transition later.
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
              <Link href="/contact" className="btn-primary">Book a ISO 9001:2026 gap check →</Link>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="card border-t-4 border-t-gold">
              <h3 className="font-bold text-navy mb-2 text-sm">Rob's ISO 9001 credentials</h3>
              <ul className="text-xs text-gray-600 space-y-1.5">
                <li className="flex gap-2"><span className="text-gold">◆</span>CQI/IRCA Certified Lead Auditor — ISO 9001</li>
                <li className="flex gap-2"><span className="text-gold">◆</span>Over 20 years implementing ISO standards across multiple sectors</li>
                <li className="flex gap-2"><span className="text-gold">◆</span>Approved by multiple UKAS-accredited certification bodies</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-navy mb-2 text-sm">Related services</h3>
              <ul className="text-xs text-gray-600 space-y-1.5">
                {[
                  ['ISO 9001:2015 — current edition', '/services/iso-9001'],
                  ['ISO 14001 — Environmental:2026', '/services/iso-14001-2026'],
                  ['ISO 45001 — Health & Safety', '/services/iso-45001'],
                  ['Get Certified — Our Process', '/get-certified'],
                ].map(([label, href]) => (
                  <li key={href}><Link href={href} className="text-gold hover:text-gold-dark">{label} →</Link></li>
                ))}
              </ul>
            </div>
            <RelatedInsights tag="ISO 9001" />
          </aside>
        </div>
      </section>

      <section className="bg-gold py-10 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-3">Ready to move to ISO 9001:2026?</h2>
          <p className="opacity-90 mb-5 text-sm">Book a free consultation and we will show you exactly where your system stands against the new edition.</p>
          <Link href="/contact" className="inline-block bg-white text-gold-dark font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
