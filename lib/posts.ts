import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export interface PostFrontmatter {
  title: string;
  date: string;
  tags: string[];
  draft?: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

function getSlug(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR);
  return files
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => getSlug(f));
}

export function getPostBySlug(slug: string): Post | null {
  const extensions = [".mdx", ".md"];
  for (const ext of extensions) {
    const filePath = path.join(POSTS_DIR, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        frontmatter: data as PostFrontmatter,
        content,
      };
    }
  }
  return null;
}

export function getAllPosts(): Post[] {
  const slugs = getAllSlugs();
  const posts: Post[] = [];
  for (const slug of slugs) {
    const post = getPostBySlug(slug);
    if (!post) continue;
    if (process.env.NODE_ENV === "production" && post.frontmatter.draft) {
      continue;
    }
    posts.push(post);
  }
  posts.sort((a, b) => {
    const d1 = new Date(a.frontmatter.date).getTime();
    const d2 = new Date(b.frontmatter.date).getTime();
    return d2 - d1;
  });
  return posts;
}
