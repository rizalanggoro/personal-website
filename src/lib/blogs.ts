import { createServerFn } from "@tanstack/react-start";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string;
}

function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }
  const files = fs.readdirSync(blogsDirectory);
  return files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

function getBlogPostBySlug(slug: string): BlogPost | null {
  const mdxPath = path.join(blogsDirectory, `${slug}.mdx`);
  const mdPath = path.join(blogsDirectory, `${slug}.md`);

  let filePath = mdxPath;
  if (!fs.existsSync(mdxPath)) {
    if (fs.existsSync(mdPath)) {
      filePath = mdPath;
    } else {
      return null;
    }
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString(),
    readTime: data.readTime || "5 min read",
    category: data.category || "General",
    excerpt: data.excerpt || "",
    content,
  };
}

function getAllBlogPosts(): BlogPost[] {
  const slugs = getAllBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export const getBlogPosts = createServerFn({ method: "GET" }).handler(
  () => getAllBlogPosts()
);

export const getBlogPost = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(({ data }) => getBlogPostBySlug(data));
