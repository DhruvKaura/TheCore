"use client";

import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ClientStory() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.fromTo(
        ".client-story__heading",
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        },
      );

      tl.fromTo(
        ".client-story__media",
        {
          opacity: 0,
          y: 55,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.45",
      );

      tl.fromTo(
        ".client-story__panel",
        {
          opacity: 0,
          y: 55,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8",
      );

      tl.fromTo(
        ".client-story__metric",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.45",
      );
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="client-story"
      id="client-story"
    >
      <div className="client-story__container">
        {/* Heading */}

        <div className="client-story__header">
          <h2 className="client-story__heading">
            Built for people
            <br />
            who expect more.
          </h2>
        </div>

        {/* Main Grid */}

        <div className="client-story__grid">
          {/* Left Image */}

          <div className="client-story__media">
            <Image
  src="/images/testimonials/lyndon-jay.webp"
  alt="Lyndon Jay, Founder and CEO of Vitilia Botanicals"
  fill
  sizes="(max-width: 767px) 100vw, 42vw"
  className="client-story__image"
  loading="eager"
/>
          </div>

          {/* Right Panel */}

          <div className="client-story__panel">
            <div className="client-story__testimonial">
              {/*
                Replace this with Lyndon's approved testimonial
                before publishing the live site.
              */}

              <p className="client-story__quote">
                “Working with The Core Technology gave us a much
                clearer direction for our digital presence. The team
                understood what we wanted to communicate, translated
                it into a refined experience, and handled the
                technical execution with real attention to detail.
                The result feels considered, modern, and aligned with
                where we want Vitilia Botanicals to go.”
              </p>

              <div className="client-story__person">
                <div className="client-story__avatar">
                  <Image
                    src="/images/testimonials/lyndon-jay.webp"
                    alt=""
                    fill
                    sizes="48px"
                  />
                </div>

                <div className="client-story__person-copy">
                  <h3>Lyndon Jay</h3>

                  <p>
                    Founder &amp; CEO, Vitilia Botanicals
                  </p>
                </div>
              </div>
            </div>

            {/* Outcome Cards */}

            <div className="client-story__metrics">
              <article className="client-story__metric">
                <div className="client-story__metric-value">
                  Unified
                </div>

                <p>
                  Strategy, design and technology working together
                  as one connected digital experience.
                </p>
              </article>

              <article className="client-story__metric">
                <div className="client-story__metric-value">
                  Scalable
                </div>

                <p>
                  A flexible digital foundation designed for what
                  comes next.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}