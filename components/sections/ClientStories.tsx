"use client";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: "01",
    feature: "End-to-end",
    featureText: "From concept to production",
    quote:
      "The Core took a rough product idea and turned it into a digital experience that felt considered from day one. Strategy, design and development all moved together without the usual handoffs and confusion.",
    name: "Adrian Keller",
    role: "Founder",
    company: "FlowPilot",
    initials: "AK",
    variant: "primary",
  },
  {
    id: "02",
    feature: "Launch-ready",
    featureText: "Built with clarity from the start",
    quote:
      "What stood out was the attention to both design and technical detail. The final experience feels premium, easy to use and genuinely aligned with the way we wanted our brand to be perceived.",
    name: "Maya Verma",
    role: "Director",
    company: "Aurelia Botanics",
    initials: "MV",
    variant: "wide",
  },
  {
    id: "03",
    feature: "Fast iteration",
    featureText: "",
    quote:
      "Ideas were translated into working interfaces quickly, without losing the details that make the experience feel polished.",
    name: "Luca Romano",
    role: "Founder",
    company: "Atelier Nova",
    initials: "LR",
    variant: "small",
  },
  {
    id: "04",
    feature: "Built to scale",
    featureText: "",
    quote:
      "The team understood the bigger picture instead of treating the website as an isolated project. Everything feels ready for where we want to take the business next.",
    name: "Elena Fischer",
    role: "E-Commerce Lead",
    company: "NordHaus Living",
    initials: "EF",
    variant: "dark",
  },
];

export default function ClientStories() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      gsap.fromTo(
        ".client-stories__heading",
        {
          opacity: 0,
          y: 30,
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

      gsap.fromTo(
        ".client-stories__intro",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.08,

          scrollTrigger: {
            trigger: section,
            start: "top 76%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".client-story-card",
        {
          opacity: 0,
          y: 38,
          scale: 0.985,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,

          duration: 0.9,
          stagger: 0.09,

          ease: "power3.out",

          scrollTrigger: {
            trigger: ".client-stories__grid",
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
      className="client-stories"
      id="client-stories"
    >
      <div className="client-stories__container">

        {/* HEADER */}

        <div className="client-stories__header">
          <h2 className="client-stories__heading">
            Results that
            <br />
            speak for themselves.
          </h2>

          <div className="client-stories__intro">
            <h3>
              Client stories.
            </h3>

            <p>
              Built through close collaboration,
              thoughtful design and dependable
              technical execution.
            </p>
          </div>
        </div>

        {/* GRID */}

        <div className="client-stories__grid">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className={`client-story-card client-story-card--${testimonial.variant}`}
            >
              {/* TOP */}

              <div className="client-story-card__top">
                <div>
                  <strong className="client-story-card__feature">
                    {testimonial.feature}
                  </strong>

                  {testimonial.featureText && (
                    <p className="client-story-card__feature-text">
                      {testimonial.featureText}
                    </p>
                  )}
                </div>

                <span className="client-story-card__number">
                  {testimonial.id}
                </span>
              </div>

              {/* QUOTE */}

              <div className="client-story-card__quote">
                <span className="client-story-card__quote-mark">
                  ”
                </span>

                <p>
                  {testimonial.quote}
                </p>
              </div>

              {/* PERSON */}

              <div className="client-story-card__person">
                <div className="client-story-card__avatar">
                  {testimonial.initials}
                </div>

                <div className="client-story-card__person-copy">
                  <strong>
                    {testimonial.name}
                  </strong>

                  <p>
                    {testimonial.role},{" "}
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* COMPANY MARK */}

              <div className="client-story-card__company-mark">
                {testimonial.company.charAt(0)}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}