import Link from 'next/link';
import { getNewsArticles } from '../../lib/news';

export const metadata = {
  title: 'News & Comment — ISO Updates from Anacruses',
  description: 'The latest ISO news, regulatory updates and practical comment from Anacruses Associates Ltd — published every Monday and Thursday.',
};

export default function News() {
  const articles = getNewsArticles();

  return (
    <>
      <section className="bg-navy-DEFAULT text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gold-DEFAULT font-semibold text-sm uppercase tracking-widest mb-3">News & Comment</p>
          <h1 className="text-4xl font-bold mb-4">ISO News & Comment</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Practical updates on ISO standards, regulatory changes, and compliance insights — published every Monday and Thursday.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Article grid */}
          <div className="md:col-span-2">
            {articles.length === 0 ? (
              <div className="card text-center py-12">
                <p className="text-gray-400">Articles coming soon. Check back on Monday.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {articles.map(article => (
                  <Link key={article.slug} href={`/news/${article.slug}`}
                    className="card block group hover:border-gold-DEFAULT border border-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-400">{article.date}</span>
                      {article.tag && (
                        <span className="text-xs bg-mist text-navy-DEFAULT px-2 py-0.5 rounded font-medium">{article.tag}</span>
                      )}
                    </div>
                    <h2 className="font-bold text-navy-DEFAULT group-hover:text-gold-DEFAULT transition-colors text-lg mb-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{article.excerpt}</p>
                    <div className="mt-3 text-gold-DEFAULT text-sm font-semibold">Read more →</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="card border-t-4 border-t-gold-DEFAULT">
              <h3 className="font-bold text-navy-DEFAULT mb-3">Book a consultation</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Read something relevant to your business? Get in touch for a free, no-obligation conversation about what it means for you.
              </p>
              <Link href="/contact" className="btn-primary inline-block text-sm">Book a Free Consultation</Link>
            </div>
            <div className="card">
              <h3 className="font-bold text-navy-DEFAULT mb-3">ISO Training</h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                Build your team's ISO expertise with accredited training courses from ISOQAR Academy.
              </p>
              <a href="https://tidd.ly/4973Hxg" target="_blank" rel="noopener noreferrer"
                 className="text-gold-DEFAULT text-sm font-semibold hover:text-gold-dark">
                Browse courses →
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
