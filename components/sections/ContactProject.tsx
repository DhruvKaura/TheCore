"use client";

import {
  FormEvent,
  useState,
} from "react";

const services = [
  "Web Design & Development",
  "Software Solutions",
  "E-Commerce Solutions",
  "Branding",
  "SEO",
  "Social Media Marketing",
  "Cyber Security",
  "IT Support",
];

export default function ContactProject() {
  const [selectedServices, setSelectedServices] =
    useState<string[]>([
      "Web Design & Development",
    ]);

  const toggleService = (
    service: string
  ) => {
    setSelectedServices(
      (current) =>
        current.includes(service)
          ? current.filter(
              (item) =>
                item !== service
            )
          : [
              ...current,
              service,
            ]
    );
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form =
      new FormData(
        event.currentTarget
      );

    const name =
      form.get("name") ?? "";

    const email =
      form.get("email") ?? "";

    const company =
      form.get("company") ?? "";

    const message =
      form.get("message") ?? "";

    const subject =
      encodeURIComponent(
        `Project enquiry from ${name}`
      );

    const body =
      encodeURIComponent(
        [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company}`,
          "",
          `Interested in:`,
          selectedServices.join(
            ", "
          ),
          "",
          `Project details:`,
          message,
        ].join("\n")
      );

    window.location.href =
      `mailto:info@thecoretechnology.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="contact-project"
      id="contact"
    >
      <div className="contact-project__container">

        <h2>
          Let&apos;s build
          <br />
          something meaningful.
        </h2>

        <div className="contact-project__grid">

          {/* LEFT */}

          <aside className="contact-project__info">

            <div>

              <span className="contact-project__eyebrow">
                Start a project
              </span>

              <h3>
                Have something
                in mind?
              </h3>

              <p>
                From websites and
                software to digital
                products and automation,
                tell us what you&apos;re
                planning and we&apos;ll
                help shape the right way
                forward.
              </p>

            </div>

            <div className="contact-project__details">

              <div>
                <span>
                  Email
                </span>

                <a href="mailto:info@thecoretechnology.com">
                  info@thecoretechnology.com
                </a>
              </div>

              <div>
                <span>
                  Based in
                </span>

                <strong>
                  Olten, Switzerland
                </strong>
              </div>

            </div>

          </aside>

          {/* FORM */}

          <form
            className="contact-project__form"
            onSubmit={
              handleSubmit
            }
          >

            <div className="contact-project__service-group">

              <span>
                I&apos;m interested in
              </span>

              <div className="contact-project__services">

                {services.map(
                  (service) => {
                    const active =
                      selectedServices.includes(
                        service
                      );

                    return (
                      <button
                        key={
                          service
                        }
                        type="button"
                        onClick={() =>
                          toggleService(
                            service
                          )
                        }
                        className={
                          active
                            ? "contact-project__service contact-project__service--active"
                            : "contact-project__service"
                        }
                      >
                        <span className="contact-project__service-dot" />

                        {
                          service
                        }
                      </button>
                    );
                  }
                )}

              </div>

            </div>

            <label className="contact-project__field">

              <span>
                Name*
              </span>

              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
              />

            </label>

            <label className="contact-project__field">

              <span>
                Email*
              </span>

              <input
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />

            </label>

            <label className="contact-project__field">

              <span>
                Company
              </span>

              <input
                name="company"
                type="text"
                placeholder="Company name"
              />

            </label>

            <label className="contact-project__field contact-project__field--message">

              <span>
                Message*
              </span>

              <textarea
                name="message"
                placeholder="Tell us about the project"
                required
              />

            </label>

            <button
              type="submit"
              className="contact-project__submit"
            >
              <span>
                Send Message
              </span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}