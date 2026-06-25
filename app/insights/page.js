import Link from 'next/link';
import { getInsightsArticles } from '../../lib/insights';

export const metadata = {
  title: 'ISO Insights — Practical Guidance from Anacruses Associates',
  description: 'Practical ISO guidance from a working CQI Lead Auditor. Real answers to the questions businesses ask before they pick up the phone.',
};

export default function Insights() {
  const articles = getInsightsArticles();

  return (
    <>
      <section className="bg-navy text-white py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">ISO Insights</p>
          <h1 className="text-4xl font-bold mb-4">Practical ISO Guidance</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Real answers to the questions businesses ask before they pick up the phone — written from 20+ years of hands-on audit and consultancy experience.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">

          {/* Articles */}
          <div className="md:col-span-2">
            {articles.length === 0 ? (
              <div className="card text-center py-8">
                <p className="text-gray-400">Articles coming soon.</p>
              </div>
            ) : (
              <div className="space-y-5">
                {articles.map(article => (
                  <Link key={article.slug} href={`/insights/${article.slug}`}
                    className="card block group hover:border-gold border border-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-400">{article.date}</span>
                      {article.tag && (
                        <span className="text-xs bg-mist text-navy px-2 py-0.5 rounded font-medium">{article.tag}</span>
                      )}
                    </div>
                    <h2 className="font-bold text-navy group-hover:text-gold transition-colors text-lg mb-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{article.excerpt}</p>
                    <div className="mt-3 text-gold text-sm font-semibold">Read more →</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="card border-t-4 border-t-gold">
              <h3 className="font-bold text-navy mb-3">Book a free consultation</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Read something relevant to your business? Get in touch for a free, no-obligation conversation about what it means for you.
              </p>
              <Link href="/contact" className="btn-primary text-xs">Book a call</Link>
            </div>
            <div className="card border-t-4 border-t-navy">
              <h3 className="font-bold text-navy mb-3 text-sm">ISO Standards We Cover</h3>
              <ul className="space-y-1 text-sm">
                {[
                  ['ISO 9001', '/services/iso-9001'],
                  ['ISO 14001', '/services/iso-14001'],
                  ['ISO 27001', '/services/iso-27001'],
                  ['ISO 45001', '/services/iso-45001'],
                  ['ISO 42001', '/services/iso-42001'],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-gold hover:text-navy transition-colors">{label} →</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
