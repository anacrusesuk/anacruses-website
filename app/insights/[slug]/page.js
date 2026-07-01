import Link from 'next/link';
import { getInsightBySlug, getInsightsArticles } from '../../../lib/insights';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const articles = getInsightsArticles();
  return articles.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const article = getInsightBySlug(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} — Anacruses ISO Insights`,
    description: article.excerpt,
  };
}

function renderContent(content) {
  return content
    .split('\n\n')
    .map((block, i) => {
      if (block.startsWith('**') && block.endsWith('**') && !block.slice(2).includes('**')) {
        return <h3 key={i} className="font-bold text-navy text-lg mt-6 mb-2">{block.slice(2, -2)}</h3>;
      }
      if (block.startsWith('- ')) {
        const items = block.split('\n').filter(l => l.startsWith('- '));
        return <ul key={i} className="list-disc pl-5 space-y-1 text-gray-700 text-sm leading-relaxed mb-4">{items.map((item, j) => <li key={j}>{item.slice(2)}</li>)}</ul>;
      }
      const formatted = block
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      return <p key={i} className="text-gray-700 leading-relaxed mb-4 text-sm" dangerouslySetInnerHTML={{ __html: formatted }} />;
    });
}

export default function InsightArticle({ params }) {
  const article = getInsightBySlug(params.slug);
  if (!article) notFound();

  const allArticles = getInsightsArticles().filter(a => a.slug !== params.slug).slice(0, 3);

  const faqSchema = article.faq && article.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className="bg-navy text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/insights" className="text-gold text-sm hover:text-white transition-colors mb-4 inline-block">← Back to ISO Insights</Link>
          {article.tag && (
            <span className="block text-gold font-semibold text-xs uppercase tracking-widest mb-3">{article.tag}</span>
          )}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl">{article.title}</h1>
          <p className="text-blue-100 text-sm">{article.date}</p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <article className="md:col-span-2">
            <div className="prose max-w-none">
              {renderContent(article.content)}
            </div>

            {faqSchema && (
              <div className="mt-8 space-y-4">
                <h2 className="text-xl font-bold text-navy">Frequently asked questions</h2>
                {article.faq.map((item, i) => (
                  <div key={i} className="border-l-4 border-gold pl-4">
                    <p className="font-bold text-navy text-sm mb-1">{item.question}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 p-5 bg-mist rounded-lg border-l-4 border-gold">
              <p className="font-bold text-navy mb-2">Ready to talk about your business?</p>
              <p className="text-gray-600 text-sm mb-4">Book a free, no-obligation call. We will tell you exactly what certification would involve for your size, sector, and starting point.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary text-xs">Book a free consultation</Link>
                <a href="tel:07792259840" className="text-gold text-sm font-semibold hover:underline self-center">or call 07792 259840</a>
              </div>
            </div>
          </article>

          <aside className="space-y-5">
            <div className="card border-t-4 border-t-gold">
              <div className="flex items-center gap-3 mb-3">
                <img src="/images/rob.jpg" alt="Rob Pragnell" className="w-12 h-12 rounded-full object-cover object-center border-2 border-gold" />
                <div>
                  <p className="font-bold text-navy text-sm">Rob Pragnell</p>
                  <p className="text-gray-500 text-xs">CQI Lead Auditor · 20+ years</p>
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">CQI & TRECCERT certified Lead Auditor across ISO 9001, 14001, 27001 & 45001. ISO 42001 Practitioner.</p>
              <Link href="/about" className="text-gold text-xs hover:underline mt-2 inline-block">Full biography →</Link>
            </div>

            {allArticles.length > 0 && (
              <div className="card border-t-4 border-t-navy">
                <h3 className="font-bold text-navy mb-3 text-sm">More ISO Insights</h3>
                <div className="space-y-3">
                  {allArticles.map(a => (
                    <Link key={a.slug} href={`/insights/${a.slug}`} className="block group">
                      <p className="text-sm text-navy group-hover:text-gold transition-colors font-medium leading-snug">{a.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{a.date}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="card border-t-4 border-t-gold">
              <h3 className="font-bold text-navy mb-3 text-sm">Services</h3>
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

      {allArticles.length > 0 && (
        <section className="bg-mist py-8">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-navy mb-5">More from ISO Insights</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {allArticles.map(a => (
                <Link key={a.slug} href={`/insights/${a.slug}`}
                  className="card group hover:border-gold border border-transparent">
                  {a.tag && <span className="text-xs bg-navy text-white px-2 py-0.5 rounded font-medium mb-2 inline-block">{a.tag}</span>}
                  <h3 className="font-bold text-navy group-hover:text-gold transition-colors text-sm mb-2">{a.title}</h3>
                  <p className="text-gray-500 text-xs">{a.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
