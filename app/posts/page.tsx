import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-10">
      <section>
        <h1 className="font-serif text-2xl font-medium text-stone-900 dark:text-stone-100 mb-1">
          Posts
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          All posts, newest first.
        </p>
      </section>

      <section>
        <ul className="space-y-4">
          {posts.length === 0 ? (
            <li className="text-sm text-stone-500 dark:text-stone-400">
              No posts yet.
            </li>
          ) : (
            posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}`} className="block group">
                  <span className="font-serif text-stone-900 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                    {post.frontmatter.title}
                  </span>
                  <span className="block text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    {post.frontmatter.date}
                    {post.frontmatter.tags?.length ? (
                      <> · {post.frontmatter.tags.join(", ")}</>
                    ) : null}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
}
