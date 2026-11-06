"use client";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "We create fast, responsive digital experiences designed around your brand, users and business goals.",
  },
  {
    number: "02",
    title: "Software Solutions",
    description:
      "We build scalable software and digital products engineered around real business requirements.",
  },
  {
    number: "03",
    title: "E-Commerce Solutions",
    description:
      "We create streamlined commerce experiences built to make discovering, buying and managing products easier.",
  },
  {
    number: "04",
    title: "Branding",
    description:
      "We shape clear and memorable brand identities that give businesses a consistent digital presence.",
  },
  {
    number: "05",
    title: "SEO",
    description:
      "We improve search visibility through technical foundations, content structure and long-term organic strategy.",
  },
  {
    number: "06",
    title: "Cyber Security",
    description:
      "We strengthen digital systems through security-focused development, protection and practical safeguards.",
  },
  {
    number: "07",
    title: "IT Support",
    description:
      "Reliable technical support and ongoing assistance to keep websites, systems and digital operations moving.",
  },
  {
    number: "08",
    title: "Social Media Marketing",
    description:
      "We turn your social presence into a consistent extension of your brand.",
    video: true,
  },
];

export default function ServicesStack() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const cards = gsap.utils.toArray<HTMLElement>(
        ".services-stack__card"
      );

      if (!cards.length) return;

      const mm = gsap.matchMedia();

      const createStack = (scrollPerCard: number) => {
        /*
         * CARD 01
         * already sits in the visible position.
         *
         * Every later card begins just below
         * the card viewport.
         */
        cards.forEach((card, index) => {
          gsap.set(card, {
            yPercent: index === 0 ? 0 : 110,
            opacity: 1,
            scale: 1,

            /*
             * Newer cards always sit ABOVE
             * previous cards.
             */
            zIndex: index + 1,
          });
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,

            start: "top top",

            end: () =>
              `+=${
                window.innerHeight *
                scrollPerCard *
                (cards.length - 1)
              }`,

            pin: true,
            pinSpacing: true,

            /*
             * Smooth connection between
             * physical scroll and animation.
             */
            scrub: 0.8,

            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        /*
         * Do NOT move old cards.
         *
         * Each new card simply rises over
         * the card underneath it.
         */
        for (
          let index = 1;
          index < cards.length;
          index++
        ) {
          const incomingCard = cards[index];

          timeline.to(incomingCard, {
            yPercent: 0,

            duration: 1,

            ease: "power3.inOut",
          });

          /*
           * Tiny scroll hold after each
           * card reaches its final position.
           */
          timeline.to({}, {
            duration: 0.16,
          });
        }

        /*
         * Hold Social Media card before
         * releasing to next homepage section.
         */
        timeline.to({}, {
          duration: 0.65,
        });

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      };

      /* DESKTOP */
      mm.add(
        "(min-width: 1025px)",
        () => createStack(0.76)
      );

      /* TABLET */
      mm.add(
        "(min-width: 768px) and (max-width: 1024px)",
        () => createStack(0.7)
      );

      /* MOBILE */
      mm.add(
        "(max-width: 767px)",
        () => createStack(0.64)
      );

      return () => {
        mm.revert();
      };
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="services-stack"
      id="services"
    >
      <div className="services-stack__inner">

        {/* ========================================
            HEADING
        ======================================== */}

        <h2 className="services-stack__heading">
          What we offer
        </h2>

        {/* ========================================
            CARD WINDOW
        ======================================== */}

        <div className="services-stack__stage">

          {services.map((service) => (
            <article
              key={service.number}
              className={`services-stack__card ${
                service.video
                  ? "services-stack__card--video"
                  : ""
              }`}
            >

              {/* SOCIAL MEDIA VIDEO */}

              {service.video && (
                <>
                  <video
                    className="services-stack__video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source
                      src="/videos/services/social-media.webm"
                      type="video/webm"
                    />

                    <source
                      src="/videos/services/social-media.mp4"
                      type="video/mp4"
                    />
                  </video>

                  <div className="services-stack__video-overlay" />
                </>
              )}

              {/* NUMBER */}

              <span className="services-stack__number">
                {service.number}
              </span>

              {/* COPY */}

              <div className="services-stack__content">
                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>
              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}