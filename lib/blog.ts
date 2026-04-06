import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

const contentDir = path.join(process.cwd(), 'content/blog');

export function getPostSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));
}

export function getPostBySlug(slug: string): BlogPostMeta | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(contentDir, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
  return {
    slug: realSlug,
    title: data.title ?? '',
    description: data.description ?? '',
    date: data.date ?? '',
    tags: data.tags ?? [],
  };
}

export async function getPostWithContent(slug: string): Promise<BlogPost | null> {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(contentDir, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'));
  const processed = await remark().use(remarkHtml).process(content);
  return {
    slug: realSlug,
    title: data.title ?? '',
    description: data.description ?? '',
    date: data.date ?? '',
    tags: data.tags ?? [],
    content: processed.toString(),
  };
}

export function getAllPosts(): BlogPostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPostMeta => p !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
