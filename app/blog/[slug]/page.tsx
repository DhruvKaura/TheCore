import {
  notFound,
} from "next/navigation";

import BlogArticleClient from "@/components/sections/blog/BlogArticleClient";

import {
  blogs,
  getBlogBySlug,
} from "@/data/blogs";

export function generateStaticParams() {
  return blogs.map(
    (blog) => ({
      slug: blog.slug,
    })
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const {
    slug,
  } = await params;

  const blog =
    getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const related =
    blogs.filter(
      (item) =>
        item.slug !== blog.slug
    );

  return (
    <BlogArticleClient
      blog={blog}
      related={related}
    />
  );
}