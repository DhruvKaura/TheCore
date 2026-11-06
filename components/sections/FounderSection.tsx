"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const revealText =
  "Gurdeep leads the vision, strategy and technology behind everything we build.";

const clients = [
  "/images/clients/client-01.webp",
  "/images/clients/client-02.webp",
  "/images/clients/client-03.webp",
];

export default function FounderSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const founderCardRef = useRef<HTMLDivElement | null>(null);
  const revealCardRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  useGSAP(
    () => {
      const revealChars = gsap.utils.toArray<HTMLElement>(
        ".founder-reveal__char",
      );

      gsap.set(revealCardRef.current, {
        autoAlpha: 0,
        y: 18,
      });

      gsap.set(revealChars, {
        opacity: 0,
        y: 8,
        filter: "blur(4px)",
      });
    },
    {
      scope: sectionRef,
    },
  );

  const canHover = () => {
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  };

  const getLiftDistance = () => {
    if (window.innerWidth <= 767) {
      return -84;
    }

    return -88;
  };

  const openFounderCard = () => {
    if (isOpen) return;

    setIsOpen(true);

    const chars = sectionRef.current?.querySelectorAll(".founder-reveal__char") ?? [];

    gsap.killTweensOf([founderCardRef.current, revealCardRef.current, chars]);

    gsap.to(founderCardRef.current, {
      y: getLiftDistance(),

      duration: 0.68,

      ease: "power3.out",
    });

    gsap.to(revealCardRef.current, {
      autoAlpha: 1,
      y: 0,

      duration: 0.42,

      ease: "power3.out",
    });

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 8,
        filter: "blur(4px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",

        duration: 0.42,

        ease: "power3.out",

        stagger: {
          each: 0.015,
          from: "start",
        },

        delay: 0.08,
      },
    );
  };

  const closeFounderCard = () => {
    if (!isOpen) return;

    setIsOpen(false);

    const chars = sectionRef.current?.querySelectorAll(".founder-reveal__char") ?? [];

    gsap.killTweensOf([founderCardRef.current, revealCardRef.current, chars]);

    gsap.to(chars, {
      opacity: 0,
      y: 6,
      filter: "blur(4px)",

      duration: 0.22,

      stagger: {
        each: 0.006,
        from: "end",
      },

      ease: "power2.in",
    });

    gsap.to(revealCardRef.current, {
      autoAlpha: 0,
      y: 15,

      duration: 0.35,

      ease: "power2.inOut",
    });

    gsap.to(founderCardRef.current, {
      y: 0,

      duration: 0.68,

      ease: "power3.inOut",

      delay: 0.04,
    });
  };

  const handleMouseEnter = () => {
    if (!canHover()) return;

    openFounderCard();
  };

  const handleMouseLeave = () => {
    if (!canHover()) return;

    closeFounderCard();
  };

  const handleClick = () => {
    /*
     * Desktop uses hover.
     * Mobile/tablet uses tap.
     */
    if (canHover()) return;

    if (isOpen) {
      closeFounderCard();
    } else {
      openFounderCard();
    }
  };

  return (
    <section ref={sectionRef} className="founder-section">
      <div className="founder-section__inner">
        <div className="founder-section__grid">
          {/* =========================================
              LEFT — FOUNDER
          ========================================= */}

          <button
            type="button"
            className="founder-section__media"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            aria-expanded={isOpen}
            aria-label="Learn more about Gurdeep Kumar"
          >
            <Image
              src="/images/founder/gurdeep-kumar.webp"
              alt="Gurdeep Kumar, Founder and CEO of The Core Technology"
              fill
              sizes="(max-width: 767px) 100vw, 45vw"
              className="founder-section__portrait"
            />

            {/* MAIN FOUNDER CARD */}

            <div ref={founderCardRef} className="founder-card">
              <h3>Hi, I am Gurdeep Kumar</h3>

              <p>Founder &amp; CEO, The Core Technology</p>
            </div>

            {/* REVEAL CARD */}

            <div ref={revealCardRef} className="founder-reveal">
              <p aria-label={revealText}>
                {revealText.split(" ").map((word, wordIndex) => (
                  <span
                    className="founder-reveal__word"
                    key={`${word}-${wordIndex}`}
                  >
                    {word.split("").map((character, charIndex) => (
                      <span
                        className="founder-reveal__char"
                        key={`${character}-${charIndex}`}
                        aria-hidden="true"
                      >
                        {character}
                      </span>
                    ))}
                  </span>
                ))}
              </p>
            </div>
          </button>

          {/* =========================================
              RIGHT — COMPANY
          ========================================= */}

          <div className="founder-section__company">
            <div className="founder-section__company-copy">
              <div className="founder-section__logo">
                <Image
                  src="/images/logo/core-logo-dark.webp"
                  alt="The Core Technology"
                  width={1200}
                  height={300}
                  sizes="(max-width: 767px) 230px, 290px"
                  priority={false}
                />
              </div>

              <p>
                We bring strategy, design, engineering and automation together
                to build digital products, platforms and experiences that are
                clear, scalable and built to perform.
              </p>
            </div>

            {/* TRUST AREA */}

            <div className="founder-section__trust">
              <div className="founder-section__avatars">
                {clients.map((client, index) => (
                  <div className="founder-section__avatar" key={client}>
                    <Image
                      src={client}
                      alt={`Client ${index + 1}`}
                      width={80}
                      height={80}
                      sizes="38px"
                    />
                  </div>
                ))}
              </div>

              <div className="founder-section__trust-copy">
                <div className="founder-section__stars" aria-label="5 stars">
                  ★★★★★
                </div>

                <p>Trusted by clients worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
