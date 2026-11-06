"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const approachItems = [
  {
    number: "01",
    title: "Think Before We Build",
    description:
      "We understand the real problem, goals and constraints before deciding what needs to be built.",
  },
  {
    number: "02",
    title: "Design for People",
    description:
      "Every decision starts with the people using the product — making experiences clear, intuitive and purposeful.",
  },
  {
    number: "03",
    title: "Engineer for Results",
    description:
      "We build reliable technology around measurable outcomes, performance and real business needs.",
  },
  {
    number: "04",
    title: "Grow Together",
    description:
      "We work as a technology partner, collaborating closely and building solutions that can evolve with your business.",
  },
];

export default function ApproachSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const heading =
        sectionRef.current.querySelector(
          ".approach-section__heading"
        );

      const cards =
        gsap.utils.toArray<HTMLElement>(
          ".approach-card"
        );

      /* =========================================
         INITIAL STATES
      ========================================= */

      gsap.set(heading, {
        opacity: 0,
        y: 24,
        filter: "blur(4px)",
      });

      gsap.set(cards, {
        opacity: 0,
        y: 30,
        x: -14,
        filter: "blur(4px)",
      });

      /* =========================================
         ANIMATION
      ========================================= */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
          invalidateOnRefresh: true,
        },

        defaults: {
          ease: "power3.out",
        },
      });

      timeline.to(heading, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.75,
      });

      timeline.to(
        cards,
        {
          opacity: 1,
          y: 0,
          x: 0,
          filter: "blur(0px)",
          duration: 0.75,

          stagger: {
            each: 0.12,
            from: "start",
          },
        },
        "-=0.32"
      );

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
      className="approach-section"
    >
      <div className="approach-section__container">

        {/* =====================================
            HEADING
        ===================================== */}

        <h2 className="approach-section__heading">
          How we approach
          <br />
          every project
        </h2>

        {/* =====================================
            CARDS
        ===================================== */}

        <div className="approach-section__grid">
          {approachItems.map(
            (item, index) => (
              <article
                key={item.number}
                className="approach-card"
              >
                {/* TOP */}

                <div className="approach-card__top">

                  {/* PROGRESS DOTS */}

                  <div
                    className="approach-card__dots"
                    aria-hidden="true"
                  >
                    {approachItems.map(
                      (_, dotIndex) => (
                        <span
                          key={dotIndex}
                          className={
                            dotIndex <= index
                              ? "approach-card__dot approach-card__dot--active"
                              : "approach-card__dot"
                          }
                        />
                      )
                    )}
                  </div>

                  {/* NUMBER */}

                  <span className="approach-card__number">
                    {item.number}
                  </span>

                </div>

                {/* COPY */}

                <div className="approach-card__content">
                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>
                </div>

              </article>
            )
          )}
        </div>

      </div>
    </section>
  );
}