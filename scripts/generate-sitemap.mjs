import { writeFileSync, readFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

const SITE_URL = "https://rizalanggoro.my.id";
const blogsDir = join(process.cwd(), "content/blogs");
const outputPath = join(process.cwd(), "public", "sitemap.xml");

const posts = [];

if (existsSync(blogsDir)) {
  const files = readdirSync(blogsDir).filter(
    (f) => f.endsWith(".mdx") || f.endsWith(".md")
  );
  for (const file of files) {
    const slug = file.replace(/\.mdx?$/, "");
    const raw = readFileSync(join(blogsDir, file), "utf8");
    const { data } = matter(raw);
    posts.push({ slug, date: data.date || new Date().toISOString() });
  }
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

const staticUrls = [
  { loc: "/", priority: "1.0" },
  { loc: "/projects", priority: "0.9" },
  { loc: "/blogs", priority: "0.8" },
];

for (const u of staticUrls) {
  xml += `  <url>\n    <loc>${SITE_URL}${u.loc}</loc>\n    <priority>${u.priority}</priority>\n  </url>\n`;
}

for (const p of posts) {
  xml += `  <url>\n    <loc>${SITE_URL}/blogs/${p.slug}</loc>\n    <priority>0.7</priority>\n    <lastmod>${new Date(p.date).toISOString().split("T")[0]}</lastmod>\n  </url>\n`;
}

xml += `</urlset>\n`;

writeFileSync(outputPath, xml, "utf8");
console.log(`✓ sitemap.xml generated (${staticUrls.length + posts.length} urls)`);
