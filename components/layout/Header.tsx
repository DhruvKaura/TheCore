"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/* =========================================================
   MOBILE SERVICE LINKS

   For now all service submenu items go to /services.
   Later, when individual service pages are created, change to:
   /services/web-design-development
   /services/software-solutions
   etc.
========================================================= */

const serviceLinks = [
  {
    label: "Web Design & Development",
    href: "/services/web-design-development",
  },
  {
    label: "Software Solutions",
    href: "/services/software-solutions",
  },
  {
    label: "E-Commerce Solutions",
    href: "/services/ecommerce-solutions",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(true);

  /* =========================================================
     PREVENT BACKGROUND SCROLL
     WHEN MOBILE MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="site-header">
        <div className="site-header__inner">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            className="site-header__logo"
            aria-label="The Core Technology home"
            onClick={closeMenu}
          >
            <Image
              src="/images/brand/the-core-technology-logo.svg"
              alt="The Core Technology"
              width={230}
              height={48}
              priority
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="site-header__desktop-nav"
            aria-label="Main navigation"
          >
            <Link href="/">
              Home
            </Link>

            <Link href="/about">
              About us
            </Link>

            <Link href="/services">
              Services
            </Link>

            <Link href="/work">
              Work
            </Link>

            <Link href="/blog">
              Blog
            </Link>
          </nav>

          {/* =================================================
              DESKTOP CONTACT BUTTON
          ================================================= */}

          <Link
            href="/contact"
            className="site-header__contact"
          >
            <span>
              Contact us
            </span>
          </Link>

          {/* =================================================
              MOBILE MENU TOGGLE
          ================================================= */}

          <button
            type="button"
            className={`site-header__menu-toggle ${
              menuOpen
                ? "site-header__menu-toggle--open"
                : ""
            }`}
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((current) => !current)
            }
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div
        className={`mobile-navigation ${
          menuOpen
            ? "mobile-navigation--open"
            : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-navigation__inner">

          {/* =================================================
              HOME + ABOUT
          ================================================= */}

          <div className="mobile-navigation__top-grid">

            <Link
              href="/"
              onClick={closeMenu}
              className="mobile-navigation__tile"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="mobile-navigation__tile"
            >
              About us
            </Link>

          </div>

          {/* =================================================
              SERVICES ACCORDION
          ================================================= */}

          <div
            className={`mobile-navigation__accordion ${
              servicesOpen
                ? "mobile-navigation__accordion--open"
                : ""
            }`}
          >

            <button
              type="button"
              className="mobile-navigation__accordion-button"
              aria-expanded={servicesOpen}
              onClick={() =>
                setServicesOpen(
                  (current) => !current
                )
              }
            >
              <span>
                Services
              </span>

              <span
                className="mobile-navigation__chevron"
                aria-hidden="true"
              >
                <span />
                <span />
              </span>
            </button>

            {/* ===============================================
                ACCORDION CONTENT
            =============================================== */}

            <div className="mobile-navigation__accordion-content">

              <div>

                {serviceLinks.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    onClick={closeMenu}
                    className="mobile-navigation__service"
                  >
                    {service.label}
                  </Link>
                ))}

                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="mobile-navigation__all-services"
                >
                  <span>
                    See all services
                  </span>
                </Link>

              </div>

            </div>

          </div>

          {/* =================================================
              WORK
          ================================================= */}

          <Link
            href="/work"
            onClick={closeMenu}
            className="mobile-navigation__row"
          >
            <span>
              Work
            </span>

            <span
              className="mobile-navigation__row-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>

          {/* =================================================
              BLOG
          ================================================= */}

          <Link
            href="/blog"
            onClick={closeMenu}
            className="mobile-navigation__row"
          >
            <span>
              Blog
            </span>

            <span
              className="mobile-navigation__row-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>

          {/* =================================================
              CONTACT
          ================================================= */}

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mobile-navigation__contact"
          >
            <span>
              Contact us
            </span>
          </Link>

        </div>
      </div>
    </>
  );
}