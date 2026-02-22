import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { mdxComponents } from "@/components/MdxComponents";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  if (process.env.NODE_ENV === "production" && post.frontmatter.draft) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <Link
        href="/"
        className="inline-block text-sm text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
      >
        ← Back
      </Link>
      <div className="prose prose-stone dark:prose-invert prose-lg">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
