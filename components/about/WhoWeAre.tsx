"use client";

import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const clientAvatars = [
  "/images/clients/client-01.webp",
  "/images/clients/client-02.webp",
  "/images/clients/client-03.webp",
];

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement | null>(
    null
  );

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const animatedText =
        gsap.utils.toArray<HTMLElement>(
          ".who-we-are__animate"
        );

      /* =========================================
         INITIAL STATE
      ========================================= */

      gsap.set(animatedText, {
        opacity: 0,
        y: 26,
        filter: "blur(4px)",
      });

      /* =========================================
         FADE-UP ON FIRST ENTRY
      ========================================= */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top 78%",

          once: true,

          invalidateOnRefresh: true,
        },

        defaults: {
          ease: "power3.out",
        },
      });

      timeline.to(animatedText, {
        opacity: 1,

        y: 0,

        filter: "blur(0px)",

        duration: 0.8,

        stagger: 0.07,
      });

      /*
       * Important when the browser restores
       * the previous scroll position after refresh.
       */
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
      className="who-we-are"
    >
      <div className="who-we-are__container">

        {/* =====================================
            SECTION HEADING
        ===================================== */}

        <h2 className="who-we-are__heading who-we-are__animate">
          Who we are
        </h2>

        {/* =====================================
            MAIN GRID
        ===================================== */}

        <div className="who-we-are__grid">

          {/* =================================
              LARGE IMAGE
          ================================= */}

          <div className="who-we-are__visual">

            <Image
              src="/images/about/who-we-are.webp"
              alt="The Core Technology creative team"
              fill
              sizes="(max-width: 767px) 100vw, 68vw"
              className="who-we-are__image"
            />

            {/* IMAGE OVERLAY */}

            <div className="who-we-are__visual-overlay" />

            {/* =================================
                GLASS CONTENT
            ================================= */}

            <div className="who-we-are__glass">

              <h3 className="who-we-are__animate">
                The Core Technology
              </h3>

              <p className="who-we-are__animate">
                We combine strategy, design and
                engineering to build digital
                products and systems that feel
                clear, purposeful and built to
                last.
              </p>

            </div>

          </div>

          {/* =================================
              RIGHT COLUMN
          ================================= */}

          <div className="who-we-are__side">

            {/* =============================
                COMPANY CARD
            ============================= */}

            <div className="who-we-are__company-card">

              <div className="who-we-are__logo">
                <Image
                  src="/images/brand/the-core-technology-logo.svg"
                  alt="The Core Technology"
                  width={240}
                  height={70}
                />
              </div>

              <p className="who-we-are__animate">
                We remove unnecessary complexity
                and focus on technology that helps
                businesses move forward.
              </p>

            </div>

            {/* =============================
                STATS CARD
            ============================= */}

            <div className="who-we-are__stats-card">

              <div>

                <strong className="who-we-are__metric who-we-are__animate">
                  60+
                </strong>

                <p className="who-we-are__metric-copy who-we-are__animate">
                  Projects and digital solutions
                  delivered across different
                  industries.
                </p>

              </div>

              {/* =============================
                  TRUSTED CLIENTS
              ============================= */}

              <div className="who-we-are__trust">

                <div className="who-we-are__avatars">

                  {clientAvatars.map(
                    (avatar) => (
                      <div
                        key={avatar}
                        className="who-we-are__avatar"
                      >
                        <Image
                          src={avatar}
                          alt=""
                          fill
                          sizes="38px"
                        />
                      </div>
                    )
                  )}

                </div>

                <div className="who-we-are__trust-copy">

                  <div
                    className="who-we-are__stars who-we-are__animate"
                    aria-label="Five star rating"
                  >
                    ★★★★★
                  </div>

                  <p className="who-we-are__animate">
                    <strong>
                      Trusted by
                    </strong>{" "}
                    clients worldwide
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}