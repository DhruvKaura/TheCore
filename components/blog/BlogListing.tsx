"use client";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import BlogCard from "../sections/blog/BlogCard";
import { blogs } from "@/data/blogs";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function BlogListing() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const cards =
        gsap.utils.toArray<HTMLElement>(
          ".blog-listing__item"
        );

      gsap.set(cards, {
        opacity: 0,
        y: 32,
        filter: "blur(4px)",
      });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",

        duration: 0.8,

        stagger: 0.1,

        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="blog-listing"
    >
      <div className="blog-listing__container">

        <div className="blog-listing__grid">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="blog-listing__item"
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}