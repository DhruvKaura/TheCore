"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, Observer);

const introText = "Hi, Welcome to ";
const brandText = "The Core Technology";
const finalHeading =
  "We turn ambitious ideas into powerful digital experiences";

const services = [
  { title: "Branding", image: "/images/services/branding.webp" },
  { title: "Cyber Security", image: "/images/services/cyber-security.webp" },
  {
    title: "E-Commerce Solutions",
    image: "/images/services/ecommerce-solutions.webp",
  },
  { title: "IT Support", image: "/images/services/it-support.webp" },
  { title: "SEO", image: "/images/services/seo.webp" },
  {
    title: "Social Media Marketing",
    image: "/images/services/social-media-marketing.webp",
  },
  {
    title: "Software Solutions",
    image: "/images/services/software-solutions.webp",
  },
  {
    title: "Web Design & Development",
    image: "/images/services/web-design-and-development.webp",
  },
];

const clients = [
  "/images/clients/client-01.webp",
  "/images/clients/client-02.webp",
  "/images/clients/client-03.webp",
];

function Characters({
  text,
  brand = false,
}: {
  text: string;
  brand?: boolean;
}) {
  return (
    <>
      {text.split("").map((character, index) => (
        <span
          key={`${character}-${index}`}
          className={`hero-char ${brand ? "hero-char--brand" : ""}`}
          aria-hidden="true"
        >
          {character === " " ? "\u00A0" : character}
        </span>
      ))}
    </>
  );
}

function FinalAnimatedText({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, wordIndex) => (
        <span className="final-word" key={`${word}-${wordIndex}`}>
          {word.split("").map((character, charIndex) => (
            <span
              className="final-char"
              key={`${character}-${charIndex}`}
              aria-hidden="true"
            >
              {character}
            </span>
          ))}
        </span>
      ))}
    </>
  );
}

// Keep the intro for a fresh page load, but not for client-side returns home.
let hasVisitedHome = false;

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const skipIntro = useRef<boolean | null>(null);

  const activeSlide = useRef(0);
  const isAnimating = useRef(false);

  // 0 = hidden, 1 = design, 2 = design + engineer, 3 = complete
  const sloganStep = useRef(0);

  /* =========================================================
     RESTORE PAGE POSITION AFTER RELOAD
  ========================================================= */

  useEffect(() => {
    const STORAGE_KEY = "core-home-scroll-position";

    const navigationEntry = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;

    const isReload = navigationEntry?.type === "reload";

    const savedPosition = Number(
      sessionStorage.getItem(STORAGE_KEY) ?? 0,
    );

    let restoring = !skipIntro.current && isReload && savedPosition > 0;
    let settleTimerOne: ReturnType<typeof setTimeout> | null = null;
    let settleTimerTwo: ReturnType<typeof setTimeout> | null = null;
    let finishTimer: ReturnType<typeof setTimeout> | null = null;

    const savePosition = () => {
      if (restoring) return;

      sessionStorage.setItem(
        STORAGE_KEY,
        String(window.scrollY),
      );
    };

    const handlePageHide = () => {
      sessionStorage.setItem(
        STORAGE_KEY,
        String(window.scrollY),
      );
    };

    window.addEventListener("scroll", savePosition, {
      passive: true,
    });

    window.addEventListener("pagehide", handlePageHide);

    if (restoring) {
      const restore = () => {
        window.scrollTo({
          top: savedPosition,
          left: 0,
          behavior: "auto",
        });
      };

      requestAnimationFrame(() => {
        requestAnimationFrame(restore);
      });

      // Re-apply after GSAP/ScrollTrigger sections have calculated
      // their final heights and pin spacing.
      settleTimerOne = setTimeout(restore, 260);
      settleTimerTwo = setTimeout(restore, 700);

      finishTimer = setTimeout(() => {
        restoring = false;
      }, 820);
    }

    return () => {
      sessionStorage.setItem(
        STORAGE_KEY,
        String(window.scrollY),
      );

      window.removeEventListener("scroll", savePosition);
      window.removeEventListener("pagehide", handlePageHide);

      if (settleTimerOne) clearTimeout(settleTimerOne);
      if (settleTimerTwo) clearTimeout(settleTimerTwo);
      if (finishTimer) clearTimeout(finishTimer);
    };
  }, []);

  useGSAP(
    () => {
      const root = sectionRef.current;
      if (!root) return;

      const slides = gsap.utils.toArray<HTMLElement>(".hero-slide", root);

      if (!slides.length) return;

      // Retain the first decision across React Strict Mode effect replays.
      skipIntro.current ??= hasVisitedHome;
      hasVisitedHome = true;

      if (skipIntro.current) {
        activeSlide.current = slides.length - 1;
        isAnimating.current = false;
        gsap.set(slides, { xPercent: -100, autoAlpha: 0, zIndex: 1 });
        gsap.set(slides[slides.length - 1], {
          xPercent: 0,
          autoAlpha: 1,
          zIndex: 2,
        });
        gsap.set(root.querySelectorAll(".hero-final__content, .hero-final__trust, .hero-final__copy, .hero-final__button, .final-char"), {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        });
        // No scroll observer on return: the final frame scrolls like a normal section.
        return;
      }

      gsap.set(slides[0], {
        xPercent: 0,
        autoAlpha: 1,
        zIndex: 2,
      });

      gsap.set(slides.slice(1), {
        xPercent: -100,
        autoAlpha: 1,
        zIndex: 1,
      });

      const locationContent =
        root.querySelector<HTMLElement>(".hero-location");
      const serviceHeading =
        root.querySelector<HTMLElement>(".hero-services__heading");
      const serviceCards = gsap.utils.toArray<HTMLElement>(
        ".service-card",
        root,
      );
      const statementContent =
        root.querySelector<HTMLElement>(".hero-statement");
      const processScreen =
        root.querySelector<HTMLElement>(".hero-process");
      const designPart =
        root.querySelector<HTMLElement>(".process-part--design");
      const engineerPart =
        root.querySelector<HTMLElement>(".process-part--engineer");
      const deliverPart =
        root.querySelector<HTMLElement>(".process-part--deliver");
      const finalContent =
        root.querySelector<HTMLElement>(".hero-final__content");
      const finalTrust =
        root.querySelector<HTMLElement>(".hero-final__trust");
      const finalCopy =
        root.querySelector<HTMLElement>(".hero-final__copy");
      const finalButton =
        root.querySelector<HTMLElement>(".hero-final__button");
      const finalChars = gsap.utils.toArray<HTMLElement>(".final-char", root);

      const getProcessTravel = () => {
        if (window.innerWidth <= 767) return 65;
        if (window.innerWidth <= 1024) return 110;
        return 180;
      };

      const getDesignStepTwoX = () => {
        if (window.innerWidth <= 767) return -14;
        if (window.innerWidth <= 1024) return -22;
        return -32;
      };

      const getDesignStepThreeX = () => {
        if (window.innerWidth <= 767) return -24;
        if (window.innerWidth <= 1024) return -34;
        return -48;
      };

      const getEngineerStepThreeX = () => {
        if (window.innerWidth <= 767) return -10;
        if (window.innerWidth <= 1024) return -15;
        return -22;
      };

      if (statementContent) {
        gsap.set(statementContent, {
          opacity: 0,
          scale: 0.92,
        });
      }

      if (processScreen) {
        gsap.set(processScreen, { opacity: 1 });
      }

      const travel = getProcessTravel();

      if (designPart) {
        gsap.set(designPart, {
          opacity: 0,
          x: -travel,
        });
      }

      if (engineerPart) {
        gsap.set(engineerPart, {
          opacity: 0,
          x: travel,
        });
      }

      if (deliverPart) {
        gsap.set(deliverPart, {
          opacity: 0,
          x: travel,
        });
      }

      const introTimeline = gsap.timeline({
        delay: 0.25,
        defaults: { ease: "power3.out" },
      });

      introTimeline.fromTo(
        root.querySelectorAll(".hero-char"),
        {
          opacity: 0,
          x: -18,
          y: 3,
          filter: "blur(5px)",
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          duration: 0.62,
          stagger: {
            each: 0.022,
            from: "start",
          },
        },
      );

      introTimeline.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
        },
        "-=0.2",
      );

      const getServiceOffsets = () => {
        const stage = root.querySelector<HTMLElement>(".hero-services");
        if (!stage) return [];

        const stageRect = stage.getBoundingClientRect();
        const centerX = stageRect.left + stageRect.width / 2;
        const centerY = stageRect.top + stageRect.height / 2;

        return serviceCards.map((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const cardCenterY = rect.top + rect.height / 2;

          return {
            card,
            x: centerX - cardCenterX,
            y: centerY - cardCenterY,
          };
        });
      };

      const prepareServicesCollapsed = () => {
        const offsets = getServiceOffsets();

        offsets.forEach(({ card, x, y }) => {
          gsap.set(card, {
            x,
            y,
            scale: 0.16,
            opacity: 0,
          });
        });

        if (serviceHeading) {
          gsap.set(serviceHeading, {
            opacity: 0,
            scale: 0.9,
          });
        }
      };

      const stopServiceFloating = () => {
        serviceCards.forEach((card) => {
          const element = card.querySelector<HTMLElement>(
            ".service-card__float",
          );

          if (!element) return;

          gsap.killTweensOf(element);
          gsap.set(element, { y: 0 });
        });
      };

      const startServiceFloating = () => {
        serviceCards.forEach((card, index) => {
          const element = card.querySelector<HTMLElement>(
            ".service-card__float",
          );

          if (!element) return;

          gsap.killTweensOf(element);

          gsap.fromTo(
            element,
            {
              y: index % 2 === 0 ? -3 : 3,
            },
            {
              y: index % 2 === 0 ? 8 : -8,
              duration: 2.4 + (index % 4) * 0.38,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              delay: index * 0.1,
            },
          );
        });
      };

      const expandServices = (
        timeline: gsap.core.Timeline,
        position: number,
      ) => {
        if (serviceHeading) {
          timeline.to(
            serviceHeading,
            {
              opacity: 1,
              scale: 1,
              duration: 0.75,
              ease: "power3.out",
            },
            position,
          );
        }

        timeline.to(
          serviceCards,
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.25,
            ease: "power3.out",
            stagger: {
              each: 0.045,
              from: "center",
            },
            onComplete: startServiceFloating,
          },
          position + 0.05,
        );
      };

      const collapseServices = (
        timeline: gsap.core.Timeline,
        position: number,
      ) => {
        stopServiceFloating();

        const offsets = getServiceOffsets();

        offsets.forEach(({ card, x, y }, index) => {
          timeline.to(
            card,
            {
              x,
              y,
              scale: 0.16,
              opacity: 0,
              duration: 0.78,
              ease: "power3.inOut",
            },
            position + index * 0.018,
          );
        });

        if (serviceHeading) {
          timeline.to(
            serviceHeading,
            {
              opacity: 0,
              scale: 0.9,
              duration: 0.5,
              ease: "power3.inOut",
            },
            position,
          );
        }
      };

      const resetProcess = () => {
        sloganStep.current = 0;

        const distance = getProcessTravel();

        if (designPart) {
          gsap.set(designPart, {
            opacity: 0,
            x: -distance,
          });
        }

        if (engineerPart) {
          gsap.set(engineerPart, {
            opacity: 0,
            x: distance,
          });
        }

        if (deliverPart) {
          gsap.set(deliverPart, {
            opacity: 0,
            x: distance,
          });
        }
      };

      const setCompleteProcessState = (opacity: number) => {
        if (designPart) {
          gsap.set(designPart, {
            x: getDesignStepThreeX(),
            opacity,
          });
        }

        if (engineerPart) {
          gsap.set(engineerPart, {
            x: getEngineerStepThreeX(),
            opacity,
          });
        }

        if (deliverPart) {
          gsap.set(deliverPart, {
            x: 0,
            opacity,
          });
        }
      };

      const scrollTimeline = (vars: gsap.TimelineVars) =>
        gsap.timeline(vars).timeScale(1.15);

      const showEngineerStep = () => {
        if (!designPart || !engineerPart) return;

        isAnimating.current = true;

        const tl = scrollTimeline({
          onComplete: () => {
            sloganStep.current = 2;
            isAnimating.current = false;
          },
        });

        tl.to(
          designPart,
          {
            x: getDesignStepTwoX(),
            duration: 0.95,
            ease: "power3.inOut",
          },
          0,
        );

        tl.to(
          engineerPart,
          {
            opacity: 1,
            x: 0,
            duration: 1.05,
            ease: "power3.inOut",
          },
          0,
        );
      };

      const showDeliverStep = () => {
        if (!designPart || !engineerPart || !deliverPart) return;

        isAnimating.current = true;

        const tl = scrollTimeline({
          onComplete: () => {
            sloganStep.current = 3;
            isAnimating.current = false;
          },
        });

        tl.to(
          designPart,
          {
            x: getDesignStepThreeX(),
            duration: 0.95,
            ease: "power3.inOut",
          },
          0,
        );

        tl.to(
          engineerPart,
          {
            x: getEngineerStepThreeX(),
            duration: 0.95,
            ease: "power3.inOut",
          },
          0,
        );

        tl.to(
          deliverPart,
          {
            opacity: 1,
            x: 0,
            duration: 1.05,
            ease: "power3.inOut",
          },
          0,
        );
      };

      const hideDeliverStep = () => {
        if (!designPart || !engineerPart || !deliverPart) return;

        isAnimating.current = true;
        const distance = getProcessTravel();

        const tl = scrollTimeline({
          onComplete: () => {
            sloganStep.current = 2;
            isAnimating.current = false;
          },
        });

        tl.to(
          deliverPart,
          {
            opacity: 0,
            x: distance,
            duration: 0.8,
            ease: "power3.inOut",
          },
          0,
        );

        tl.to(
          designPart,
          {
            x: getDesignStepTwoX(),
            duration: 0.8,
            ease: "power3.inOut",
          },
          0,
        );

        tl.to(
          engineerPart,
          {
            x: 0,
            duration: 0.8,
            ease: "power3.inOut",
          },
          0,
        );
      };

      const hideEngineerStep = () => {
        if (!designPart || !engineerPart) return;

        isAnimating.current = true;
        const distance = getProcessTravel();

        const tl = scrollTimeline({
          onComplete: () => {
            sloganStep.current = 1;
            isAnimating.current = false;
          },
        });

        tl.to(
          engineerPart,
          {
            opacity: 0,
            x: distance,
            duration: 0.8,
            ease: "power3.inOut",
          },
          0,
        );

        tl.to(
          designPart,
          {
            x: 0,
            duration: 0.8,
            ease: "power3.inOut",
          },
          0,
        );
      };

      const prepareFinalScreen = () => {
        gsap.set(finalChars, {
          opacity: 0,
          x: -16,
          filter: "blur(4px)",
        });

        const secondaryElements = [finalTrust, finalCopy, finalButton].filter(
          Boolean,
        );

        gsap.set(secondaryElements, {
          opacity: 0,
          y: 16,
        });

        if (finalContent) {
          gsap.set(finalContent, { scale: 1 });
        }
      };

      prepareFinalScreen();

      const animateFinalScreen = (
        timeline: gsap.core.Timeline,
        position: number,
      ) => {
        timeline.to(
          finalChars,
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 0.58,
            ease: "power3.out",
            stagger: {
              each: 0.018,
              from: "start",
            },
          },
          position,
        );

        const secondaryElements = [finalTrust, finalCopy, finalButton].filter(
          Boolean,
        );

        timeline.to(
          secondaryElements,
          {
            opacity: 1,
            y: 0,
            duration: 0.72,
            ease: "power3.out",
            stagger: 0.1,
          },
          position + 0.52,
        );
      };

      const goToSlide = (nextIndex: number) => {
        if (isAnimating.current) return;

        if (
          nextIndex < 0 ||
          nextIndex >= slides.length ||
          nextIndex === activeSlide.current
        ) {
          return;
        }

        isAnimating.current = true;

        const current = slides[activeSlide.current];
        const next = slides[nextIndex];
        const goingBack = nextIndex < activeSlide.current;

        const locationToServices =
          activeSlide.current === 1 && nextIndex === 2;
        const servicesToLocation =
          activeSlide.current === 2 && nextIndex === 1;
        const servicesToStatement =
          activeSlide.current === 2 && nextIndex === 3;
        const statementToServices =
          activeSlide.current === 3 && nextIndex === 2;
        const statementToProcess =
          activeSlide.current === 3 && nextIndex === 4;
        const processToStatement =
          activeSlide.current === 4 && nextIndex === 3;
        const processToFinal =
          activeSlide.current === 4 && nextIndex === 5;
        const finalToProcess =
          activeSlide.current === 5 && nextIndex === 4;

        if (locationToServices) {
          stopServiceFloating();
          prepareServicesCollapsed();

          gsap.set(next, {
            xPercent: 0,
            autoAlpha: 1,
            zIndex: 2,
          });

          gsap.set(current, {
            xPercent: 0,
            autoAlpha: 1,
            zIndex: 3,
          });

          const tl = scrollTimeline({
            onComplete: () => {
              activeSlide.current = 2;
              isAnimating.current = false;

              gsap.set(current, {
                xPercent: 100,
                autoAlpha: 1,
                zIndex: 1,
              });

              gsap.set(next, {
                xPercent: 0,
                autoAlpha: 1,
                zIndex: 2,
              });

              if (locationContent) {
                gsap.set(locationContent, {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                });
              }
            },
          });

          tl.to(
            current,
            {
              autoAlpha: 0,
              duration: 0.5,
              ease: "power2.inOut",
            },
            0,
          );

          expandServices(tl, 0.16);
          return;
        }

        if (servicesToLocation) {
          stopServiceFloating();

          gsap.set(next, {
            xPercent: 0,
            autoAlpha: 1,
            zIndex: 1,
          });

          gsap.set(current, {
            xPercent: 0,
            autoAlpha: 1,
            zIndex: 2,
          });

          if (locationContent) {
            gsap.set(locationContent, {
              opacity: 1,
              scale: 1,
              y: 0,
            });
          }

          const tl = scrollTimeline({
            onComplete: () => {
              activeSlide.current = 1;
              isAnimating.current = false;

              gsap.set(current, {
                xPercent: -100,
                autoAlpha: 1,
                zIndex: 1,
              });

              gsap.set(next, {
                xPercent: 0,
                autoAlpha: 1,
                zIndex: 2,
              });
            },
          });

          collapseServices(tl, 0);

          tl.to(
            current,
            {
              autoAlpha: 0,
              duration: 0.45,
              ease: "power2.inOut",
            },
            0.4,
          );

          return;
        }

        if (servicesToStatement) {
          stopServiceFloating();

          gsap.set(next, {
            xPercent: 0,
            autoAlpha: 1,
            zIndex: 2,
          });

          gsap.set(current, {
            xPercent: 0,
            autoAlpha: 1,
            zIndex: 3,
          });

          if (statementContent) {
            gsap.set(statementContent, {
              opacity: 0,
              scale: 0.92,
            });
          }

          const tl = scrollTimeline({
            onComplete: () => {
              activeSlide.current = 3;
              isAnimating.current = false;

              gsap.set(current, {
                xPercent: -100,
                autoAlpha: 1,
                zIndex: 1,
              });

              gsap.set(next, {
                xPercent: 0,
                autoAlpha: 1,
                zIndex: 2,
              });
            },
          });

          collapseServices(tl, 0);

          tl.to(
            current,
            {
              autoAlpha: 0,
              duration: 0.4,
              ease: "power2.inOut",
            },
            0.48,
          );

          if (statementContent) {
            tl.to(
              statementContent,
              {
                opacity: 1,
                scale: 1,
                duration: 0.85,
                ease: "power3.out",
              },
              0.56,
            );
          }

          return;
        }

        if (statementToServices) {
          prepareServicesCollapsed();

          gsap.set(next, {
            xPercent: 0,
            autoAlpha: 1,
            zIndex: 2,
          });

          gsap.set(current, {
            xPercent: 0,
            autoAlpha: 1,
            zIndex: 3,
          });

          const tl = scrollTimeline({
            onComplete: () => {
              activeSlide.current = 2;
              isAnimating.current = false;

              gsap.set(current, {
                xPercent: 100,
                autoAlpha: 1,
                zIndex: 1,
              });

              gsap.set(next, {
                xPercent: 0,
                autoAlpha: 1,
                zIndex: 2,
              });

              if (statementContent) {
                gsap.set(statementContent, {
                  opacity: 1,
                  scale: 1,
                });
              }
            },
          });

          if (statementContent) {
            tl.to(
              statementContent,
              {
                opacity: 0,
                scale: 0.92,
                duration: 0.45,
                ease: "power2.inOut",
              },
              0,
            );
          }

          tl.to(
            current,
            {
              autoAlpha: 0,
              duration: 0.35,
              ease: "power2.inOut",
            },
            0.16,
          );

          expandServices(tl, 0.22);
          return;
        }

        if (statementToProcess) {
          resetProcess();

          gsap.set(next, {
            xPercent: 0,
            autoAlpha: 0,
            zIndex: 3,
          });

          gsap.set(current, {
            xPercent: 0,
            autoAlpha: 1,
            zIndex: 2,
          });

          const tl = scrollTimeline({
            onComplete: () => {
              activeSlide.current = 4;
              sloganStep.current = 1;
              isAnimating.current = false;

              gsap.set(current, {
                xPercent: -100,
                autoAlpha: 1,
                zIndex: 1,
              });

              gsap.set(next, {
                xPercent: 0,
                autoAlpha: 1,
                zIndex: 2,
              });
            },
          });

          if (statementContent) {
            tl.to(
              statementContent,
              {
                opacity: 0,
                scale: 0.95,
                duration: 0.45,
                ease: "power2.inOut",
              },
              0,
            );
          }

          tl.to(
            next,
            {
              autoAlpha: 1,
              duration: 0.55,
              ease: "power2.inOut",
            },
            0.12,
          );

          if (designPart) {
            tl.to(
              designPart,
              {
                opacity: 1,
                x: 0,
                duration: 1.05,
                ease: "power3.inOut",
              },
              0.22,
            );
          }

          return;
        }

        if (processToStatement) {
          gsap.set(next, {
            xPercent: 0,
            autoAlpha: 1,
            zIndex: 1,
          });

          gsap.set(current, {
            xPercent: 0,
            autoAlpha: 1,
            zIndex: 2,
          });

          if (statementContent) {
            gsap.set(statementContent, {
              opacity: 0,
              scale: 0.95,
            });
          }

          const tl = scrollTimeline({
            onComplete: () => {
              activeSlide.current = 3;
              sloganStep.current = 0;
              isAnimating.current = false;

              gsap.set(current, {
                xPercent: -100,
                autoAlpha: 1,
                zIndex: 1,
              });

              gsap.set(next, {
                xPercent: 0,
                autoAlpha: 1,
                zIndex: 2,
              });

              resetProcess();
            },
          });

          if (designPart) {
            tl.to(
              designPart,
              {
                opacity: 0,
                x: -getProcessTravel(),
                duration: 0.75,
                ease: "power3.inOut",
              },
              0,
            );
          }

          tl.to(
            current,
            {
              autoAlpha: 0,
              duration: 0.5,
              ease: "power2.inOut",
            },
            0.28,
          );

          if (statementContent) {
            tl.to(
              statementContent,
              {
                opacity: 1,
                scale: 1,
                duration: 0.75,
                ease: "power3.out",
              },
              0.34,
            );
          }

          return;
        }

        if (processToFinal) {
          prepareFinalScreen();

          gsap.set(next, {
            xPercent: 0,
            autoAlpha: 0,
            zIndex: 3,
          });

          gsap.set(current, {
            xPercent: 0,
            autoAlpha: 1,
            zIndex: 2,
          });

          const tl = scrollTimeline({
            onComplete: () => {
              activeSlide.current = 5;
              isAnimating.current = false;

              gsap.set(current, {
                xPercent: -100,
                autoAlpha: 1,
                zIndex: 1,
              });

              gsap.set(next, {
                xPercent: 0,
                autoAlpha: 1,
                zIndex: 2,
              });

              if (processScreen) {
                gsap.set(processScreen, { opacity: 1 });
              }
            },
          });

          if (processScreen) {
            tl.to(
              processScreen,
              {
                opacity: 0,
                duration: 0.45,
                ease: "power2.inOut",
              },
              0,
            );
          }

          tl.to(
            next,
            {
              autoAlpha: 1,
              duration: 0.55,
              ease: "power2.inOut",
            },
            0.08,
          );

          animateFinalScreen(tl, 0.22);
          return;
        }

        if (finalToProcess) {
          sloganStep.current = 3;
          setCompleteProcessState(0);

          if (processScreen) {
            gsap.set(processScreen, { opacity: 1 });
          }

          gsap.set(next, {
            xPercent: 0,
            autoAlpha: 0,
            zIndex: 2,
          });

          gsap.set(current, {
            xPercent: 0,
            autoAlpha: 1,
            zIndex: 3,
          });

          const tl = scrollTimeline({
            onComplete: () => {
              activeSlide.current = 4;
              sloganStep.current = 3;
              isAnimating.current = false;

              gsap.set(current, {
                xPercent: 100,
                autoAlpha: 1,
                zIndex: 1,
              });

              gsap.set(next, {
                xPercent: 0,
                autoAlpha: 1,
                zIndex: 2,
              });

              prepareFinalScreen();
            },
          });

          tl.to(
            current,
            {
              autoAlpha: 0,
              duration: 0.5,
              ease: "power2.inOut",
            },
            0,
          );

          tl.to(
            next,
            {
              autoAlpha: 1,
              duration: 0.5,
              ease: "power2.inOut",
            },
            0.05,
          );

          tl.to(
            [designPart, engineerPart, deliverPart].filter(Boolean),
            {
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.04,
            },
            0.18,
          );

          return;
        }

        const incomingStart = goingBack ? 100 : -100;
        const outgoingEnd = goingBack ? -100 : 100;

        gsap.set(next, {
          xPercent: incomingStart,
          autoAlpha: 1,
          zIndex: 3,
        });

        gsap.set(current, {
          autoAlpha: 1,
          zIndex: 2,
        });

        const tl = scrollTimeline({
          defaults: {
            duration: 1.45,
            ease: "power3.inOut",
          },
          onComplete: () => {
            activeSlide.current = nextIndex;
            isAnimating.current = false;

            gsap.set(current, {
              xPercent: outgoingEnd,
              zIndex: 1,
            });

            gsap.set(next, {
              xPercent: 0,
              zIndex: 2,
            });
          },
        });

        tl.to(current, { xPercent: outgoingEnd }, 0);
        tl.to(next, { xPercent: 0 }, 0);
      };

      /* ===================================================
         SCROLL / TOUCH CONTROL
      =================================================== */

      let heroScrollReleased = window.scrollY > 2;
      let releaseInProgress = false;
      let releaseAnimationFrame: number | null = null;
      let releaseUnlockTimer: ReturnType<typeof setTimeout> | null = null;

      const preventMomentum = (event: Event) => {
        event.preventDefault();
      };

      const lockNativeInput = () => {
        window.addEventListener("wheel", preventMomentum, {
          passive: false,
        });
        window.addEventListener("touchmove", preventMomentum, {
          passive: false,
        });
      };

      const unlockNativeInput = () => {
        window.removeEventListener("wheel", preventMomentum);
        window.removeEventListener("touchmove", preventMomentum);
      };

      const animatePageScroll = (
        targetY: number,
        duration = 1050,
        onComplete?: () => void,
      ) => {
        const startY = window.scrollY;
        const distance = targetY - startY;
        const startTime = performance.now();

        const easeInOutCubic = (progress: number) =>
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        const frame = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeInOutCubic(progress);

          window.scrollTo(
            0,
            startY + distance * easedProgress,
          );

          if (progress < 1) {
            releaseAnimationFrame = requestAnimationFrame(frame);
            return;
          }

          releaseAnimationFrame = null;
          onComplete?.();
        };

        releaseAnimationFrame = requestAnimationFrame(frame);
      };

      const observer = Observer.create({
        target: window,
        type: "wheel,touch",
        preventDefault: true,
        tolerance: 12,
        onChangeY: (self) => {
          if (self.deltaY > 0) {
            /* =============================================
               FINAL HERO SCREEN -> FIRST NORMAL SECTION
            ============================================= */

            if (activeSlide.current === 5) {
              if (releaseInProgress) return;

              const nextSection =
                root.nextElementSibling as HTMLElement | null;

              if (!nextSection) {
                heroScrollReleased = true;
                self.disable();
                return;
              }

              releaseInProgress = true;
              heroScrollReleased = true;

              // Stop trackpad/wheel momentum so the first normal section
              // cannot be skipped immediately after leaving the hero.
              lockNativeInput();
              self.disable();

              const targetY =
                nextSection.getBoundingClientRect().top +
                window.scrollY;

              animatePageScroll(targetY, 900, () => {
                // Keep input locked briefly after landing so residual
                // trackpad momentum has time to die out.
                releaseUnlockTimer = setTimeout(() => {
                  unlockNativeInput();
                  releaseInProgress = false;
                }, 220);
              });

              return;
            }

            /* =============================================
               SCREEN 05 INTERNAL PROCESS
            ============================================= */

            if (activeSlide.current === 4) {
              if (isAnimating.current) return;

              if (sloganStep.current === 1) {
                showEngineerStep();
                return;
              }

              if (sloganStep.current === 2) {
                showDeliverStep();
                return;
              }

              if (sloganStep.current === 3) {
                goToSlide(5);
                return;
              }
            }

            goToSlide(activeSlide.current + 1);
            return;
          }

          if (self.deltaY < 0) {
            if (activeSlide.current === 4) {
              if (isAnimating.current) return;

              if (sloganStep.current === 3) {
                hideDeliverStep();
                return;
              }

              if (sloganStep.current === 2) {
                hideEngineerStep();
                return;
              }

              if (sloganStep.current === 1) {
                goToSlide(3);
                return;
              }
            }

            goToSlide(activeSlide.current - 1);
          }
        },
      });

      /* ===================================================
         PAGE / HERO SYNCHRONISATION
      =================================================== */

      const handlePageScroll = () => {
        // When a reload restores the page below the hero, immediately
        // release Observer so normal page scrolling remains available.
        if (window.scrollY > 2 && !heroScrollReleased) {
          heroScrollReleased = true;
          observer.disable();
          return;
        }

        // Once the user has naturally returned to the very top,
        // give control back to the hero sequence.
        if (
          heroScrollReleased &&
          !releaseInProgress &&
          window.scrollY <= 2
        ) {
          heroScrollReleased = false;
          observer.enable();
        }
      };

      window.addEventListener("scroll", handlePageScroll, {
        passive: true,
      });

      if (window.scrollY > 2) {
        heroScrollReleased = true;
        observer.disable();
      }

      return () => {
        observer.kill();
        unlockNativeInput();

        window.removeEventListener("scroll", handlePageScroll);

        if (releaseAnimationFrame !== null) {
          cancelAnimationFrame(releaseAnimationFrame);
        }

        if (releaseUnlockTimer) {
          clearTimeout(releaseUnlockTimer);
        }

        stopServiceFloating();
      };
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <>
      <section ref={sectionRef} className="hero-sequence">
        {/* SCREEN 01 */}
        <div className="hero-slide hero-slide--intro">
          <div className="hero-inner">
            <h1
              className="hero-heading"
              aria-label="Hi, Welcome to The Core Technology"
            >
              <span className="hero-heading__intro">
                <Characters text={introText} />
              </span>

              <span className="hero-heading__brand">
                <Characters text={brandText} brand />
              </span>
            </h1>

            <p ref={subtitleRef} className="hero-subtitle">
              Scroll to explore our site
            </p>
          </div>
        </div>

        {/* SCREEN 02 */}
        <div className="hero-slide hero-slide--location">
          <div className="hero-location">
            <h2 className="hero-location__heading">
              We are a creative technology studio based in{" "}
              <span className="hero-location__highlight">Olten</span>,
              Switzerland
            </h2>
          </div>
        </div>

        {/* SCREEN 03 */}
        <div className="hero-slide hero-slide--services">
          <div className="hero-services">
            <h2 className="hero-services__heading">Our services</h2>

            {services.map((service, index) => (
              <div
                key={service.title}
                className={`service-card service-card--${index + 1}`}
              >
                <div className="service-card__float">
                  <div className="service-card__image">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={500}
                      sizes="120px"
                      priority={index < 4}
                    />
                  </div>

                  <p className="service-card__title">{service.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SCREEN 04 */}
        <div className="hero-slide hero-slide--statement">
          <div className="hero-statement">
            <h2 className="hero-statement__heading">
              Everything digital. Built at the <span>Core.</span>
            </h2>
          </div>
        </div>

        {/* SCREEN 05 */}
        <div className="hero-slide hero-slide--process">
          <div className="hero-process">
            <div className="hero-process__line">
              <span className="process-part process-part--design">
                We design
              </span>

              <span className="process-part process-part--engineer">
                <span className="process-dot">•</span>
                We engineer
              </span>

              <span className="process-part process-part--deliver">
                <span className="process-dot">•</span>
                We deliver
              </span>
            </div>
          </div>
        </div>

        {/* SCREEN 06 */}
        <div className="hero-slide hero-slide--final">
          <div className="hero-final">
            <div className="hero-final__content">
              <div className="hero-final__trust">
                <div className="hero-final__avatars">
                  {clients.map((client, index) => (
                    <div className="hero-final__avatar" key={client}>
                      <Image
                        src={client}
                        alt={`Client ${index + 1}`}
                        width={256}
                        height={256}
                        sizes="36px"
                      />
                    </div>
                  ))}
                </div>

                <div className="hero-final__trust-copy">
                  <div className="hero-final__stars" aria-label="5 stars">
                    ★★★★★
                  </div>

                  <p>Trusted by clients worldwide</p>
                </div>
              </div>

              <h2 className="hero-final__heading" aria-label={finalHeading}>
                <FinalAnimatedText text={finalHeading} />
              </h2>

              <p className="hero-final__copy">
                From strategy and design to engineering and delivery, we build
                technology that is purposeful, scalable, and made to perform.
              </p>

              <button type="button" className="hero-final__button">
                <span className="hero-final__button-text">Build with us</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
