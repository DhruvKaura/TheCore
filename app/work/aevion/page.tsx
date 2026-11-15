import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactProject from "@/components/sections/ContactProject";
import WorkWebsiteGallery from "@/components/work/WorkWebsiteGallery";

export const metadata: Metadata = {
  title: "AEVION — The Core Technology",
  description: "Product showcase website for AEVION, presenting its industrial LiDAR inspection platform and its applications.",
};

export default function AevionWorkPage() {
  return (
    <main className="work-detail">
      <section className="work-detail__intro">
        <div className="work-detail__container">
          <p className="work-detail__eyebrow">Selected work</p>
          <h1>AEVION</h1>
          <p className="work-detail__summary">A product showcase for AEVION’s autonomous LiDAR inspection systems. The website introduces the platform and gives infrastructure, energy and industrial teams separate paths to explore its applications.</p>
          <dl className="work-detail__meta">
            <div><dt>Year</dt><dd>2026</dd></div>
            <div><dt>Industry</dt><dd>Industrial technology / Infrastructure inspection</dd></div>
            <div><dt>Work scope</dt><dd>Website development &amp; product showcase</dd></div>
          </dl>
          <div className="work-detail__hero">
            <Image
              src="/images/work/aevion/cover.webp"
              alt="AEVION inspection drone in a pale concrete tunnel"
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
              <h2>Show the product in the environments it’s designed for.</h2>
              <p>Concrete textures and tunnel photography give the site an industrial setting. The homepage introduces the platform before directing readers to dedicated technology, solutions and software pages, where they can find details relevant to their work.</p>
            </div>
          </div>
          <div className="work-detail__browser">
            <div className="work-detail__browser-bar" aria-hidden="true"><span /><span /><span /></div>
            <Image
              src="/images/work/aevion/website-overview.webp"
              alt="AEVION homepage with the tunnel photograph and inspection-platform introduction"
              width={2880}
              height={2000}
              unoptimized
            />
          </div>
        </div>
      </section>

      <WorkWebsiteGallery
        project="aevion"
        heading="Give different audiences a clear way into the product."
        description="The Technology page presents the platform itself. The Solutions page shows how it fits different inspection settings, from civil infrastructure to energy."
        previews={[
          "AEVION Technology page showing its industrial inspection platform",
          "AEVION Solutions page showing the platform in an energy infrastructure setting",
        ]}
      />

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
