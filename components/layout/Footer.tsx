import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import NewsletterForm from "@/components/layout/NewsletterForm";

const explore = [
  ["Home", "/"],
  ["About us", "/about"],
  ["Services", "/services"],
  ["Work", "/work"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <section className="footer-newsletter" aria-labelledby="footer-newsletter-heading">
          <div className="footer-newsletter__intro">
            <p className="footer-newsletter__eyebrow">The Core newsletter</p>
            <h2 id="footer-newsletter-heading">A little inspiration.<br />Straight to your inbox.</h2>
            <p>Fresh projects, studio news and useful perspectives on design and technology.</p>
          </div>
          <NewsletterForm />
        </section>

        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link href="/" className="site-footer__wordmark" aria-label="The Core Technology home">
              <Image src="/images/brand/the-core-technology-logo.svg" alt="The Core Technology" width={230} height={85} />
            </Link>
            <address className="site-footer__contact">
              <a href="tel:+919877027929"><span aria-hidden="true">↗</span>+91 98770 27929</a>
              <a href="tel:+919779401255"><span aria-hidden="true">↗</span>+91 97794 01255</a>
              <a href="mailto:info@thecoretechnology.com"><span aria-hidden="true">↗</span>info@thecoretechnology.com</a>
              <p><span aria-hidden="true">⌖</span>Visit us — Coming soon</p>
            </address>
          </div>

          <nav className="site-footer__column" aria-label="Footer explore">
            <h2>Explore</h2>
            <ul>{explore.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
          </nav>

          <nav className="site-footer__column" aria-label="Footer services">
            <h2>Services</h2>
            <ul>{services.map((service) => <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.title}</Link></li>)}</ul>
          </nav>

          <div className="site-footer__column">
            <h2>Social</h2>
            <ul>
              {/* Profile URLs are pending; do not send visitors to guessed accounts. */}
              {["Instagram", "X", "LinkedIn"].map((name) => <li key={name}><span className="site-footer__pending">{name}</span></li>)}
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} The Core Technology. All rights reserved.</p>
          <nav aria-label="Legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
