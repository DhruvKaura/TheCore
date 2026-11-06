import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ContactProject from "@/components/sections/ContactProject";

export const metadata: Metadata = {
  title: "Lumifya — The Core Technology",
  description:
    "Website development for Lumifya, combining cinematic imagery, expressive typography and a responsive digital experience.",
};

export default function LumifyaWorkPage() {
  return (
    <main className="work-detail work-detail--lumifya">
      <section className="work-detail__intro">
        <div className="work-detail__container">
          <p className="work-detail__eyebrow">Selected work</p>
          <h1>Lumifya</h1>
          <p className="work-detail__summary">
            A creative agency website that brings cinematic imagery,
            expressive typography and a confident visual rhythm into one
            immersive digital experience.
          </p>

          <dl className="work-detail__meta">
            <div>
              <dt>Year</dt>
              <dd>2026</dd>
            </div>
            <div>
              <dt>Industry</dt>
              <dd>Creative agency / Digital design</dd>
            </div>
            <div>
              <dt>Work scope</dt>
              <dd>Website development &amp; responsive implementation</dd>
            </div>
          </dl>

          <div className="work-detail__hero">
            <Image
              src="/images/work/lumifya/website-home.webp"
              alt="Lumifya homepage with cinematic portrait imagery and coral typography"
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
              <h2>Make a bold first impression. Keep the journey clear.</h2>
              <p>
                The challenge was to translate an expressive agency design into
                a working website without losing its sense of scale and drama.
                Services, selected projects and studio information needed to
                remain easy to explore within a rich, image-led experience.
              </p>
            </div>
          </div>

          <div className="work-detail__image-grid">
            <figure className="work-detail__portrait">
              <Image
                src="/images/work/lumifya/visual-identity.avif"
                alt="Warm cinematic portrait used in Lumifya's visual identity section"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </figure>
            <figure className="work-detail__portrait">
              <Image
                src="/images/work/lumifya/experience.avif"
                alt="Editorial portrait used in Lumifya's digital experience section"
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
              <h2>Strong contrast. A considered flow.</h2>
              <p>
                The implementation pairs charcoal sections with warm ivory,
                coral accents and generous typography. Repeating section labels,
                structured service rows and a clear portfolio grid guide the
                journey from the opening statement through to the contact
                section, with layouts adapted for smaller screens.
              </p>
            </div>
          </div>

          <div
            className="work-detail__page-panels work-detail__page-panels--overview"
            role="region"
            aria-label="Full Lumifya landing page in six parts"
            tabIndex={0}
          >
            {[1, 2, 3, 4, 5, 6].map((part) => (
              <figure key={part}>
                <Image
                  src={`/images/work/lumifya/website-part-${part}.webp`}
                  alt={`Lumifya landing page, part ${part} of 6, in reading order`}
                  width={1280}
                  height={part === 6 ? 2419 : 2422}
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
              The experience
            </p>
            <div>
              <h2>Let the work take the spotlight.</h2>
              <p>
                Large project previews and restrained interface details give
                the portfolio room to breathe. An alternating layout creates
                movement through the page, while consistent spacing and simple
                navigation keep the experience grounded.
              </p>
            </div>
          </div>
          <figure className="work-detail__closing-image work-detail__portfolio-preview">
            <Image
              src="/images/work/lumifya/website-work.webp"
              alt="Lumifya selected-work section with large staggered project previews"
              fill
              sizes="(max-width: 767px) 100vw, 1500px"
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
              <h2>A confident digital stage for creative work.</h2>
              <p>
                Lumifya brings a distinctive agency aesthetic into a complete
                website, balancing a cinematic opening with practical
                sections for services, projects, people and enquiries.
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
