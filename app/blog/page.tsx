import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  // Get files from the posts directory
  const postsDirectory = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDirectory);

  // Get posts data
  const posts = files.map((filename) => {
    // Read markdown file as string
    const markdownWithMeta = fs.readFileSync(
      path.join(postsDirectory, filename),
      'utf-8'
    );

    // Parse markdown metadata and content
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      frontmatter,
      slug: filename.replace('.md', ''),
    };
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Blog Posts</h1>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </Link>
        </div>
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <article className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.frontmatter.title}
                </h2>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <span className="text-sm">
                    {formatDate(post.frontmatter.date)}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{post.frontmatter.author}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {post.frontmatter.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 