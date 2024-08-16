import Link from "next/link";
import { getSortedBlogsData } from "@/lib/blog";
import { BlogData } from "@/lib/blog";

async function getData() {
  return getSortedBlogsData();
}

export default async function Blog() {
  const allBlogsData: BlogData[] = await getData();

  return (
    <main className="container mx-auto p-6 py-24">
      <h1 className="text-4xl font-bold text-text text-center mb-8">Blog</h1>
      <ul className="space-y-8">
        {allBlogsData.map(({ slug, date, title, tags }) => (
          <li key={slug} className="p-6 bg-peach rounded-lg shadow-md">
            <Link href={`/blog/${slug}`}>
                {title}
            </Link>
            <p className="text-text mt-2">{new Date(date).toLocaleDateString()}</p>
            <p className="text-text mt-1">
              <span className="font-semibold">Tags:</span> {tags.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

