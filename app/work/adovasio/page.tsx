import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ContactProject from "@/components/sections/ContactProject";

export const metadata: Metadata = {
  title: "Adovasio — The Core Technology",
  description:
    "Website development for Adovasio, bringing wedding photography together with editorial typography and a responsive portfolio.",
};

export default function AdovasioWorkPage() {
  return (
    <main className="work-detail work-detail--adovasio">
      <section className="work-detail__intro">
        <div className="work-detail__container">
          <p className="work-detail__eyebrow">Selected work</p>
          <h1>Adovasio</h1>
          <p className="work-detail__summary">
            An editorial wedding photography website that gives emotional
            imagery, elegant typography and destination stories the space to
            make a lasting impression.
          </p>

          <dl className="work-detail__meta">
            <div>
              <dt>Year</dt>
              <dd>2026</dd>
            </div>
            <div>
              <dt>Industry</dt>
              <dd>Wedding photography / Creative portfolio</dd>
            </div>
            <div>
              <dt>Work scope</dt>
              <dd>Website development &amp; responsive implementation</dd>
            </div>
          </dl>

          <div className="work-detail__hero">
            <Image
              src="/images/work/adovasio/website-home.webp"
              alt="Adovasio homepage with oversized editorial typography and wedding photography"
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
              <h2>Create a quiet frame for unforgettable moments.</h2>
              <p>
                A photography portfolio needs to communicate atmosphere while
                making the work easy to explore. The challenge was to balance
                large, expressive type with intimate images, giving individual
                wedding stories their own presence without overwhelming the
                journey through the site.
              </p>
            </div>
          </div>

          <div className="work-detail__image-grid">
            <figure className="work-detail__portrait">
              <Image
                src="/images/work/adovasio/couple.jpg"
                alt="Couple by the sea, photographed in Adovasio's wedding portfolio"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </figure>
            <figure className="work-detail__portrait">
              <Image
                src="/images/work/adovasio/celebration.jpg"
                alt="Wedding celebration featured in Adovasio's selected stories"
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
              <h2>An editorial rhythm, from first glance to final frame.</h2>
              <p>
                Warm ivory and deep olive provide a restrained backdrop for the
                photography. Oversized serif headlines establish the mood,
                while staggered story previews, generous spacing and understated
                navigation create a deliberate flow from the introduction to
                the portfolio and enquiry sections.
              </p>
            </div>
          </div>

          <div
            className="work-detail__page-panels work-detail__page-panels--overview"
            role="region"
            aria-label="Full Adovasio landing page in three parts"
            tabIndex={0}
          >
            {[1, 2, 3].map((part) => (
              <figure key={part}>
                <Image
                  src={`/images/work/adovasio/website-part-${part}.webp`}
                  alt={`Adovasio landing page, part ${part} of 3, in reading order`}
                  width={1280}
                  height={part === 3 ? 1866 : 1867}
                  sizes="(max-width: 767px) 78vw, 33vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="work-detail__section">
        <div className="work-detail__container">
          <div className="work-detail__split-heading">
            <p className="work-detail__section-label">
              <span aria-hidden="true">+</span>
              The experience
            </p>
            <div>
              <h2>Every story deserves room to breathe.</h2>
              <p>
                The selected-stories layout mixes image scale and placement to
                feel more like an editorial spread than a catalogue. Small
                location labels and simple story links bring structure to the
                imagery, with additional stories collected in a concise list.
              </p>
            </div>
          </div>
          <div className="work-detail__story-preview">
            <Image
              src="/images/work/adovasio/website-stories.webp"
              alt="Adovasio's selected wedding stories arranged in a staggered editorial layout"
              width={1280}
              height={2222}
              sizes="(max-width: 767px) 85vw, 720px"
            />
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
              <h2>A digital portfolio with a timeless point of view.</h2>
              <p>
                Adovasio brings photography and typography together in a calm,
                distinctive website. The result is a considered space for
                destination stories, a personal introduction and the beginning
                of a conversation with prospective couples.
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
