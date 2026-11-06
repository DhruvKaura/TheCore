import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ContactProject from "@/components/sections/ContactProject";

export const metadata: Metadata = {
  title: "Brewora — The Core Technology",
  description:
    "Website development for Brewora, combining bold cold-brew product presentation, brand storytelling and a responsive shopping interface.",
};

export default function BreworaWorkPage() {
  return (
    <main className="work-detail work-detail--brewora">
      <section className="work-detail__intro">
        <div className="work-detail__container">
          <p className="work-detail__eyebrow">Selected work</p>
          <h1>Brewora</h1>
          <p className="work-detail__summary">
            A cold-brew coffee website with a bold personality and a
            product-first approach. Warm colours, expressive typography and
            considered storytelling bring the everyday coffee ritual online.
          </p>

          <dl className="work-detail__meta">
            <div>
              <dt>Year</dt>
              <dd>2026</dd>
            </div>
            <div>
              <dt>Industry</dt>
              <dd>Coffee / Food &amp; beverage</dd>
            </div>
            <div>
              <dt>Work scope</dt>
              <dd>Website development &amp; e-commerce interface</dd>
            </div>
          </dl>

          <div className="work-detail__hero">
            <Image
              src="/images/work/brewora/website-home.webp"
              alt="Brewora homepage with bold espresso-coloured typography and a cold-brew can on a cream background"
              fill
              preload
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
              <h2>Make a familiar ritual feel fresh.</h2>
              <p>
                The website needed to give canned coffee a distinctive digital
                presence while making the flavour range easy to understand.
                The challenge was to combine an expressive brand world with a
                clear path from the first product impression to browsing the
                lineup and exploring the story behind the brew.
              </p>
            </div>
          </div>

          <div className="work-detail__image-grid">
            <figure className="work-detail__portrait">
              <Image
                src="/images/work/brewora/vanilla.webp"
                alt="Brewora Vanilla Bean cold-brew product artwork from the website"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </figure>
            <figure className="work-detail__portrait">
              <Image
                src="/images/work/brewora/caramel.webp"
                alt="Brewora Caramel Drip cold-brew product artwork from the website"
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
              <h2>Big on personality. Clear on the product.</h2>
              <p>
                An oversized opening headline and a central can create an
                immediate focal point. Cream, espresso and caramel tones carry
                through the page, while product cards, flavour notes and
                dedicated story sections give the experience a practical
                structure beneath its playful surface.
              </p>
            </div>
          </div>

          <div
            className="work-detail__page-panels work-detail__page-panels--overview"
            role="region"
            aria-label="Complete Brewora landing page in three panels"
            tabIndex={0}
          >
            {[1, 2, 3].map((part) => (
              <figure key={part}>
                <Image
                  src={`/images/work/brewora/website-part-${part}.webp`}
                  alt={`Brewora landing page, part ${part} of 3, in reading order`}
                  width={1280}
                  height={part === 3 ? 2474 : 2475}
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
              The visual world
            </p>
            <div>
              <h2>A little warmth in every interaction.</h2>
              <p>
                The site brings together tactile coffee imagery, a classic
                brand mark and confident display type. Consistent colour and
                spacing connect the product range with the process and origin
                stories, making the brand feel cohesive from the header to
                the final section.
              </p>
            </div>
          </div>
          <figure className="brewora-brand-mark">
            <Image
              src="/images/work/brewora/logo.webp"
              alt="Brewora coffee brand mark and Sip, Relax, Repeat tagline used on the website"
              width={1536}
              height={1024}
              sizes="(max-width: 767px) 85vw, 720px"
            />
          </figure>
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
              <h2>A considered website for an everyday favourite.</h2>
              <p>
                Brewora turns its coffee range into a lively, approachable
                website experience. The result balances product discovery with
                storytelling, giving each flavour a place within a recognisable
                brand world.
              </p>
              <div className="work-detail__actions">
                <Link href="/work" className="work-detail__text-link">
                  Explore all work →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactProject />
    </main>
  );
}
