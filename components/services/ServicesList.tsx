import Image from "next/image";
import Link from "next/link";

import { services } from "@/data/services";

export default function ServicesList() {
  return (
    <section className="services-directory">

      <div className="services-directory__container">

        <h2 className="services-directory__heading">
          What we can
          <br />
          do for you
        </h2>

        <div className="services-directory__list">

          {services.map((service) => (
            <article
              className="service-list-card"
              key={service.slug}
            >

              {/* IMAGE */}

              <div className="service-list-card__image">

                <Image
                  src={service.listingImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 36vw"
                />

              </div>

              {/* CONTENT */}

              <div className="service-list-card__content">

                <span className="service-list-card__number">
                  {service.number}
                </span>

                <div className="service-list-card__copy">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.shortDescription}
                  </p>

                </div>

                {/* INFINITE CAPABILITY MARQUEE */}

                <div className="service-list-card__marquee">

                  <div className="service-list-card__marquee-track">

                    <div className="service-list-card__marquee-group">

                      {service.capabilities.map(
                        (capability) => (
                          <span
                            key={capability}
                            className="service-list-card__pill"
                          >
                            {capability}
                          </span>
                        )
                      )}

                    </div>

                    <div
                      className="service-list-card__marquee-group"
                      aria-hidden="true"
                    >

                      {service.capabilities.map(
                        (capability) => (
                          <span
                            key={`duplicate-${capability}`}
                            className="service-list-card__pill"
                          >
                            {capability}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                </div>

                {/* BOTTOM */}

                <div className="service-list-card__bottom">

                  <Link
                    href={`/services/${service.slug}`}
                    className="service-list-card__button"
                  >
                    <span>
                      See details
                    </span>
                  </Link>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}
