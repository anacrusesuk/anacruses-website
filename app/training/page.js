import Link from 'next/link';

export const metadata = {
  title: 'ISO Training Courses — Anacruses Training',
  description: 'ISO training courses from foundation level to Lead Auditor. Anacruses has partnered with ISOQAR Academy to provide high-quality ISO training for UK businesses.',
};

const courseTypes = [
  {
    title: 'Foundation Courses',
    who: 'Management teams and staff new to ISO',
    desc: 'Understand what ISO standards are, how they apply to your business, and what the certification process involves. The ideal starting point before implementation begins.',
    icon: '📋',
  },
  {
    title: 'Internal Auditor',
    who: 'Staff who will conduct internal audits',
    desc: 'Practical, hands-on training for the people in your organisation who will carry out internal audits as part of your management system. Covers audit planning, execution and reporting.',
    icon: '🔍',
  },
  {
    title: 'Lead Auditor',
    who: 'Professionals seeking CQI/IRCA qualification',
    desc: 'CQI/IRCA recognised Lead Auditor qualifications. The gold standard for those looking to audit organisations professionally or demonstrate the highest level of ISO competence.',
    icon: '🏅',
  },
  {
    title: 'E-Learning',
    who: 'Anyone who prefers flexible, self-paced study',
    desc: 'Complete accredited ISO modules in your own time, on any device. Ideal for busy teams who cannot commit to fixed-schedule classroom sessions.',
    icon: '💻',
  },
];

// IMPORTANT: This is the Awin affiliate tracking link. Do not change it.
const AWIN_LINK = 'https://tidd.ly/4973Hxg';

export default function Training() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Training</p>
          <h1 className="text-4xl font-bold mb-4">ISO Training Courses</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Build the in-house expertise that supports your certification — and keeps it working year after year.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-navy">Why training matters</h2>
            <p>
              Achieving ISO certification is a significant step. Maintaining it — and getting real value from it — depends on having people in your organisation who understand the standard, can conduct internal audits, and can identify opportunities for continuous improvement.
            </p>
            <p>
              Without that internal capability, management systems can drift. Processes become outdated, internal audits become a box-ticking exercise, and the gap between what your system says and what your business does grows wider. Training closes that gap.
            </p>
            <p>
              Anacruses has partnered with <strong>ISOQAR Academy</strong>, one of the UK's leading ISO training providers, to give our clients access to a comprehensive range of ISO training courses — from introductory modules to internationally recognised Lead Auditor qualifications.
            </p>
          </div>
          <div className="bg-mist rounded-lg p-8 border border-gray-200">
            <h3 className="font-bold text-navy text-lg mb-2">ISOQAR Academy</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              ISOQAR Academy is a leading provider of ISO-based training courses in the UK. Courses are available in classroom, virtual classroom, e-learning and in-house formats, delivered by first-class trainers with real-world audit experience.
            </p>
            <a
              href={AWIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Browse all ISO training courses →
            </a>
            <p className="text-xs text-gray-400 mt-3">Opens ISOQAR Academy in a new tab.</p>
          </div>
        </div>
      </section>

      {/* Course types */}
      <section className="bg-mist py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-2 text-center">Course types available</h2>
          <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">
            Whether you are exploring ISO for the first time or preparing your team to become qualified Lead Auditors, there is a course for you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courseTypes.map(c => (
              <div key={c.title} className="card flex gap-4">
                <div className="text-3xl flex-shrink-0">{c.icon}</div>
                <div>
                  <h3 className="font-bold text-navy mb-0.5">{c.title}</h3>
                  <p className="text-xs text-gold font-semibold mb-2">{c.who}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                  <a href={AWIN_LINK} target="_blank" rel="noopener noreferrer"
                     className="text-gold text-sm font-semibold mt-3 inline-block hover:text-gold-dark">
                    View {c.title} courses →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QR code and main CTA */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy mb-3">Ready to browse courses?</h2>
          <p className="text-gray-600 mb-6">
            Visit ISOQAR Academy to see the full range of available dates, formats and ISO standards covered.
          </p>
          <a
            href={AWIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block text-base px-8 py-4 mb-6"
          >
            Browse ISOQAR Academy Training Courses
          </a>
          <p className="text-gray-400 text-xs mt-2 mb-8">
            You will be taken to ISOQAR Academy's website in a new tab.
          </p>
          <div className="flex justify-center">
            <img src="/images/awin_qrcode.png" alt="Scan to browse ISOQAR Academy courses" className="w-36 h-36" />
          </div>
          <p className="text-xs text-gray-400 mt-2">Scan to browse courses on mobile</p>
        </div>
      </section>

      {/* In-house CTA */}
      <section className="bg-navy text-white py-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-3">Need in-house training for your team?</h2>
          <p className="text-blue-100 mb-5 text-sm">
            We can arrange tailored ISO training delivered at your premises, designed around your specific standard, your team's current knowledge level, and your business context.
          </p>
          <Link href="/contact" className="btn-outline">Get in touch about in-house training →</Link>
        </div>
      </section>
    </>
  );
}
