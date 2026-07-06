import Link from 'next/link';
import { getRelatedInsights } from '../lib/insights';

export default function RelatedInsights({ tag, limit = 3 }) {
  const articles = getRelatedInsights(tag, limit);

  if (!articles.length) return null;

  return (
    <div className="card">
      <h3 className="font-bold text-navy mb-2 text-sm">Related Insights</h3>
      <ul className="space-y-2">
        {articles.map(article => (
          <li key={article.slug}>
            <Link
              href={`/insights/${article.slug}`}
              className="text-gold hover:text-gold-dark text-xs leading-snug block"
            >
              {article.title} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
