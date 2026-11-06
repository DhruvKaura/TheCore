"use client";

import { useState } from "react";

const faqs = [
  {
    question:
      "Do you take one-off projects or ongoing engagements?",
    answer:
      "Both. We work on focused one-off projects as well as ongoing technology partnerships. After launch, we can continue supporting, improving and scaling the product as your requirements evolve.",
  },
  {
    question:
      "What services does The Core Technology provide?",
    answer:
      "Our capabilities include web design and development, software solutions, e-commerce, branding, SEO, social media marketing, cyber security, IT support and automation-focused digital solutions.",
  },
  {
    question:
      "What kind of businesses do you work with?",
    answer:
      "We work with startups, growing businesses and established companies. What matters most is having a clear problem to solve and the ambition to build something thoughtful, useful and technically sound.",
  },
  {
    question:
      "How long does a typical project take?",
    answer:
      "Timelines depend on the scope and complexity. A focused website may take a few weeks, while larger platforms and custom software products can require several phases. We define the delivery plan clearly before development begins.",
  },
  {
    question:
      "What is included in a typical project?",
    answer:
      "Depending on the project, this can include discovery, strategy, UX planning, visual design, development, integrations, testing, deployment and launch support. The exact scope is agreed before work begins.",
  },
  {
    question:
      "What makes The Core Technology different?",
    answer:
      "We bring design and engineering into the same process. Instead of treating strategy, visual design and development as disconnected services, we approach them as one digital system built around your business goals.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      className="faq-section"
      id="faq"
    >
      <div className="faq-section__container">

        {/* =========================================
            HEADING
        ========================================= */}

        <div className="faq-section__header">
          <h2>
            Everything you
            <br />
            need to know.
          </h2>
        </div>

        {/* =========================================
            CONTENT
        ========================================= */}

        <div className="faq-section__panel">

          {/* =====================================
              LEFT CONTACT CARD
          ===================================== */}

          <aside className="faq-section__contact">

            <div className="faq-section__contact-top">

              <span className="faq-section__eyebrow">
                Have something in mind?
              </span>

              <h3>
                Looking for something
                specific?
              </h3>

              <p>
                Every strong digital product
                starts with a clear idea.
                Tell us what you&apos;re
                planning and we&apos;ll help
                you find the right way
                forward.
              </p>

              <a
                href="mailto:info@thecoretechnology.com"
                className="faq-section__cta"
              >
                <span>
                  Start a conversation
                </span>

                <span
                  className="faq-section__cta-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>

            </div>

            <div className="faq-section__email">

              <span>
                Prefer email?
              </span>

              <a href="mailto:info@thecoretechnology.com">
                info@thecoretechnology.com
              </a>

            </div>

          </aside>

          {/* =====================================
              ACCORDION
          ===================================== */}

          <div className="faq-section__accordion">

            {faqs.map((faq, index) => {
              const isOpen =
                activeIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`faq-item ${
                    isOpen
                      ? "faq-item--open"
                      : ""
                  }`}
                >

                  <button
                    type="button"
                    className="faq-item__button"
                    onClick={() =>
                      toggleFAQ(index)
                    }
                    aria-expanded={isOpen}
                  >

                    <div className="faq-item__question">

                      <span className="faq-item__number">
                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span>
                        {faq.question}
                      </span>

                    </div>

                    <span
                      className="faq-item__icon"
                      aria-hidden="true"
                    >
                      <span />
                      <span />
                    </span>

                  </button>

                  {/* ANSWER */}

                  <div className="faq-item__answer-wrapper">

                    <div className="faq-item__answer-inner">

                      <p>
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}