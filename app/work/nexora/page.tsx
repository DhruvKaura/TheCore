import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactProject from "@/components/sections/ContactProject";
import WorkWebsiteGallery from "@/components/work/WorkWebsiteGallery";

export const metadata: Metadata = {
  title: "Nexora Education — The Core Technology",
  description: "Website development for Nexora Education, bringing its project-led programmes, learning approach and resources together in a responsive site.",
};

export default function NexoraWorkPage() {
  return (
    <main className="work-detail">
      <section className="work-detail__intro">
        <div className="work-detail__container">
          <p className="work-detail__eyebrow">Selected work</p>
          <h1>Nexora Education</h1>
          <p className="work-detail__summary">
            A website for practical, project-led education. It helps organisations,
            teams and independent learners understand how Nexora teaches, compare
            programmes and prepare an enquiry.
          </p>
          <dl className="work-detail__meta">
            <div><dt>Year</dt><dd>2026</dd></div>
            <div><dt>Industry</dt><dd>Education / Professional learning</dd></div>
            <div><dt>Work scope</dt><dd>Responsive website development</dd></div>
          </dl>
          <div className="work-detail__hero">
            <Image src="/images/work/nexora/cover.webp" alt="Adult learners in a bright classroom" fill preload sizes="(max-width: 767px) 100vw, 1500px" />
          </div>
        </div>
      </section>

      <section className="work-detail__section">
        <div className="work-detail__container">
          <div className="work-detail__split-heading">
            <p className="work-detail__section-label"><span aria-hidden="true">+</span> The challenge</p>
            <div>
              <h2>Make a different way of learning easy to understand.</h2>
              <p>The site needed to explain how project-led learning works while giving visitors direct access to programme details. The homepage gives those two paths equal weight: explore what to learn or see how the learning experience is structured.</p>
            </div>
          </div>
          <div className="work-detail__browser">
            <div className="work-detail__browser-bar" aria-hidden="true"><span /><span /><span /></div>
            <Image
              src="/images/work/nexora/website-overview.webp"
              alt="Nexora Education homepage with a programme call to action and classroom photography"
              width={2880}
              height={2000}
              unoptimized
            />
          </div>
        </div>
      </section>

      <WorkWebsiteGallery
        project="nexora"
        heading="From choosing a programme to understanding the learning experience."
        description="The interior pages explain the programme formats and show learners what to expect at each stage."
        previews={[
          "Nexora programme formats and the Future-Ready Leadership programme",
          "Nexora learning experience showing the stages from framing a question to reflection",
        ]}
      />

      <section className="work-detail__section work-detail__section--tint">
        <div className="work-detail__container">
          <div className="work-detail__split-heading">
            <p className="work-detail__section-label"><span aria-hidden="true">+</span> The visual direction</p>
            <div>
              <h2>A clear route from programme discovery to enquiry.</h2>
              <p>A cream and cobalt palette pairs with classroom photography and bold typography. Featured programmes are organised into cards, while dedicated pages make room for the learning approach and resources without crowding the homepage.</p>
            </div>
          </div>
          <figure className="work-detail__closing-image">
            <Image src="/images/work/nexora/classroom.webp" alt="A facilitator leading a learning session" fill sizes="(max-width: 767px) 100vw, 1500px" />
          </figure>
        </div>
      </section>

      <section className="work-detail__final">
        <div className="work-detail__container">
          <Link href="/work" className="work-detail__text-link">Explore all work →</Link>
        </div>
      </section>
      <ContactProject />
    </main>
  );
}
