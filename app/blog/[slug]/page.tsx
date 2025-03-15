import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

async function getPostContent(slug: string) {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), 'posts', `${slug}.md`),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    frontmatter,
    contentHtml,
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'));
  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { frontmatter, contentHtml } = await getPostContent(params.slug);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <article className="max-w-3xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {frontmatter.title}
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <span className="text-sm">
              {formatDate(frontmatter.date)}
            </span>
            <span className="mx-2">•</span>
            <span className="text-sm">{frontmatter.author}</span>
          </div>
        </header>
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
} 