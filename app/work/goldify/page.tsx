import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ContactProject from "@/components/sections/ContactProject";

export const metadata: Metadata = {
  title: "Goldify — The Core Technology",
  description:
    "Website development for Goldify, combining a premium gold-market analytics presentation with clear information and a responsive interface.",
};

export default function GoldifyWorkPage() {
  return (
    <main className="work-detail work-detail--goldify">
      <section className="work-detail__intro">
        <div className="work-detail__container">
          <p className="work-detail__eyebrow">Selected work</p>
          <h1>Goldify</h1>
          <p className="work-detail__summary">
            A focused website for Goldify’s gold-market analytics platform.
            A rich black-and-gold visual direction meets clear
            information, thoughtful interactions and a focused product story.
          </p>

          <dl className="work-detail__meta">
            <div>
              <dt>Year</dt>
              <dd>2026</dd>
            </div>
            <div>
              <dt>Industry</dt>
              <dd>Fintech / Market analytics</dd>
            </div>
            <div>
              <dt>Work scope</dt>
              <dd>Website development &amp; responsive interface</dd>
            </div>
          </dl>

          <div className="work-detail__hero">
            <Image
              src="/images/work/goldify/cover.webp"
              alt="Sculptural gold monoliths above a black obsidian base, created as Goldify cover artwork"
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
              <h2>Bring clarity to a complex product story.</h2>
              <p>
                Market-analysis tools can feel dense before the user has even
                started exploring. The challenge was to present Goldify
                with a clear hierarchy: explain the product, introduce
                its analytical views and make the wider workflow easy to
                understand, without losing its distinctive visual identity.
              </p>
            </div>
          </div>

          <div className="work-detail__browser goldify-site-preview">
            <div className="work-detail__browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <Image
              src="/images/work/goldify/website-home.webp"
              alt="Goldify landing-page introduction with editorial typography, gold market visualisation and dark styling"
              width={1280}
              height={1046}
              sizes="(max-width: 767px) 100vw, 1050px"
            />
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
              <h2>Premium in character. Deliberate in structure.</h2>
              <p>
                Dark surfaces and warm gold accents establish a restrained
                visual system. Editorial headlines introduce each section,
                while feature cards, workflow steps and plan comparisons break
                the product story into manageable pieces. The responsive
                implementation carries that hierarchy across screen sizes.
              </p>
            </div>
          </div>

          <div
            className="work-detail__page-panels work-detail__page-panels--overview"
            role="region"
            aria-label="Goldify landing page in six compact panels"
            tabIndex={0}
          >
            {[1, 2, 3, 4, 5, 6].map((part) => (
              <figure key={part}>
                <Image
                  src={`/images/work/goldify/website-part-${part}.webp`}
                  alt={`Goldify landing page, part ${part} of 6, in reading order`}
                  width={1280}
                  height={part === 6 ? 2192 : 2197}
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
              The interface
            </p>
            <div>
              <h2>Keep the signal and its context together.</h2>
              <p>
                The feature presentation uses charts, scenario comparisons and
                concise explanations to communicate the product’s analytical
                workflow. Consistent spacing, contrast and typography keep
                the interface presentation clear and easy to follow.
              </p>
            </div>
          </div>
          <figure className="work-detail__closing-image goldify-feature-preview">
            <Image
              src="/images/work/goldify/website-features.webp"
              alt="Goldify feature cards demonstrating contextual signals and human-controlled analysis views"
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
              <h2>A clear foundation for a focused product experience.</h2>
              <p>
                Goldify brings a premium visual language to its market
                analytics website. From the opening statement to features,
                pricing and FAQs, the website makes a complex product easier
                to explore through a coherent frontend experience.
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
