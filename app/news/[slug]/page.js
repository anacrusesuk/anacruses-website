import Link from 'next/link';
import { getNewsArticles, getArticleBySlug } from '../../../lib/news';
import { marked } from 'marked';

export async function generateStaticParams() {
  const articles = getNewsArticles();
  return articles.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  return {
    title: article?.title ?? 'Article',
    description: article?.excerpt ?? '',
  };
}

export default function ArticlePage({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return <div className="section py-16 text-center text-gray-400">Article not found.</div>;

  const html = marked(article.content ?? '');

  return (
    <>
      <section className="bg-navy text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/news" className="text-gold text-sm hover:underline mb-4 inline-block">← Back to News</Link>
          <div className="text-xs text-blue-200 mb-3">{article.date}</div>
          <h1 className="text-3xl font-bold leading-tight">{article.title}</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div
              className="prose prose-navy max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                Questions about how this affects your business? Get in touch for a free conversation.
              </p>
              <Link href="/contact" className="btn-primary inline-block">Book a Free Consultation</Link>
            </div>
          </div>
          <aside className="space-y-5">
            <div className="card border-t-4 border-t-gold">
              <h3 className="font-bold text-navy mb-2 text-sm">Need ISO advice?</h3>
              <p className="text-gray-600 text-xs mb-3 leading-relaxed">Rob Pragnell is a CQI/IRCA certified Lead Auditor with 20+ years of experience.</p>
              <Link href="/contact" className="btn-primary inline-block text-xs">Get in touch</Link>
            </div>
            <div className="card">
              <h3 className="font-bold text-navy mb-2 text-sm">ISO Training</h3>
              <p className="text-gray-600 text-xs mb-2 leading-relaxed">Accredited courses from foundation to Lead Auditor level.</p>
              <a href="https://tidd.ly/4973Hxg" target="_blank" rel="noopener noreferrer"
                 className="text-gold text-xs font-semibold hover:text-gold-dark">Browse courses →</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
