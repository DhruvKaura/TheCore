"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type TeamMember = {
  name: string;
  role: string;
  image: string;
  revealText: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Gurdeep Kumar",
    role: "Founder & CEO",
    image: "/images/founder/gurdeep-kumar.webp",
    revealText: "Gurdeep defines the direction.",
  },
  {
    name: "Dhruv Kaura",
    role: "Chief Technology Officer",
    image: "/images/team/cto.webp",
    revealText: "Dhruv turns ideas into technology.",
  },
];

function TeamCard({
  member,
}: {
  member: TeamMember;
}) {
  const [active, setActive] = useState(false);

  const handleCardClick = () => {
    if (typeof window === "undefined") return;

    const isTouchDevice = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    ).matches;

    if (isTouchDevice) {
      setActive((current) => !current);
    }
  };

  return (
    <article
      className={`about-team-card ${
        active ? "about-team-card--active" : ""
      }`}
      onClick={handleCardClick}
    >
      {/* =====================================
          IMAGE
      ===================================== */}

      <div className="about-team-card__image">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role} at The Core Technology`}
          fill
          sizes="(max-width: 767px) 100vw, 420px"
        />
      </div>

      {/* =====================================
          INFORMATION AREA
      ===================================== */}

      <div className="about-team-card__bottom">

        {/* MAIN INFORMATION BOX */}

        <div className="about-team-card__primary">
          <div className="about-team-card__identity">
            <h3>{member.name}</h3>

            <p>{member.role}</p>
          </div>
        </div>

        {/* HIDDEN REVEAL BOX */}

        <div className="about-team-card__reveal">
          <p>
            {member.revealText
              .split("")
              .map((char, index) => (
                <span
                  key={`${member.name}-${index}`}
                  style={{
                    transitionDelay: `${index * 12}ms`,
                  }}
                >
                  {char === " "
                    ? "\u00A0"
                    : char}
                </span>
              ))}
          </p>
        </div>

      </div>
    </article>
  );
}

export default function TeamSection() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const heading =
        sectionRef.current.querySelector(
          ".about-team__heading"
        );

      const cards =
        gsap.utils.toArray<HTMLElement>(
          ".about-team-card"
        );

      /* =====================================
         INITIAL STATE
      ===================================== */

      gsap.set(heading, {
        opacity: 0,
        y: 24,
        filter: "blur(4px)",
      });

      gsap.set(cards, {
        opacity: 0,
        y: 34,
        filter: "blur(4px)",
      });

      /* =====================================
         SECTION ENTRANCE
      ===================================== */

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

      timeline.to(heading, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.75,
      });

      timeline.to(
        cards,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.12,
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
      className="about-team"
    >
      <div className="about-team__container">

        {/* =====================================
            HEADING
        ===================================== */}

        <h2 className="about-team__heading">
          Meet the people
          <br />
          behind the Core
        </h2>

        {/* =====================================
            TEAM
        ===================================== */}

        <div className="about-team__grid">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.name}
              member={member}
            />
          ))}
        </div>

      </div>
    </section>
  );
}