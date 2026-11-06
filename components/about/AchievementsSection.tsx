"use client";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const achievements = [
  {
    value: "3.2x",
    description:
      "Average improvement in conversion rate.",
  },
  {
    value: "60+",
    description:
      "Projects and digital solutions delivered across different industries.",
  },
  {
    value: "98%",
    description:
      "Of our clients stay with us because we care as much about their success as they do.",
  },
];

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const heading =
        sectionRef.current.querySelector(
          ".achievements-section__heading"
        );

      const cards =
        gsap.utils.toArray<HTMLElement>(
          ".achievement-card"
        );

      /* =========================================
         INITIAL STATE
      ========================================= */

      gsap.set(heading, {
        opacity: 0,
        y: 24,
        filter: "blur(4px)",
      });

      gsap.set(cards, {
        opacity: 0,
        y: 30,
        filter: "blur(4px)",
      });

      /* =========================================
         ENTER ANIMATION
      ========================================= */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top 76%",

          once: true,

          invalidateOnRefresh: true,
        },

        defaults: {
          ease: "power3.out",
        },
      });

      /* HEADING */

      timeline.to(heading, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",

        duration: 0.75,
      });

      /*
       * ALL CARDS ENTER TOGETHER
       * No stagger here.
       */

      timeline.to(
        cards,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",

          duration: 0.85,
        },
        "-=0.35"
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
      className="achievements-section"
    >
      <div className="achievements-section__container">

        {/* =====================================
            HEADING
        ===================================== */}

        <h2 className="achievements-section__heading">
          Our Achievements
        </h2>

        {/* =====================================
            CARDS
        ===================================== */}

        <div className="achievements-section__grid">

          {achievements.map((achievement) => (
            <article
              key={achievement.value}
              className="achievement-card"
            >
              <strong className="achievement-card__value">
                {achievement.value}
              </strong>

              <p className="achievement-card__description">
                {achievement.description}
              </p>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}