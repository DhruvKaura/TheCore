import Link from "next/link";

import { blogs } from "@/data/blogs";

import BlogCard from "./blog/BlogCard";

export default function BlogPreview() {
  return (
    <section
      className="blog-preview"
      id="insights"
    >
      <div className="blog-preview__container">

        <div className="blog-preview__header">

          <h2>
            Ideas, insights,
            <br />
            and perspectives.
          </h2>

          <Link
            href="/blog"
            className="blog-preview__button"
          >
            <span>
              See all articles
            </span>
          </Link>

        </div>

        <div className="blog-preview__grid">
          {blogs
            .slice(0, 2)
            .map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
              />
            ))}
        </div>

      </div>
    </section>
  );
}