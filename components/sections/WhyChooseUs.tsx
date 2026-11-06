"use client";

import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const serviceIcons = [
  {
    title: "Branding",
    image: "/images/services/branding.webp",
  },
  {
    title: "Cyber Security",
    image: "/images/services/cyber-security.webp",
  },
  {
    title: "E-Commerce",
    image: "/images/services/ecommerce-solutions.webp",
  },
  {
    title: "IT Support",
    image: "/images/services/it-support.webp",
  },
  {
    title: "SEO",
    image: "/images/services/seo.webp",
  },
  {
    title: "Social Media",
    image: "/images/services/social-media-marketing.webp",
  },
  {
    title: "Software",
    image: "/images/services/software-solutions.webp",
  },
  {
    title: "Web Development",
    image: "/images/services/web-design-and-development.webp",
  },
];

const stats = [
  {
    value: "8",
    label: "Core Services",
    eyebrow: "Complete capability",
  },
  {
    value: "4",
    label: "Delivery Stages",
    eyebrow: "Clear process",
  },
  {
    value: "1",
    label: "Technology Partner",
    eyebrow: "Connected execution",
  },
];

const processSteps = [
  {
    title: "Discovery",
    image: "/images/process/discovery.webp",
  },
  {
    title: "Strategy",
    image: "/images/process/strategy.webp",
  },
  {
    title: "Design & Build",
    image: "/images/process/design-build.webp",
  },
  {
    title: "Launch",
    image: "/images/process/launch.webp",
  },
];

const clients = [
  "/images/clients/client-01.webp",
  "/images/clients/client-02.webp",
  "/images/clients/client-03.webp",
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      /* =====================================================
         SERVICE ORBIT
      ===================================================== */

      const orbit = sectionRef.current?.querySelector(".why-core__orbit");

      const orbitIcons = gsap.utils.toArray<HTMLElement>(
        ".why-core__orbit-icon-inner",
      );

      if (orbit) {
        gsap.to(orbit, {
          rotation: 360,
          duration: 32,
          ease: "none",
          repeat: -1,
        });
      }

      orbitIcons.forEach((icon) => {
        gsap.to(icon, {
          rotation: -360,
          duration: 32,
          ease: "none",
          repeat: -1,
        });
      });

      /* =====================================================
         STATS SLIDER
      ===================================================== */

      const statsTrack = sectionRef.current?.querySelector<HTMLElement>(
        ".why-core__stats-track",
      );

      const firstStat =
        sectionRef.current?.querySelector<HTMLElement>(".why-core__stat");

      const statsViewport = sectionRef.current?.querySelector<HTMLElement>(
        ".why-core__stats-window",
      );

      let statsTimeline: gsap.core.Timeline | null = null;

      const createStatsTimeline = () => {
        if (!statsTrack || !firstStat || !statsViewport) {
          return;
        }

        statsTimeline?.kill();

        gsap.set(statsTrack, {
          x: 0,
        });

        const cardWidth = firstStat.getBoundingClientRect().width;

        const styles = window.getComputedStyle(statsTrack);

        const gap =
          parseFloat(styles.columnGap) || parseFloat(styles.gap) || 14;

        const step = cardWidth + gap;

        statsTimeline = gsap.timeline({
          repeat: -1,
          repeatDelay: 0.5,
        });

        statsTimeline
          .to({}, { duration: 2.4 })

          .to(statsTrack, {
            x: -step,
            duration: 0.9,
            ease: "power3.inOut",
          })

          .to({}, { duration: 2.4 })

          .to(statsTrack, {
            x: -(step * 2),
            duration: 0.9,
            ease: "power3.inOut",
          })

          .to({}, { duration: 2.4 })

          .to(statsTrack, {
            x: -(step * 3),
            duration: 0.9,
            ease: "power3.inOut",
          })

          .to({}, { duration: 2 })

          .set(statsTrack, {
            x: 0,
          });
      };

      createStatsTimeline();

      /* =====================================================
         PROCESS LOOP
      ===================================================== */

      const processItems = gsap.utils.toArray<HTMLElement>(
        ".why-core__process-item",
      );

      let processTimeline: gsap.core.Timeline | null = null;

      const getProcessSpacing = () => {
        if (window.innerWidth <= 480) {
          return 68;
        }

        if (window.innerWidth <= 767) {
          return 88;
        }

        if (window.innerWidth <= 1024) {
          return 105;
        }

        return 125;
      };

      const createProcessTimeline = () => {
        processTimeline?.kill();

        const space = getProcessSpacing();

        gsap.set(processItems, {
          x: 0,
          opacity: 0,
          scale: 0.86,
        });

        if (processItems[0]) {
          gsap.set(processItems[0], {
            opacity: 1,
            scale: 1,
          });
        }

        processTimeline = gsap.timeline({
          repeat: -1,
          repeatDelay: 0.8,
        });

        /* ONE */

        processTimeline.to(
          {},
          {
            duration: 1.5,
          },
        );

        /* TWO */

        processTimeline.to(
          processItems[0],
          {
            x: -space / 2,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "two",
        );

        processTimeline.to(
          processItems[1],
          {
            x: space / 2,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "two",
        );

        processTimeline.to(
          {},
          {
            duration: 1.25,
          },
        );

        /* THREE */

        processTimeline.to(
          processItems[0],
          {
            x: -space,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "three",
        );

        processTimeline.to(
          processItems[1],
          {
            x: 0,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "three",
        );

        processTimeline.to(
          processItems[2],
          {
            x: space,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "three",
        );

        processTimeline.to(
          {},
          {
            duration: 1.25,
          },
        );

        /* FOUR */

        processTimeline.to(
          processItems[0],
          {
            x: -(space * 1.5),
            duration: 0.8,
            ease: "power3.inOut",
          },
          "four",
        );

        processTimeline.to(
          processItems[1],
          {
            x: -space / 2,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "four",
        );

        processTimeline.to(
          processItems[2],
          {
            x: space / 2,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "four",
        );

        processTimeline.to(
          processItems[3],
          {
            x: space * 1.5,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "four",
        );

        processTimeline.to(
          {},
          {
            duration: 2.2,
          },
        );

        /* RESET */

        processTimeline.to(
          processItems.slice(1),
          {
            opacity: 0,
            scale: 0.86,
            duration: 0.45,
            ease: "power2.inOut",
          },
          "reset",
        );

        processTimeline.to(
          processItems[0],
          {
            x: 0,
            duration: 0.75,
            ease: "power3.inOut",
          },
          "reset",
        );

        processTimeline.set(processItems.slice(1), {
          x: 0,
        });
      };

      createProcessTimeline();

      /* =====================================================
         RESIZE
      ===================================================== */

      const handleResize = () => {
        createStatsTimeline();
        createProcessTimeline();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        statsTimeline?.kill();
        processTimeline?.kill();

        window.removeEventListener("resize", handleResize);
      };
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section ref={sectionRef} className="why-core">
      <div className="why-core__container">
        {/* =========================================
            HEADING
        ========================================= */}

        <div className="why-core__header">
          <h2>
            Why teams choose
            <br />
            to build with us.
          </h2>
        </div>

        {/* =========================================
            TOP GRID
        ========================================= */}

        <div className="why-core__top-grid">
          {/* =====================================
              LEFT CARD
          ===================================== */}

          <article className="why-core__card why-core__services-card">
            <h3>
              Everything digital.
              <br />
              Built at the Core.
            </h3>

            <div className="why-core__services-stage">
              <div className="why-core__brand">
                <Image
                  src="/images/logo/core-icon.webp"
                  alt="The Core Technology"
                  width={512}
                  height={512}
                  sizes="90px"
                />
              </div>

              <div className="why-core__orbit">
                {serviceIcons.map((service, index) => (
                  <div
                    key={service.title}
                    className={`why-core__orbit-icon why-core__orbit-icon--${
                      index + 1
                    }`}
                  >
                    <div className="why-core__orbit-icon-inner">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={120}
                        height={120}
                        sizes="54px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* =====================================
              RIGHT CARD
          ===================================== */}

          <article className="why-core__card why-core__results-card">
            <h3>
              Built to cover
              <br />
              the full journey.
            </h3>

            <div className="why-core__stats-window">
              <div className="why-core__stats-track">
                {[...stats, stats[0], stats[1]].map((stat, index) => (
                  <div
                    className="why-core__stat"
                    key={`${stat.label}-${index}`}
                  >
                    <span className="why-core__stat-eyebrow">
                      {stat.eyebrow}
                    </span>

                    <div className="why-core__stat-bottom">
                      <strong>{stat.value}</strong>

                      <p>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="why-core__trust">
              <div className="why-core__avatars">
                {clients.map((client, index) => (
                  <div className="why-core__avatar" key={client}>
                    <Image
                      src={client}
                      alt={`Client ${index + 1}`}
                      width={80}
                      height={80}
                      sizes="38px"
                    />
                  </div>
                ))}
              </div>

              <div className="why-core__trust-copy">
                <div className="why-core__stars" aria-label="5 stars">
                  ★★★★★
                </div>

                <p>Trusted by clients worldwide</p>
              </div>
            </div>
          </article>
        </div>

        {/* =========================================
            PROCESS CARD
        ========================================= */}

        <article className="why-core__card why-core__process-card">
          <h3>A clear process from idea to launch.</h3>

          <div className="why-core__process-stage">
            {processSteps.map((step) => (
              <div className="why-core__process-item" key={step.title}>
                <div className="why-core__process-image">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={800}
                    height={800}
                    sizes="90px"
                  />
                </div>

                <p>{step.title}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
