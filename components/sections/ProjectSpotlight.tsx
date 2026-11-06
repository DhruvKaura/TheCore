"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const project = {
  name: "Simkaya",

  heading: "A distinctive brand presence for Simkaya.",

  image: "/images/work/simkaya.webp",

  category:
    "Social Media • Branding",

  storyTitle:
    "Rooted in craftsmanship. Recognisable across every touchpoint.",

  story:
    "Product storytelling, festive campaign creative and a cohesive visual direction bring Simkaya’s statement jewellery into focus across its social presence and branded presentation.",
};

const highlights = [
  "Brand Identity",
  "Social Media Creative",
  "Product Storytelling",
  "Campaign Design",
  "Visual Direction",
  "Instagram Content",
  "Packaging Presentation",
  "Consistent Brand Voice",
];

export default function ProjectSpotlight() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section =
        sectionRef.current;

      if (!section) return;

      /* =========================================
         HEADER
      ========================================= */

      gsap.fromTo(
        ".project-spotlight__heading",
        {
          opacity: 0,
          y: 32,
        },
        {
          opacity: 1,
          y: 0,

          duration: 0.85,

          ease: "power3.out",

          scrollTrigger: {
            trigger: section,

            start: "top 76%",

            once: true,
          },
        }
      );

      /* =========================================
         CARDS
      ========================================= */

      gsap.fromTo(
        ".project-spotlight__card",
        {
          opacity: 0,
          y: 38,
        },
        {
          opacity: 1,
          y: 0,

          duration: 0.9,

          stagger: 0.08,

          ease: "power3.out",

          scrollTrigger: {
            trigger:
              ".project-spotlight__grid",

            start: "top 80%",

            once: true,
          },
        }
      );
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="project-spotlight"
      id="featured-project"
    >
      <div className="project-spotlight__container">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="project-spotlight__header">
          <h2 className="project-spotlight__heading">
            {project.heading}
          </h2>

          <Link href="/work/simkaya" className="project-spotlight__case-study">
            View case study
          </Link>
        </div>

        {/* =====================================
            GRID
        ===================================== */}

        <div className="project-spotlight__grid">

          {/* =================================
              PROJECT IMAGE
          ================================= */}

          <article className="project-spotlight__card project-spotlight__project-card">

            <Image
              src={project.image}
              alt={`${project.name} statement jewellery in a burgundy and gold setting`}
              fill
              sizes="(max-width: 767px) 100vw, 38vw"
              className="project-spotlight__project-image"
            />

            <div className="project-spotlight__image-overlay" />

            <div className="project-spotlight__project-info">
              <h3>
                {project.name}
              </h3>

              <p>
                {project.category}
              </p>
            </div>

          </article>

          {/* =================================
              HIGHLIGHTS
          ================================= */}

          <article className="project-spotlight__card project-spotlight__highlights-card">

            <h3>
              Project highlights
            </h3>

            <div className="project-spotlight__highlights-window">

              <div className="project-spotlight__highlights-track">

                <div className="project-spotlight__highlights-set">
                  {highlights.map(
                    (
                      highlight,
                      index
                    ) => (
                      <div
                        className="project-spotlight__highlight"
                        key={`first-${highlight}-${index}`}
                      >
                        {highlight}
                      </div>
                    )
                  )}
                </div>

                <div
                  className="project-spotlight__highlights-set"
                  aria-hidden="true"
                >
                  {highlights.map(
                    (
                      highlight,
                      index
                    ) => (
                      <div
                        className="project-spotlight__highlight"
                        key={`second-${highlight}-${index}`}
                      >
                        {highlight}
                      </div>
                    )
                  )}
                </div>

              </div>

            </div>

          </article>

          {/* =================================
              EXPERIENCE
          ================================= */}

          <article className="project-spotlight__card project-spotlight__experience-card">

            <h3>
              Brand presence
            </h3>

            <div className="project-spotlight__experience-center">

              <div className="project-spotlight__ring">

                <div className="project-spotlight__ring-inner">

                  <strong>
                    Recognisable
                  </strong>

                  <span>
                    by design
                  </span>

                </div>

              </div>

            </div>

            <div className="project-spotlight__screen-card">

              <span>
                Created for
              </span>

              <strong>
                Every Touchpoint
              </strong>

              <p>
                Identity • Social • Campaigns
              </p>

            </div>

          </article>

          {/* =================================
              PROJECT STORY
          ================================= */}

          <article className="project-spotlight__card project-spotlight__story-card">

            <div className="project-spotlight__story-meta">

              <div className="project-spotlight__story-mark">
                S
              </div>

              <div>
                <h3>
                  Simkaya
                </h3>

                <p>
                  Social Media &amp; Branding
                </p>
              </div>

            </div>

            <div className="project-spotlight__story-content">

              <h3>
                {project.storyTitle}
              </h3>

              <p>
                {project.story}
              </p>

            </div>

            <div className="project-spotlight__story-line">
              <span />
            </div>

          </article>

        </div>

      </div>
    </section>
  );
}
