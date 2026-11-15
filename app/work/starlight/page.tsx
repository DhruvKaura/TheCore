import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactProject from "@/components/sections/ContactProject";

export const metadata: Metadata = {
  title: "Starlight Park — The Core Technology",
  description: "Website development for Starlight Park, with an illustrated homepage, park experiences, events and visitor information.",
};

export default function StarlightWorkPage() {
  return (
    <main className="work-detail">
      <section className="work-detail__intro">
        <div className="work-detail__container">
          <p className="work-detail__eyebrow">Selected work</p>
          <h1>Starlight Park</h1>
          <p className="work-detail__summary">A public-facing website for Starlight Park. The site introduces the landscape and its activities, then gives visitors clear routes to events, nature programmes and practical information for planning a visit.</p>
          <dl className="work-detail__meta">
            <div><dt>Year</dt><dd>2026</dd></div>
            <div><dt>Industry</dt><dd>Parks / Public spaces</dd></div>
            <div><dt>Work scope</dt><dd>Responsive website development</dd></div>
          </dl>
          <div className="work-detail__hero work-detail__hero--starlight">
            <Image
              src="/images/work/starlight/cover.webp"
              alt="Floating island illustration with wooded paths and waterfalls"
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
            <p className="work-detail__section-label"><span aria-hidden="true">+</span> The website</p>
            <div>
              <h2>Make the park easy to explore before a visit.</h2>
              <p>A floating-island illustration, oversized type and a soft green palette set the tone. The navigation separates experiences, events and visitor information so people can move directly from discovering the park to planning their time there.</p>
            </div>
          </div>
          <div className="work-detail__browser">
            <div className="work-detail__browser-bar" aria-hidden="true"><span /><span /><span /></div>
            <Image
              src="/images/work/starlight/website-home.webp"
              alt="Starlight Park homepage with the floating island illustration and navigation for experiences, events and visiting"
              width={1440}
              height={1050}
              sizes="(max-width: 767px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      <section className="work-detail__final">
        <div className="work-detail__container">
          <div className="work-detail__actions">
            <Link href="/work" className="work-detail__text-link">Explore all work →</Link>
          </div>
        </div>
      </section>
      <ContactProject />
    </main>
  );
}
