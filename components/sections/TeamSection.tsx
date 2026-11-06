"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const revealText =
  "Dhruv leads the technology, engineering and digital execution behind what we build.";

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const infoCardRef = useRef<HTMLDivElement | null>(null);
  const revealCardRef = useRef<HTMLDivElement | null>(null);

  const isOpenRef = useRef(false);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(
    () => {
      const revealChars =
        gsap.utils.toArray<HTMLElement>(
          ".team-section__reveal-char"
        );

      gsap.set(revealCardRef.current, {
        autoAlpha: 0,
        y: 14,
      });

      gsap.set(revealChars, {
        opacity: 0,
        y: 7,
        filter: "blur(4px)",
      });
    },
    {
      scope: sectionRef,
    }
  );

  const canHover = () => {
    return window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
  };

  const getLiftDistance = () => {
    if (window.innerWidth <= 767) {
      return -82;
    }

    return -86;
  };

  const openCard = () => {
    if (isOpenRef.current) return;

    isOpenRef.current = true;
    setIsOpen(true);

    const chars =
      sectionRef.current?.querySelectorAll(
        ".team-section__reveal-char"
      );

    gsap.killTweensOf([
      infoCardRef.current,
      revealCardRef.current,
      chars,
    ]);

    gsap.to(infoCardRef.current, {
      y: getLiftDistance(),
      duration: 0.68,
      ease: "power3.out",
    });

    gsap.to(revealCardRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.4,
      ease: "power3.out",
    });

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
        duration: 0.4,
        stagger: {
          each: 0.014,
          from: "start",
        },
        ease: "power3.out",
        delay: 0.07,
      }
    );
  };

  const closeCard = () => {
    if (!isOpenRef.current) return;

    isOpenRef.current = false;
    setIsOpen(false);

    const chars =
      sectionRef.current?.querySelectorAll(
        ".team-section__reveal-char"
      );

    gsap.killTweensOf([
      infoCardRef.current,
      revealCardRef.current,
      chars,
    ]);

    gsap.to(chars, {
      opacity: 0,
      y: 6,
      filter: "blur(4px)",
      duration: 0.2,
      stagger: {
        each: 0.005,
        from: "end",
      },
      ease: "power2.in",
    });

    gsap.to(revealCardRef.current, {
      autoAlpha: 0,
      y: 14,
      duration: 0.3,
      ease: "power2.inOut",
    });

    gsap.to(infoCardRef.current, {
      y: 0,
      duration: 0.65,
      ease: "power3.inOut",
      delay: 0.03,
    });
  };

  const handleMouseEnter = () => {
    if (!canHover()) return;

    openCard();
  };

  const handleMouseLeave = () => {
    if (!canHover()) return;

    closeCard();
  };

  const handleClick = () => {
    if (canHover()) return;

    if (isOpenRef.current) {
      closeCard();
    } else {
      openCard();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="team-section"
      id="team"
    >
      <div className="team-section__container">

        {/* HEADING */}

        <h2 className="team-section__heading">
          The Core is built by
          <br />
          people who care.
        </h2>

        {/* TEAM GRID */}

        <div className="team-section__grid">

          <button
            type="button"
            className="team-section__member"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            aria-expanded={isOpen}
            aria-label="Learn more about Dhruv Kaura"
          >

            {/* PORTRAIT */}

            <Image
              src="/images/team/cto.webp"
              alt="Dhruv Kaura, Chief Technology Officer"
              fill
              sizes="(max-width: 767px) 100vw, 390px"
              className="team-section__image"
            />

            {/* INFO CARD */}

            <div
              ref={infoCardRef}
              className="team-section__info-card"
            >
              <h3>
                Dhruv Kaura
              </h3>

              <p>
                Chief Technology Officer
              </p>
            </div>

            {/* REVEAL CARD */}

            <div
              ref={revealCardRef}
              className="team-section__reveal-card"
            >
              <p aria-label={revealText}>
                {revealText
                  .split(" ")
                  .map(
                    (
                      word,
                      wordIndex
                    ) => (
                      <span
                        className="team-section__reveal-word"
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
                                className="team-section__reveal-char"
                                key={`${char}-${charIndex}`}
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
            </div>

          </button>

        </div>

      </div>
    </section>
  );
}