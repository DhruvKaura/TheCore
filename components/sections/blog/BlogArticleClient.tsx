"use client";

import Image from "next/image";
import Link from "next/link";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import type {
  BlogPost,
} from "@/data/blogs";

import RelatedArticles from "./RelatedArticles";

import ContactProject from "@/components/sections/ContactProject";

gsap.registerPlugin(
  ScrollTrigger,
  useGSAP
);

type Props = {
  blog: BlogPost;
  related: BlogPost[];
};

export default function BlogArticleClient({
  blog,
  related,
}: Props) {
  const pageRef =
    useRef<HTMLElement | null>(null);

  const [activeSection, setActiveSection] =
    useState(
      blog.sections[0]?.id ?? ""
    );

  /* =========================================
     PARALLAX IMAGE
  ========================================= */

  useGSAP(
    () => {
      const wrapper =
        pageRef.current?.querySelector(
          ".single-blog__hero-image"
        );

      const image =
        pageRef.current?.querySelector(
          ".single-blog__hero-image img"
        );

      if (!wrapper || !image) return;

      gsap.fromTo(
        image,
        {
          yPercent: -6,
          scale: 1.08,
        },
        {
          yPercent: 6,
          scale: 1.08,

          ease: "none",

          scrollTrigger: {
            trigger: wrapper,

            start: "top bottom",

            end: "bottom top",

            scrub: true,
          },
        }
      );
    },
    {
      scope: pageRef,
    }
  );

  /* =========================================
     ACTIVE TABLE OF CONTENTS
  ========================================= */

  useEffect(() => {
    const sections =
      blog.sections
        .map((section) =>
          document.getElementById(
            section.id
          )
        )
        .filter(
          (
            section
          ): section is HTMLElement =>
            Boolean(section)
        );

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visible =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  a.boundingClientRect
                    .top -
                  b.boundingClientRect
                    .top
              );

          if (visible[0]) {
            setActiveSection(
              visible[0]
                .target
                .id
            );
          }
        },
        {
          rootMargin:
            "-20% 0px -65% 0px",

          threshold: 0,
        }
      );

    sections.forEach(
      (section) =>
        observer.observe(
          section
        )
    );

    return () =>
      observer.disconnect();
  }, [blog.sections]);

  const scrollToSection = (
    id: string
  ) => {
    const target =
      document.getElementById(id);

    if (!target) return;

    const offset = 110;

    const y =
      target
        .getBoundingClientRect()
        .top +
      window.scrollY -
      offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <main
      ref={pageRef}
      className="single-blog"
    >

      {/* =====================================
          HERO
      ===================================== */}

      <section className="single-blog__intro">

        <div className="single-blog__container">

          <div className="single-blog__topline">

            <span className="single-blog__category">
              {blog.category}
            </span>

            <Link
              href="/blog"
              className="single-blog__back"
            >
              Back to Blog
              <span>↗</span>
            </Link>

          </div>

          <h1>
            {blog.title}
          </h1>

          <p className="single-blog__excerpt">
            {blog.excerpt}
          </p>

          <div className="single-blog__info">
            <span>
              {blog.date}
            </span>

            <span>
              {blog.readTime}
            </span>
          </div>

          <div className="single-blog__hero-image">

            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              sizes="100vw"
            />

          </div>

        </div>

      </section>

      {/* =====================================
          ARTICLE
      ===================================== */}

      <section className="single-blog__article">

        <div className="single-blog__container">

          <div className="single-blog__article-grid">

            {/* TABLE OF CONTENTS */}

            <aside className="single-blog__sidebar">

              <div className="single-blog__toc">

                <div className="single-blog__toc-title">
                  <span>
                    ☷
                  </span>

                  Table of contents
                </div>

                <nav>
                  {blog.sections.map(
                    (
                      section,
                      index
                    ) => (
                      <button
                        key={
                          section.id
                        }
                        type="button"
                        onClick={() =>
                          scrollToSection(
                            section.id
                          )
                        }
                        className={
                          activeSection ===
                          section.id
                            ? "single-blog__toc-link single-blog__toc-link--active"
                            : "single-blog__toc-link"
                        }
                      >
                        <span>
                          {String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        {
                          section.title
                        }
                      </button>
                    )
                  )}
                </nav>

                <div className="single-blog__toc-cta">

                  <p>
                    Have a project
                    you&apos;d like to
                    discuss?
                  </p>

                  <a
                    href="#contact"
                  >
                    Start a conversation
                  </a>

                </div>

              </div>

            </aside>

            {/* ARTICLE BODY */}

            <article className="single-blog__body">

              {blog.sections.map(
                (section) => (
                  <section
                    id={section.id}
                    key={section.id}
                    className="single-blog__content-section"
                  >
                    <h2>
                      {
                        section.title
                      }
                    </h2>

                    {section.paragraphs.map(
                      (
                        paragraph,
                        index
                      ) => (
                        <p
                          key={index}
                        >
                          {
                            paragraph
                          }
                        </p>
                      )
                    )}
                  </section>
                )
              )}

            </article>

          </div>

        </div>

      </section>

      <RelatedArticles
        blogs={related}
      />

      <ContactProject />

    </main>
  );
}