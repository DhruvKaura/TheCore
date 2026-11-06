"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const heading = "How can we help?";

export default function ContactIntro() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        gsap.set(".contact-intro__char, .contact-intro__fade", {
          clearProps: "all",
          opacity: 1,
        });
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          ".contact-intro__char",
          { opacity: 0, y: 20, filter: "blur(7px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.42,
            stagger: 0.045,
          },
        )
        .fromTo(
          ".contact-intro__fade",
          { opacity: 0 },
          { opacity: 1, duration: 0.75, stagger: 0.12 },
          "-=0.1",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="contact-intro">
      <div className="contact-intro__hero">
        <div className="contact-intro__container">
          <h1 aria-label={heading}>
            {heading.split("").map((character, index) => (
              <span
                key={`${character}-${index}`}
                className="contact-intro__char"
                aria-hidden="true"
              >
                {character === " " ? "\u00a0" : character}
              </span>
            ))}
          </h1>

          <p className="contact-intro__description contact-intro__fade">
            Have a project in mind? We&apos;d love to hear your story and
            explore how we can help bring it to life.
          </p>
        </div>
      </div>

      <div className="contact-intro__details">
        <div className="contact-intro__cards">
          <article className="contact-intro__card contact-intro__fade">
            <h2>Email</h2>
            <p>
              Tell us what you&apos;re planning and we&apos;ll get back to you.
            </p>
            <a href="mailto:info@thecoretechnology.com">
              info@thecoretechnology.com
            </a>
          </article>

          <article className="contact-intro__card contact-intro__fade">
            <h2>Phone</h2>
            <p>Call us directly to discuss your project.</p>
            <div className="contact-intro__phone-list">
              <a href="tel:+919877027929">+91 98770 27929</a>
              <a href="tel:+919779401255">+91 97794 01255</a>
            </div>
          </article>

          <article className="contact-intro__card contact-intro__fade">
            <h2>Visit us</h2>
            <p>Coming soon</p>
          </article>
        </div>
      </div>
    </section>
  );
}
