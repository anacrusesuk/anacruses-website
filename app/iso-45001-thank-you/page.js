import Link from 'next/link';

export const metadata = {
  title: 'Your Checklist Is On Its Way | Anacruses',
  description: 'Thank you for downloading the ISO 45001 Certification Checklist.',
  robots: { index: false, follow: false },
};

export default function ISO45001ThankYou() {
  return (
    <>
      <section className="bg-navy text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Thank you</p>
          <h1 className="text-4xl font-bold mb-4">Your checklist is on its way</h1>
          <p className="text-xl text-blue-100 max-w-2xl">Check your inbox — the ISO 45001 Certification Checklist PDF has been sent to your email address.</p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="card border-l-4 border-l-gold">
              <h2 className="font-bold text-navy mb-2">Can't see the email?</h2>
              <p className="text-gray-600 text-sm leading-relaxed">Check your spam or junk folder — the email comes from rob.pragnell@anacruses.co.uk. If it has not arrived within five minutes, email us directly at{' '}<a href="mailto:rob.pragnell@anacruses.co.uk" className="text-gold hover:underline">rob.pragnell@anacruses.co.uk</a>{' '}and we will send the PDF straight to you.</p>
            </div>
            <div className="card">
              <h2 className="font-bold text-navy mb-3">What to read next</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">These articles will help you understand what the checklist items mean in practice.</p>
              <div className="space-y-3">
                {[
                  { href: '/insights/iso-45001-vs-ohsas-18001-uk', title: 'ISO 45001 vs OHSAS 18001: What UK Businesses Need to Know in 2026', desc: 'Why OHSAS 18001 no longer counts and what the transition to ISO 45001 involves.' },
                  { href: '/insights/do-you-need-an-iso-consultant', title: 'Do You Need an ISO Consultant? Honest Answers from a Lead Auditor', desc: 'When external support pays off and when self-implementation is a realistic option.' },
                  { href: '/services/iso-45001', title: 'ISO 45001 Consultancy from Anacruses Associates', desc: 'Fixed-fee ISO 45001 implementation from a CQI/IRCA certified Lead Auditor.' },
                ].map(item => (
                  <Link key={item.href} href={item.href} className="block group card hover:border-gold border border-transparent">
                    <p className="font-bold text-navy group-hover:text-gold transition-colors text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="card border-t-4 border-t-gold">
              <h3 className="font-bold text-navy mb-3">Book a free consultation</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">If anything on the checklist raises questions about your own position, book a free no-obligation call.</p>
              <Link href="/contact" className="btn-primary text-xs">Book a call</Link>
              <p className="text-xs text-gray-400 mt-3">Or call{' '}<a href="tel:07792259840" className="text-gold hover:underline">07792 259840</a></p>
            </div>
            <div className="card border-t-4 border-t-navy">
              <div className="flex items-center gap-3 mb-3">
                <img src="/images/rob.jpg" alt="Rob Pragnell" className="w-10 h-10 rounded-full object-cover border-2 border-gold" />
                <div>
                  <p className="font-bold text-navy text-sm">Rob Pragnell</p>
                  <p className="text-gray-500 text-xs">CQI/IRCA Lead Auditor</p>
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">20+ years implementing ISO management systems across UK businesses. Every Anacruses client works directly with Rob.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
