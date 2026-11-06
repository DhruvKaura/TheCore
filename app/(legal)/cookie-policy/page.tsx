import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy — The Core Technology",
  description: "Information about cookies, browser storage and privacy controls on this website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <p className="legal-page__eyebrow">Browser privacy</p>
      <h1>Cookie Policy</h1>
      <p className="legal-page__updated">Last updated: 6 November 2026</p>
      <p>This policy explains cookies and similar browser storage in relation to The Core Technology website.</p>
      <section><h2>What cookies are</h2><p>Cookies are small pieces of information a website can store in your browser. Similar technologies include local storage and tracking pixels. Their purposes can range from essential functionality to audience measurement and advertising.</p></section>
      <section><h2>The current website</h2><p>The current application does not set its own cookies or local-storage entries and does not include analytics or advertising trackers. Service selections in the enquiry form are held in page memory and are not saved as a browser preference.</p></section>
      <section><h2>Hosting and external services</h2><p>Infrastructure providers may process technical requests to deliver and protect the site. Cookies or other features introduced by the hosting environment need to be assessed separately from the application. Following an external link or opening your email application takes you to a service with its own policies.</p></section>
      <section><h2>Your browser controls</h2><p>You can inspect, block or delete cookies and site data in your browser’s privacy settings. Settings may apply differently across browsers and devices, and blocking storage can affect functionality on websites that rely on it.</p></section>
      <section><h2>Future changes</h2><p>If optional tracking is added, this policy and the site’s privacy controls will need to be updated before it is enabled, including consent controls where required. This policy does not itself enable or authorise optional tracking.</p></section>
      <section><h2>More information</h2><p>Read our <Link href="/privacy-policy">Privacy Policy</Link> for information about enquiries and personal data, or contact info@thecoretechnology.com.</p></section>
    </>
  );
}
