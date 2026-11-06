import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ContactProject from "@/components/sections/ContactProject";

export const metadata: Metadata = {
  title: "Vitilia Botanicals — The Core Technology",
  description:
    "Brand identity and website design for Vitilia Botanicals, an African botanical wellness brand.",
};

export default function VitiliaWorkPage() {
  return (
    <main className="work-detail">
      <section className="work-detail__intro">
        <div className="work-detail__container">
          <p className="work-detail__eyebrow">Selected work</p>
          <h1>Vitilia Botanicals</h1>
          <p className="work-detail__summary">
            We shaped a distinctive brand and digital experience that brings
            Vitilia&apos;s African botanical roots into a clear, credible and
            contemporary wellness presence.
          </p>

          <dl className="work-detail__meta">
            <div>
              <dt>Year</dt>
              <dd>2026</dd>
            </div>
            <div>
              <dt>Industry</dt>
              <dd>Wellness / E-commerce</dd>
            </div>
            <div>
              <dt>Work scope</dt>
              <dd>Branding, website design &amp; development</dd>
            </div>
          </dl>

          <div className="work-detail__hero">
            <Image
              src="/images/work/vitilia/website-home.png"
              alt="Vitilia Botanicals landing page website preview"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 1500px"
            />
          </div>
        </div>
      </section>

      <section className="work-detail__section">
        <div className="work-detail__container">
          <div className="work-detail__split-heading">
            <p className="work-detail__section-label">
              <span aria-hidden="true">+</span>
              The challenge
            </p>
            <div>
              <h2>Building trust in a crowded wellness market.</h2>
              <p>
                Vitilia needed to communicate botanical heritage, purposeful
                formulations and a broad product range without feeling clinical
                or overwhelming. The brand had to feel natural and credible,
                while giving every product room to tell its own story.
              </p>
            </div>
          </div>

          <div className="work-detail__image-grid">
            <figure className="work-detail__portrait">
              <Image
                src="/images/work/vitilia/lions-mane.jpg"
                alt="Vitilia Lion's Mane botanical capsules"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </figure>
            <figure className="work-detail__portrait">
              <Image
                src="/images/work/vitilia/parasite-cleanse.jpg"
                alt="Vitilia Parasite Cleanse botanical tincture"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="work-detail__section work-detail__section--tint">
        <div className="work-detail__container">
          <div className="work-detail__split-heading">
            <p className="work-detail__section-label">
              <span aria-hidden="true">+</span>
              Our approach
            </p>
            <div>
              <h2>Rooted in nature, designed with purpose.</h2>
              <p>
                We built a cohesive identity and an immersive responsive
                website around Vitilia&apos;s own visual world: deep botanical
                greens, editorial typography, product-led storytelling and
                clear paths to explore the collection or make an enquiry.
              </p>
            </div>
          </div>

          <div className="work-detail__browser">
            <div className="work-detail__browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <Image
              src="/images/work/vitilia/website-home.png"
              alt="Vitilia Botanicals homepage designed by The Core Technology"
              width={1280}
              height={720}
              sizes="(max-width: 767px) 100vw, 1500px"
            />
          </div>

          <div
            className="work-detail__page-panels"
            role="region"
            aria-label="Full landing page in three parts"
            tabIndex={0}
          >
            {[1, 2, 3].map((part) => (
              <figure key={part}>
                <Image
                  src={`/images/work/vitilia/website-part-${part}.webp`}
                  alt={`Vitilia Botanicals landing page, part ${part} of 3, in reading order`}
                  width={1280}
                  height={part === 3 ? 2489 : 2490}
                  sizes="(max-width: 767px) 78vw, 33vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="work-detail__section work-detail__identity">
        <div className="work-detail__container">
          <div className="work-detail__split-heading">
            <p className="work-detail__section-label">
              <span aria-hidden="true">+</span>
              Brand identity
            </p>
            <div>
              <h2>A visual language with a botanical pulse.</h2>
              <p>
                The identity pairs a living tree symbol with an expressive
                Afro-inspired seal, building a recognisable system that can move
                naturally from packaging and product imagery into digital use.
              </p>
            </div>
          </div>

          <div className="work-detail__identity-grid">
            <figure>
              <Image
                src="/images/work/vitilia/logo.png"
                alt="Vitilia Botanicals logo"
                width={1080}
                height={1080}
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </figure>
            <figure>
              <Image
                src="/images/work/vitilia/seal.png"
                alt="Vitilia Botanicals Afro-inspired brand seal"
                width={1080}
                height={1080}
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="work-detail__final">
        <div className="work-detail__container">
          <div className="work-detail__split-heading">
            <p className="work-detail__section-label">
              <span aria-hidden="true">+</span>
              Final thoughts
            </p>
            <div>
              <h2>A grounded brand built to grow.</h2>
              <p>
                The result is one connected brand and digital system: rich
                enough to feel distinctive, structured enough to support an
                expanding collection, and simple enough to make botanical
                wellness feel approachable.
              </p>
              <div className="work-detail__actions">
                <Link href="/work" className="work-detail__text-link">
                  Explore all work →
                </Link>
              </div>
            </div>
          </div>

          <figure className="work-detail__closing-image">
            <Image
              src="/images/work/vitilia/acui-tea.jpg"
              alt="Vitilia ACUI-TEA botanical blend"
              fill
              sizes="(max-width: 767px) 100vw, 1500px"
            />
          </figure>
        </div>
      </section>

      <ContactProject />
    </main>
  );
}
