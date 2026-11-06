import Link from "next/link";

import BlogCard from "./BlogCard";

import type {
  BlogPost,
} from "@/data/blogs";

type Props = {
  blogs: BlogPost[];
};

export default function RelatedArticles({
  blogs,
}: Props) {
  return (
    <section className="related-articles">

      <div className="related-articles__container">

        <div className="related-articles__header">

          <h2>
            Keep exploring —
            <br />
            there&apos;s more to discover.
          </h2>

          <Link
            href="/blog"
            className="related-articles__button"
          >
            See all articles
          </Link>

        </div>

        <div className="related-articles__grid">

          {blogs
            .slice(0, 2)
            .map((blog) => (
              <BlogCard
                blog={blog}
                key={blog.slug}
              />
            ))}

        </div>

      </div>

    </section>
  );
}