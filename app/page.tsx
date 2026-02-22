import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug } from "@/lib/posts";
import { mdxComponents } from "@/components/MdxComponents";

export default function HomePage() {
  const post = getPostBySlug("about");
  if (!post) notFound();
  if (process.env.NODE_ENV === "production" && post.frontmatter.draft) {
    notFound();
  }

  return (
    <article>
      <div className="prose prose-stone dark:prose-invert prose-lg">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
