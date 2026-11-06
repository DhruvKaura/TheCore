"use client";

import type { FormEvent } from "react";
import Link from "next/link";

export default function NewsletterForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") ?? "").trim();
    const subject = encodeURIComponent("Newsletter subscription request");
    const body = encodeURIComponent(`Please add ${email} to The Core Technology newsletter.\n\nI would like to receive project updates and studio news. Please confirm my subscription and how to unsubscribe.`);

    // shortcut: request subscriptions by email until a mailing-list provider is connected.
    window.location.href = `mailto:info@thecoretechnology.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="footer-newsletter__form" onSubmit={handleSubmit}>
      <label htmlFor="footer-newsletter-email">Your email address</label>
      <div className="footer-newsletter__input-row">
        <input id="footer-newsletter-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required aria-describedby="footer-newsletter-note" />
        <button type="submit">Subscribe <span aria-hidden="true">↗</span></button>
      </div>
      <p id="footer-newsletter-note">Opens an email request; your subscription is not automatic. Read our <Link href="/privacy-policy">Privacy Policy</Link>.</p>
    </form>
  );
}
