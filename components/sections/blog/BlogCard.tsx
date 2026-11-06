"use client";

import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useRef, useState } from "react";

import gsap from "gsap";

import type { BlogPost } from "@/data/blogs";

type Props = {
  blog: BlogPost;
};

export default function BlogCard({
  blog,
}: Props) {
  const infoCardRef =
    useRef<HTMLDivElement | null>(null);

  const revealCardRef =
    useRef<HTMLDivElement | null>(null);

  const isOpenRef =
    useRef(false);

  const [isOpen, setIsOpen] =
    useState(false);

  const canHover = () => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
  };

  const getRevealChars = () => {
    return revealCardRef.current
      ?.querySelectorAll<HTMLElement>(
        ".blog-card__reveal-char"
      ) ?? [];
  };

  const openCard = () => {
    if (isOpenRef.current) return;

    isOpenRef.current = true;

    setIsOpen(true);

    const chars =
      getRevealChars();

    gsap.killTweensOf([
      infoCardRef.current,
      revealCardRef.current,
      chars,
    ]);

    /*
     * Main title card moves upward.
     */
    gsap.to(
      infoCardRef.current,
      {
        y: -98,

        duration: 0.68,

        ease: "power3.out",
      }
    );

    /*
     * Bottom description card appears.
     */
    gsap.fromTo(
      revealCardRef.current,
      {
        autoAlpha: 0,
        y: 14,
      },
      {
        autoAlpha: 1,
        y: 0,

        duration: 0.4,

        ease: "power3.out",
      }
    );

    /*
     * Same character reveal used
     * on Founder / CTO cards.
     */
    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 7,
        filter: "blur(4px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",

        duration: 0.38,

        stagger: {
          each: 0.008,
          from: "start",
        },

        ease: "power3.out",

        delay: 0.08,
      }
    );
  };

  const closeCard = () => {
    if (!isOpenRef.current) return;

    isOpenRef.current = false;

    setIsOpen(false);

    const chars =
      getRevealChars();

    gsap.killTweensOf([
      infoCardRef.current,
      revealCardRef.current,
      chars,
    ]);

    gsap.to(
      chars,
      {
        opacity: 0,
        y: 6,
        filter: "blur(4px)",

        duration: 0.18,

        stagger: {
          each: 0.002,
          from: "end",
        },

        ease: "power2.in",
      }
    );

    gsap.to(
      revealCardRef.current,
      {
        autoAlpha: 0,
        y: 14,

        duration: 0.28,

        ease: "power2.inOut",
      }
    );

    gsap.to(
      infoCardRef.current,
      {
        y: 0,

        duration: 0.64,

        ease: "power3.inOut",
      }
    );
  };

  const handleMouseEnter = () => {
    if (!canHover()) return;

    openCard();
  };

  const handleMouseLeave = () => {
    if (!canHover()) return;

    closeCard();
  };

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    /*
     * Desktop:
     * normal click opens the article.
     */
    if (canHover()) return;

    /*
     * Mobile:
     * first tap opens interaction.
     */
    if (!isOpenRef.current) {
      event.preventDefault();

      openCard();

      return;
    }

    /*
     * Second tap:
     * allow Link navigation.
     */
  };

  return (
    <Link
      href={`/blog/${blog.slug}`}
      className={`blog-card ${
        isOpen
          ? "blog-card--open"
          : ""
      }`}
      onMouseEnter={
        handleMouseEnter
      }
      onMouseLeave={
        handleMouseLeave
      }
      onClick={
        handleClick
      }
      aria-label={`Read ${blog.title}`}
    >
      {/* IMAGE */}

      <Image
        src={blog.image}
        alt={blog.title}
        fill
        sizes="(max-width: 767px) 100vw, 50vw"
        className="blog-card__image"
      />

      <div className="blog-card__image-overlay" />

      {/* =====================================
          MAIN CARD
      ===================================== */}

      <div
        ref={infoCardRef}
        className="blog-card__panel"
      >
        <div className="blog-card__meta">

          <span>
            {blog.date}
          </span>

          <span className="blog-card__category">
            {blog.category}
          </span>

        </div>

        <h3>
          {blog.title}
        </h3>

      </div>

      {/* =====================================
          REVEAL CARD
      ===================================== */}

      <div
        ref={revealCardRef}
        className="blog-card__reveal"
      >
        <p
          aria-label={
            blog.excerpt
          }
        >
          {blog.excerpt
            .split(" ")
            .map(
              (
                word,
                wordIndex
              ) => (
                <span
                  className="blog-card__reveal-word"
                  key={`${word}-${wordIndex}`}
                >
                  {word
                    .split("")
                    .map(
                      (
                        char,
                        charIndex
                      ) => (
                        <span
                          key={`${char}-${charIndex}`}
                          className="blog-card__reveal-char"
                          aria-hidden="true"
                        >
                          {char}
                        </span>
                      )
                    )}
                </span>
              )
            )}
        </p>

        <span className="blog-card__reveal-link">
          Read article
          <span>
            ↗
          </span>
        </span>

      </div>

    </Link>
  );
}
