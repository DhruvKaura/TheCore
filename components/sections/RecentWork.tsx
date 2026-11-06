"use client";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import WorkCards from "@/components/work/WorkCards";

gsap.registerPlugin(ScrollTrigger);

export default function RecentWork() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".recent-work__heading",
        {
          opacity: 0,
          y: 38,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".work-card",
        {
          opacity: 0,
          y: 55,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".recent-work__grid",
            start: "top 82%",
            once: true,
          },
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
      className="recent-work"
      id="work"
    >
      <div className="recent-work__container">
        {/* Heading */}
        <div className="recent-work__header">
          <h2 className="recent-work__heading">
            Recent work
            <br />
            we&apos;ve brought to life.
          </h2>
        </div>

        <WorkCards limit={4} />
      </div>
    </section>
  );
}
