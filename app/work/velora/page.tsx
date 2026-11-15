import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactProject from "@/components/sections/ContactProject";
import WorkWebsiteGallery from "@/components/work/WorkWebsiteGallery";

export const metadata: Metadata = {
  title: "Velora Chocolat — The Core Technology",
  description: "Website and e-commerce development for Velora Chocolat, pairing artisan chocolate photography with a filterable storefront.",
};

export default function VeloraWorkPage() {
  return (
    <main className="work-detail">
      <section className="work-detail__intro">
        <div className="work-detail__container">
          <p className="work-detail__eyebrow">Selected work</p>
          <h1>Velora Chocolat</h1>
          <p className="work-detail__summary">
            A website and storefront for an artisan chocolatier. The experience
            brings the craft behind each collection into the shop, with clear
            paths to browse individual chocolates, tasting boxes and gifts.
          </p>
          <dl className="work-detail__meta">
            <div><dt>Year</dt><dd>2026</dd></div>
            <div><dt>Industry</dt><dd>Food &amp; beverage / Artisan chocolate</dd></div>
            <div><dt>Work scope</dt><dd>Website &amp; e-commerce development</dd></div>
          </dl>
          <div className="work-detail__hero">
            <Image src="/images/work/velora/atelier.webp" alt="Chocolate flowing across a work surface in the Velora atelier" fill preload sizes="(max-width: 767px) 100vw, 1500px" />
          </div>
        </div>
      </section>

      <section className="work-detail__section">
        <div className="work-detail__container">
          <div className="work-detail__split-heading">
            <p className="work-detail__section-label"><span aria-hidden="true">+</span> The storefront</p>
            <div>
              <h2>Make the range easy to browse.</h2>
              <p>Shoppers can filter the catalogue by chocolate type or gifting, then sort the results. The product grid pairs large photographs with compact labels, making it easy to scan the range and spot seasonal items.</p>
            </div>
          </div>
          <div className="work-detail__browser">
            <div className="work-detail__browser-bar" aria-hidden="true"><span /><span /><span /></div>
            <Image
              src="/images/work/velora/website-overview.webp"
              alt="Velora Chocolat homepage introducing its craft and linking to the shop"
              width={2880}
              height={2000}
              unoptimized
            />
          </div>
        </div>
      </section>

      <WorkWebsiteGallery
        project="velora"
        heading="Two ways into the chocolate range."
        description="The shop supports browsing by chocolate type, while the collections page gives tasting boxes and gifts a more editorial presentation."
        previews={[
          "Velora shop with filters, sorting and chocolate product listings",
          "Velora collections page with its signature tasting assortment",
        ]}
      />

      <section className="work-detail__section work-detail__section--tint">
        <div className="work-detail__container">
          <div className="work-detail__split-heading">
            <p className="work-detail__section-label"><span aria-hidden="true">+</span> The visual direction</p>
            <div>
              <h2>Carry the atelier’s character into the shop.</h2>
              <p>Cocoa-brown surfaces, cream backgrounds and gold accents connect the story and shopping pages. Close-up photography brings out the texture of the chocolate, while the collections give tasting, dark chocolate and gifting distinct places to start.</p>
              <div className="work-detail__actions">
                <Link href="/work" className="work-detail__text-link">Explore all work →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactProject />
    </main>
  );
}
