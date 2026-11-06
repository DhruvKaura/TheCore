"use client";

import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const headingLineOne = "Ideas that move";
const headingLineTwo = "technology forward.";

function AnimatedLine({
  text,
}: {
  text: string;
}) {
  return (
    <span
      className="blog-hero__animated-line"
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="blog-hero__char"
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default function BlogHero() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const chars =
        gsap.utils.toArray<HTMLElement>(
          ".blog-hero__char"
        );

      const description =
        sectionRef.current.querySelector(
          ".blog-hero__description"
        );

      const images =
        sectionRef.current.querySelectorAll(
          ".blog-hero__image"
        );

      /* INITIAL STATE */

      gsap.set(chars, {
        opacity: 0,
        y: 14,
        filter: "blur(5px)",
      });

      gsap.set(description, {
        opacity: 0,
        y: 14,
        filter: "blur(4px)",
      });

      gsap.set(images, {
        scale: 1.04,
      });

      /* MAIN TIMELINE */

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(chars, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.48,

        stagger: {
          each: 0.018,
          from: "start",
        },
      });

      tl.to(
        description,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
        },
        "-=0.12"
      );

      gsap.to(images, {
        scale: 1,
        duration: 2.2,
        ease: "power2.out",
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="blog-hero"
    >
      {/* =====================================
          DESKTOP IMAGE
      ===================================== */}

      <Image
        src="/images/blog/blog-hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="
          blog-hero__image
          blog-hero__image--desktop
        "
      />

      {/* =====================================
          MOBILE IMAGE
      ===================================== */}

      <Image
        src="/images/blog/blog-hero-mobile.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="
          blog-hero__image
          blog-hero__image--mobile
        "
      />

      {/* DARK OVERLAY */}

      <div className="blog-hero__overlay" />

      {/* SUBTLE BLUE GLOW */}

      <div className="blog-hero__glow" />

      {/* =====================================
          CONTENT
      ===================================== */}

      <div className="blog-hero__content">

        <h1 className="blog-hero__title">
          <AnimatedLine
            text={headingLineOne}
          />

          <br />

          <AnimatedLine
            text={headingLineTwo}
          />
        </h1>

        <p className="blog-hero__description">
          Insights on software, design, digital products,
          AI and the systems shaping modern businesses.
        </p>

      </div>
    </section>
  );
}