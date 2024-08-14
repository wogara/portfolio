import { getAllBlogSlugs, getBlogData, BlogData } from "@/lib/blog";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

async function getData(slug: string) {
  return await getBlogData(slug);
}

export default async function BlogPost({ params }: BlogPostProps) {
  const blogData: BlogData = await getData(params.slug);

  console.log(blogData);

  if (!blogData.contentHtml) {
    return (
      <main className="container mx-auto p-4">
        <h1 className="text-4xl mb-4">Content not found</h1>
      </main>
    );
  }
  return (
    <main className="container mx-auto p-4 py-24">
      <h1 className="mb-4 text-center">{blogData.title}</h1>
      <p className="text-text text-center">{blogData.date}</p>
      <p className="text-text text-center">Tags: {blogData.tags.join(", ")}</p>
      <div
        className="prose mx-auto"
        dangerouslySetInnerHTML={{ __html: blogData.contentHtml as string }}
      />
    </main>
  );
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug.slug,
  }));
}
