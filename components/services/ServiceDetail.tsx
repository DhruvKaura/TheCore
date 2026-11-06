import Image from "next/image";
import Link from "next/link";

import type {
  ServiceItem,
} from "@/data/services";

import ContactProject from "@/components/sections/ContactProject";

type Props = {
  service: ServiceItem;
  previousService: ServiceItem;
  nextService: ServiceItem;
};

export default function ServiceDetail({
  service,
  previousService,
  nextService,
}: Props) {
  return (
    <main className="service-detail">

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="service-detail__intro">

        <div className="service-detail__container">

          <div className="service-detail__title">

            <span>
              {service.number}
            </span>

            <h1>
              {service.title}
            </h1>

            <p>
              {service.subtitle}
            </p>

          </div>

          {/* =================================================
              VISUAL PAIR
          ================================================= */}

          <div className="service-detail__visuals">

            <div className="service-detail__visual">

              <Image
                src={service.visualOne}
                alt={`${service.title} visual`}
                fill
                priority
                sizes="(max-width: 767px) 100vw, 50vw"
              />

            </div>

            <div className="service-detail__visual">

              <Image
                src={service.visualTwo}
                alt={`${service.title} creative direction`}
                fill
                priority
                sizes="(max-width: 767px) 100vw, 50vw"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="service-detail__main">

        <div className="service-detail__container">

          <div className="service-detail__content-shell">

            <article className="service-detail__content">

              {/* INTRODUCTION */}

              <section className="service-detail__section">

                <h2>
                  {service.introTitle}
                </h2>

                <p>
                  <strong>
                    {service.introLead}
                  </strong>
                  {" "}
                  {service.introDescription}
                </p>

              </section>

              {/* WHAT WE DO */}

              <section className="service-detail__section">

                <h2>
                  What We Do
                </h2>

                <p>
                  <strong>
                    {service.whatWeDoLead}
                  </strong>
                </p>

                <p>
                  {service.whatWeDoDescription}
                </p>

                <div className="service-detail__feature-list">

                  {service.whatWeDo.map(
                    (item) => (
                      <div
                        key={item.title}
                        className="service-detail__feature"
                      >
                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.description}
                        </p>
                      </div>
                    )
                  )}

                </div>

              </section>

              {/* INCLUDED */}

              <section className="service-detail__section">

                <h2>
                  What&apos;s Included
                </h2>

                <div className="service-detail__chip-grid">

                  {service.included.map(
                    (item) => (
                      <span key={item}>
                        {item}
                      </span>
                    )
                  )}

                </div>

              </section>

              {/* IDEAL FOR */}

              <section className="service-detail__section">

                <h2>
                  Who It&apos;s For
                </h2>

                <p>
                  <strong>
                    Built for businesses ready to move forward.
                  </strong>
                </p>

                <ul className="service-detail__list">

                  {service.idealFor.map(
                    (item) => (
                      <li key={item}>
                        {item}
                      </li>
                    )
                  )}

                </ul>

              </section>

              {/* PROCESS */}

              <section className="service-detail__section">

                <h2>
                  Our Process
                </h2>

                <div className="service-detail__process">

                  {service.process.map(
                    (step, index) => (
                      <div
                        key={step.title}
                        className="service-detail__process-item"
                      >

                        <span>
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </span>

                        <div>

                          <h3>
                            {step.title}
                          </h3>

                          <p>
                            {step.description}
                          </p>

                        </div>

                      </div>
                    )
                  )}

                </div>

              </section>

              {/* DELIVERABLES */}

              <section className="service-detail__section">

                <h2>
                  Deliverables
                </h2>

                <div className="service-detail__chip-grid">

                  {service.deliverables.map(
                    (item) => (
                      <span key={item}>
                        {item}
                      </span>
                    )
                  )}

                </div>

              </section>

              {/* FINAL CTA COPY */}

              <section className="service-detail__section service-detail__section--final">

                <h2>
                  Ready to get started?
                </h2>

                <p>
                  Tell us where your business is headed and we&apos;ll help
                  build the technology, experience or system to get there.
                </p>

                <Link
                  href="/contact"
                  className="service-detail__text-link"
                >
                  Start a {service.title.toLowerCase()} project
                  <span>→</span>
                </Link>

              </section>

            </article>

            {/* =================================================
                STICKY CARD
            ================================================= */}

            <aside className="service-detail__sidebar">

              <div className="service-detail__sticky-card">

                <div className="service-detail__sticky-icon">
                  <span />
                </div>

                <p>
                  Let&apos;s make your next project
                  <br />
                  worth remembering.
                </p>

                <Link
                  href="/contact"
                  className="service-detail__sticky-button"
                >
                  <span>
                    Start a Project
                  </span>
                </Link>

              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* =====================================================
          PREVIOUS AND NEXT SERVICES
      ===================================================== */}

      <section className="next-service">

        <div className="service-detail__container">

          <div className="next-service__layout">

            {[
              { label: "Previous", item: previousService, rel: "prev" },
              { label: "Next", item: nextService, rel: "next" },
            ].map(({ label, item, rel }) => (
            <Link
              key={label}
              href={`/services/${item.slug}`}
              rel={rel}
              className="next-service__card"
            >

              <div className="next-service__image">

                <Image
                  src={item.visualOne}
                  alt={item.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 420px"
                />

              </div>

              <div className="next-service__copy">

                <span>
                  {label}
                </span>

                <h2>
                  {item.title}
                </h2>

                <span className="next-service__arrow">
                  {rel === "prev" ? "↖" : "↗"}
                </span>

              </div>

            </Link>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          EXISTING FORM
      ===================================================== */}

      <ContactProject />

    </main>
  );
}
