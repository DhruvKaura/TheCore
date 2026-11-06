"use client";

import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const headingText = "The Core Technology";

function AnimatedText({
  text,
}: {
  text: string;
}) {
  return (
    <span
      className="about-hero__animated-line"
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="about-hero__char"
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default function AboutHero() {
  const heroRef =
    useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const root = heroRef.current;
      if (!root) return;

      const chars =
        gsap.utils.toArray<HTMLElement>(
          ".about-hero__char"
        );

      const description =
        root.querySelectorAll(
          ".about-hero__description"
        );

      const images =
        root.querySelectorAll(
          ".about-hero__image"
        );

      /* INITIAL STATES */

      gsap.set(chars, {
        opacity: 0,
        y: 12,
        filter: "blur(5px)",
      });

      gsap.set(description, {
        opacity: 0,
        y: 12,
        filter: "blur(4px)",
      });

      /* MAIN TEXT TIMELINE */

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(chars, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",

        duration: 0.5,

        stagger: {
          each: 0.025,
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

      /* SUBTLE IMAGE SETTLING */

      gsap.fromTo(
        images,
        {
          scale: 1.04,
        },
        {
          scale: 1,

          duration: 2.2,

          ease: "power2.out",
        }
      );
    },
    {
      scope: heroRef,
    }
  );

  return (
    <section
      ref={heroRef}
      className="about-hero"
    >
      {/* =====================================
          DESKTOP IMAGE
      ===================================== */}

      <Image
        src="/images/about/about-hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="
          about-hero__image
          about-hero__image--desktop
        "
      />

      {/* =====================================
          MOBILE IMAGE
      ===================================== */}

      <Image
        src="/images/about/about-hero-mobile.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="
          about-hero__image
          about-hero__image--mobile
        "
      />

      {/* =====================================
          DARK OVERLAY
      ===================================== */}

      <div className="about-hero__overlay" />

      {/* =====================================
          SUBTLE BLUE GLOW
      ===================================== */}

      <div className="about-hero__glow" />

      {/* =====================================
          CONTENT
      ===================================== */}

      <div className="about-hero__content">

        <h1 className="about-hero__title">
          <AnimatedText
            text={headingText}
          />
        </h1>

        <p className="about-hero__description">
          We build digital products, systems and experiences
          with clarity, care and technical depth
          <br className="about-hero__desktop-break" />
          {" "}
          — combining strategy, design and engineering
          under one roof.
        </p>

      </div>
    </section>
  );
}
