import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactProject from "@/components/sections/ContactProject";
import WorkWebsiteGallery from "@/components/work/WorkWebsiteGallery";

export const metadata: Metadata = {
  title: "AUREVÉ — The Core Technology",
  description: "Branding and portfolio website development for AUREVÉ, an interior design studio with an editorial approach to presenting its spaces.",
};

export default function AureveWorkPage() {
  return (
    <main className="work-detail">
      <section className="work-detail__intro">
        <div className="work-detail__container">
          <p className="work-detail__eyebrow">Selected work</p>
          <h1>AUREVÉ</h1>
          <p className="work-detail__summary">Branding and a portfolio website for an interior design studio. The site gives the work room to speak for itself, while making the studio’s approach, services and enquiry process easy to find.</p>
          <dl className="work-detail__meta">
            <div><dt>Year</dt><dd>2026</dd></div>
            <div><dt>Industry</dt><dd>Interior Design / Architecture</dd></div>
            <div><dt>Work scope</dt><dd>Branding &amp; portfolio website development</dd></div>
          </dl>
          <div className="work-detail__hero">
            <Image
              src="/images/work/aureve/cover.webp"
              alt="Contemporary living room with sculptural furniture featured on the AUREVÉ homepage"
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
            <p className="work-detail__section-label"><span aria-hidden="true">+</span> The portfolio</p>
            <div>
              <h2>Give each space room to tell its story.</h2>
              <p>The portfolio starts with large photographs and concise project details, then leads visitors into individual project pages. The studio, services and journal pages give prospective clients more context before they enquire.</p>
            </div>
          </div>
          <div className="work-detail__browser">
            <div className="work-detail__browser-bar" aria-hidden="true"><span /><span /><span /></div>
            <Image
              src="/images/work/aureve/website-overview.webp"
              alt="AUREVÉ homepage with the studio wordmark and an interior-led hero"
              width={2880}
              height={2000}
              unoptimized
            />
          </div>
        </div>
      </section>

      <WorkWebsiteGallery
        project="aureve"
        heading="From a portfolio overview into a project."
        description="Large images lead into individual project pages that give each space room for context and material details."
        previews={[
          "AUREVÉ projects index with The Still House at the top",
          "The Still House project detail page with an interior photograph and project narrative",
        ]}
      />

      <section className="work-detail__section work-detail__section--tint">
        <div className="work-detail__container">
          <div className="work-detail__split-heading">
            <p className="work-detail__section-label"><span aria-hidden="true">+</span> The brand identity</p>
            <div>
              <h2>A quieter identity for spaces with character.</h2>
              <p>An understated wordmark, expressive serif typography and a palette of warm neutrals set the tone. Generous spacing and image-led layouts carry that identity from the homepage to the project pages.</p>
            </div>
          </div>
          <figure className="work-detail__closing-image">
            <Image
              src="/images/work/aureve/still-house.webp"
              alt="The Still House interior with timber finishes and full-height glazing"
              fill
              sizes="(max-width: 767px) 100vw, 1500px"
            />
          </figure>
        </div>
      </section>

      <section className="work-detail__final">
        <div className="work-detail__container">
          <div className="work-detail__actions">
            <Link href="/work" className="work-detail__text-link">Explore all work →</Link>
            <Link href="/services/web-design-development" className="work-detail__text-link">Explore website development →</Link>
          </div>
        </div>
      </section>
      <ContactProject />
    </main>
  );
}
