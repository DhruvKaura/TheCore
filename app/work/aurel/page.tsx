import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactProject from "@/components/sections/ContactProject";
import WorkWebsiteGallery from "@/components/work/WorkWebsiteGallery";

export const metadata: Metadata = {
  title: "AUREL Skincare — The Core Technology",
  description: "E-commerce development for AUREL Skincare, featuring a filterable product catalogue, quick-view details and a shopping bag.",
};

export default function AurelWorkPage() {
  return (
    <main className="work-detail">
      <section className="work-detail__intro">
        <div className="work-detail__container">
          <p className="work-detail__eyebrow">Selected work</p>
          <h1>AUREL Skincare</h1>
          <p className="work-detail__summary">An e-commerce website for a skincare range organised around daily routines. The shop makes it easy to browse cleansers, treatments and moisturisers, compare products and add favourites to a bag.</p>
          <dl className="work-detail__meta">
            <div><dt>Year</dt><dd>2026</dd></div>
            <div><dt>Industry</dt><dd>Beauty / Skincare</dd></div>
            <div><dt>Work scope</dt><dd>E-commerce development</dd></div>
          </dl>
          <div className="work-detail__hero">
            <Image
              src="/images/work/aurel/hero-wide.webp"
              alt="AUREL campaign portrait with warm light and botanical shadows"
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
            <p className="work-detail__section-label"><span aria-hidden="true">+</span> The storefront</p>
            <div>
              <h2>Help shoppers find the right step in their routine.</h2>
              <p>Cleanse, Treat and Hydrate filters organise the catalogue around how the products are used. The grid shows names, prices and short descriptions alongside clear add-to-bag controls, while quick view keeps product details within reach.</p>
            </div>
          </div>
          <div className="work-detail__browser">
            <div className="work-detail__browser-bar" aria-hidden="true"><span /><span /><span /></div>
            <Image
              src="/images/work/aurel/website-overview.webp"
              alt="AUREL Skincare homepage with editorial imagery and links to the shop and brand story"
              width={2880}
              height={2000}
              unoptimized
            />
          </div>
        </div>
      </section>

      <WorkWebsiteGallery
        project="aurel"
        heading="A direct path from product discovery to the bag."
        description="The catalogue groups skincare by routine, while the brand story gives the products and packaging more context."
        previews={[
          "AUREL catalogue with skincare category filters, prices and add-to-bag controls",
          "AUREL Our Story page with brand copy and cleanser photography",
        ]}
      />

      <section className="work-detail__section work-detail__section--tint">
        <div className="work-detail__container">
          <div className="work-detail__split-heading">
            <p className="work-detail__section-label"><span aria-hidden="true">+</span> The visual direction</p>
            <div>
              <h2>Let the packaging set the tone.</h2>
              <p>Cream and olive carry the packaging palette into the storefront. Close-up product imagery and restrained typography give the details room to stand out without getting in the way of shopping.</p>
            </div>
          </div>
          <figure className="work-detail__story-preview">
            <Image
              src="/images/work/aurel/cream.webp"
              alt="AUREL Overnight Repair Cream product artwork"
              width={1024}
              height={1536}
              sizes="(max-width: 767px) 85vw, 720px"
            />
          </figure>
        </div>
      </section>

      <section className="work-detail__final">
        <div className="work-detail__container">
          <div className="work-detail__actions">
            <Link href="/work" className="work-detail__text-link">Explore all work →</Link>
            <Link href="/services/ecommerce-solutions" className="work-detail__text-link">Explore e-commerce development →</Link>
          </div>
        </div>
      </section>
      <ContactProject />
    </main>
  );
}
