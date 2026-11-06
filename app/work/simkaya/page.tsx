import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ContactProject from "@/components/sections/ContactProject";

export const metadata: Metadata = {
  title: "Simkaya — Social Media & Branding — The Core Technology",
  description:
    "Social media and branding for Simkaya Jewels: product storytelling, festive campaign creative and a distinctive jewellery brand presence.",
};

export default function SimkayaWorkPage() {
  return (
    <main className="work-detail work-detail--simkaya">
      <section className="work-detail__intro">
        <div className="work-detail__container">
          <p className="work-detail__eyebrow">Selected work</p>
          <h1>Simkaya</h1>
          <p className="work-detail__summary">
            Social media and branding that bring the richness of statement
            jewellery into focus. A visual story built around craftsmanship,
            celebration and the details that make a piece feel personal.
          </p>

          <dl className="work-detail__meta">
            <div>
              <dt>Year</dt>
              <dd>2026</dd>
            </div>
            <div>
              <dt>Industry</dt>
              <dd>Jewellery / Fashion &amp; lifestyle</dd>
            </div>
            <div>
              <dt>Work scope</dt>
              <dd>Social Media &amp; Branding</dd>
            </div>
          </dl>

          <div className="work-detail__hero">
            <Image
              src="/images/work/simkaya.webp"
              alt="Statement jewellery in a rich burgundy and gold setting for Simkaya"
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
              <h2>Make the detail stand out. Make the brand stay with you.</h2>
              <p>
                Jewellery is full of small details that deserve a closer look.
                The creative challenge was to give those details a recognisable
                setting across product stories, seasonal offers and everyday
                social content, while keeping the brand warm and approachable.
              </p>
            </div>
          </div>

          <div className="simkaya-brand-grid">
            <figure className="simkaya-packaging">
              <Image
                src="/images/work/simkaya/instagram-2.webp"
                alt="Simkaya necklace and earrings with blush packaging and branded jewellery card, from its Instagram"
                width={480}
                height={640}
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </figure>
            <div className="simkaya-brand-panel">
              <span className="simkaya-kicker">The brand world</span>
              <div className="simkaya-wordmark">
                SIMKAYA
                <span>J E W E L S</span>
              </div>
              <p>Timeless, statement jewellery.</p>
              <div className="simkaya-palette" aria-label="Brand colours">
                <div><span className="simkaya-palette__blush" /><small>Blush</small></div>
                <div><span className="simkaya-palette__gold" /><small>Gold</small></div>
                <div><span className="simkaya-palette__burgundy" /><small>Burgundy</small></div>
                <div><span className="simkaya-palette__ivory" /><small>Ivory</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-detail__section work-detail__section--tint">
        <div className="work-detail__container">
          <div className="work-detail__split-heading">
            <p className="work-detail__section-label">
              <span aria-hidden="true">+</span>
              Social creative
            </p>
            <div>
              <h2>A festive story, made for the feed.</h2>
              <p>
                Product-led layouts combine warm gold, floral details and clear
                offer messaging. These published Diwali creatives from
                Simkaya&apos;s Instagram show the jewellery as the focal point,
                with a consistent visual language across the campaign.
              </p>
            </div>
          </div>

          <div
            className="simkaya-social-grid"
            role="region"
            aria-label="Published Simkaya campaign posts"
            tabIndex={0}
          >
            {[5, 6, 7].map((post) => (
              <figure key={post}>
                <Image
                  src={`/images/work/simkaya/instagram-${post}.webp`}
                  alt={`Published Simkaya Diwali jewellery campaign creative ${post - 4}`}
                  width={post === 7 ? 608 : 640}
                  height={post === 6 ? 631 : 640}
                  sizes="(max-width: 767px) 85vw, 33vw"
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
              Product storytelling
            </p>
            <div>
              <h2>From the first detail to the unboxing moment.</h2>
              <p>
                Packaging, close-up product details and order stories add a
                more personal layer to the brand. Reel covers from the account
                bring those moments into a consistent social presentation,
                connecting the jewellery with the experience around it.
              </p>
            </div>
          </div>

          <div
            className="simkaya-social-grid simkaya-social-grid--reels"
            role="region"
            aria-label="Simkaya reel cover gallery"
            tabIndex={0}
          >
            {[1, 3, 4].map((post, index) => (
              <figure key={post}>
                <Image
                  src={`/images/work/simkaya/instagram-${post}.webp`}
                  alt={`Simkaya Instagram reel cover showing ${["branded packaging", "an international order", "jewellery details"][index]}`}
                  width={post === 1 ? 361 : 360}
                  height={640}
                  sizes="(max-width: 767px) 70vw, 30vw"
                />
              </figure>
            ))}
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
              <h2>A consistent presence. A memorable impression.</h2>
              <p>
                Simkaya&apos;s brand world connects elegant product presentation
                with social content that feels celebratory and personal. The
                jewellery leads the story, supported by a visual direction that
                carries through from packaging to campaign creative.
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
