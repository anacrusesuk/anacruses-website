import Link from 'next/link';

export const metadata = {
  title: 'ISO Resources & Newsletter — Anacruses Associates',
  description: 'Sign up for practical ISO insights, regulatory updates and certification guidance from Anacruses Associates Ltd.',
};

export default function Resources() {
  return (
    <>
      <section className="bg-navy text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-4xl font-bold mb-4">Stay Ahead on ISO</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Practical ISO insights, regulatory updates and certification guidance — direct to your inbox. Written by a working Lead Auditor, not a content team.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">

          {/* What you get */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">What you'll receive</h2>
            <div className="space-y-4">
              {[
                { title: 'ISO standards updates', body: 'When standards change — including the upcoming ISO 9001 and 14001 revisions — you will hear about it from someone who sits on the committees, not a press release.' },
                { title: 'Practical certification guidance', body: 'The questions clients ask most often, answered honestly. How long it takes, what it costs, what auditors actually look for.' },
                { title: 'AI governance and ISO 42001', body: 'The standard most businesses haven't heard of yet — but will need. Early briefings on where AI governance is heading.' },
                { title: 'No spam, ever', body: 'Useful content only, when there's something worth saying. Unsubscribe in one click at any time.' },
              ].map(item => (
                <div key={item.title} className="card border-l-4 border-l-gold">
                  <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-mist rounded-lg text-xs text-gray-500 leading-relaxed">
              By signing up you agree to receive occasional emails from Anacruses Associates Ltd. Your data will be stored securely by Brevo and will never be shared with third parties. You can unsubscribe at any time. View our <Link href="/contact" className="text-gold hover:underline">privacy information</Link>.
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="card border-t-4 border-t-gold">
              <h2 className="text-xl font-bold text-navy mb-2">Sign up for ISO Insights</h2>
              <p className="text-gray-500 text-sm mb-4">Join other UK business leaders staying ahead on ISO certification and compliance.</p>
              <iframe
                width="100%"
                height="480"
                src="https://b063a5c1.sibforms.com/serve/MUIFAPGvQY5DN6LOdavajVvyLw4R1MXk_AIA_f-IdW0tmuA8kf5yEURjcB1QlFcgauY8lW7MAgjWIPwfx8315ujTtFrwl6NjI6gGvziVhBZxANAIrkii_YhF4kpUsxN369YhJ5mgMwtnpPgclTmhIUXtzOOHB22zSj0ObwBdTNGfdpI_G52yZ96eUmyFMDQRkS_yqdJfSygUsV-ZWg=="
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                style={{display:'block', maxWidth:'100%', border:'none'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insights teaser */}
      <section className="bg-mist py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-navy mb-2">Browse ISO Insights</h2>
          <p className="text-gray-600 text-sm mb-4">See the kind of content you can expect before you sign up.</p>
          <Link href="/insights" className="btn-primary">View ISO Insights →</Link>
        </div>
      </section>
    </>
  );
}
