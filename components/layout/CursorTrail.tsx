"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorTrail() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (!window.matchMedia("(pointer: fine)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });
    const moveX = gsap.quickTo(cursor, "x", { duration: 0.48, ease: "power3.out" });
    const moveY = gsap.quickTo(cursor, "y", { duration: 0.48, ease: "power3.out" });

    const handleMouseMove = (event: MouseEvent) => {
      moveX(event.clientX);
      moveY(event.clientY);
      gsap.to(cursor, { opacity: 1, duration: 0.2, overwrite: "auto" });
    };
    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.25, overwrite: "auto" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      moveX.tween.kill();
      moveY.tween.kill();
      gsap.killTweensOf(cursor);
    };
  }, []);

  return <div ref={cursorRef} className="core-cursor-trail" aria-hidden="true" />;
}
