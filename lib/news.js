import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'news');

function ensureDir() {
  if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
}

export function getNewsArticles() {
  ensureDir();
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));
  return files
    .map(filename => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf8');
      const { data, content } = matter(raw);
      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title ?? 'Untitled',
        date: data.date ?? '',
        excerpt: data.excerpt ?? content.slice(0, 180).replace(/\n/g, ' ') + '…',
        tag: data.tag ?? null,
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug) {
  ensureDir();
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? 'Untitled',
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    tag: data.tag ?? null,
    content,
  };
}
