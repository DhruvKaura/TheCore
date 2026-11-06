"use client";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const statement =
  "We turn ambitious ideas into powerful digital products, combining strategy, design, engineering and automation to build experiences that move businesses forward.";

export default function ScrollStatement() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const chars =
        gsap.utils.toArray<HTMLElement>(
          ".scroll-statement__char",
        );

      /*
       * Initial state:
       * text is already visible.
       * There is NO entrance animation.
       */
      gsap.set(chars, {
        color: "rgba(255, 255, 255, 0.18)",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top top",

          /*
           * Controls how much scrolling is required
           * to completely fill the text.
           */
          end: "+=190%",

          scrub: 0.7,

          pin: true,

          pinSpacing: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      /*
       * Character-by-character filling.
       *
       * Scroll down  -> left to right
       * Scroll up    -> right to left
       */
      timeline.to(chars, {
        color: "#ffffff",

        duration: 1,

        ease: "none",

        stagger: {
          each: 0.035,
          from: "start",
        },
      });

      /*
       * Small hold after the sentence
       * has completely filled.
       *
       * Then the section releases and
       * normal page scrolling continues.
       */
      timeline.to(
        {},
        {
          duration: 0.35,
        },
      );
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="scroll-statement"
    >
      <div className="scroll-statement__inner">
        <p
          className="scroll-statement__text"
          aria-label={statement}
        >
          {statement.split(" ").map(
            (word, wordIndex) => (
              <span
                className="scroll-statement__word"
                key={`${word}-${wordIndex}`}
                aria-hidden="true"
              >
                {word.split("").map(
                  (char, charIndex) => (
                    <span
                      className="scroll-statement__char"
                      key={`${char}-${charIndex}`}
                    >
                      {char}
                    </span>
                  ),
                )}
              </span>
            ),
          )}
        </p>
      </div>
    </section>
  );
}