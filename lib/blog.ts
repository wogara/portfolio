import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export interface BlogData {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  contentHtml?: string; // Make contentHtml optional for cases where it's not needed
}

export function getAllBlogSlugs() {
  const filenames = fs.readdirSync(blogsDirectory);
  return filenames.map((filename) => {
    return {
      slug: filename.replace(/\.md$/, ''),
    };
  });
}

export async function getBlogData(slug: string): Promise<BlogData> {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html, {sanitize:false}).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    tags: matterResult.data.tags,
  };
}

export function getSortedBlogsData(): Omit<BlogData, 'contentHtml'>[] {
  const filenames = fs.readdirSync(blogsDirectory);
  const allBlogsData = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const fullPath = path.join(blogsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      tags: matterResult.data.tags,
    };
  });

  return allBlogsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

