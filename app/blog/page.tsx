import Link from "next/link";
import { getSortedBlogsData } from "@/lib/blog";
import { BlogData } from "@/lib/blog";

async function getData() {
  return getSortedBlogsData();
}


export default async function Blog() {
  const allBlogsData: BlogData[] = await getData();

  return (
    <main className="container mx-auto p-4 py-24">
      <ul>
        {allBlogsData.map(({ slug, date, title, tags }) => (
          <li key={slug} className="mb-4">
            <Link href={`/blog/${slug}`}>
              {title}
            </Link>
            <p className="text-gray-600">{date}</p>
            <p className="text-gray-600">Tags: {tags.join(", ")}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

