"use client";

import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const lineOne = "One technology partner.";
const lineTwo = "Everything digital.";

function AnimatedLine({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={`services-hero__line ${className}`}
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="services-hero__char"
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default function ServicesHero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const chars =
        gsap.utils.toArray<HTMLElement>(
          ".services-hero__char"
        );

      const description =
        heroRef.current?.querySelector(
          ".services-hero__description"
        );

      const image =
        heroRef.current?.querySelectorAll(
          ".services-hero__image"
        );

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
        "-=0.15"
      );

      gsap.fromTo(
        image,
        {
          scale: 1.045,
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
      className="services-hero"
    >
      {/* DESKTOP IMAGE */}

      <Image
        src="/images/services/services-hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="services-hero__image services-hero__image--desktop"
      />

      {/* MOBILE IMAGE */}

      <Image
        src="/images/services/services-hero-mobile.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="services-hero__image services-hero__image--mobile"
      />

      {/* OVERLAY */}

      <div className="services-hero__overlay" />

      {/* SUBTLE CORE BLUE GLOW */}

      <div className="services-hero__glow" />

      {/* CONTENT */}

      <div className="services-hero__content">
        <h1 className="services-hero__title">
          <AnimatedLine text={lineOne} />

          <AnimatedLine
            text={lineTwo}
            className="services-hero__line--accent"
          />
        </h1>

        <p className="services-hero__description">
          Strategy, design, engineering, software and digital growth
          <br className="services-hero__desktop-break" />
          {" "}
          — brought together to build what your business needs next.
        </p>
      </div>
    </section>
  );
}