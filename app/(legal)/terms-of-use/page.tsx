import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — The Core Technology",
  description: "Terms for using The Core Technology website and making service enquiries.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <p className="legal-page__eyebrow">Website terms</p>
      <h1>Terms of Use</h1>
      <p className="legal-page__updated">Last updated: 6 November 2026</p>
      <p>These terms apply to your use of The Core Technology website. They explain the purpose of the site, acceptable use and the distinction between an enquiry and a project agreement.</p>
      <section><h2>Using this website</h2><p>You may browse the website and contact us about our services. Do not misuse the site, interfere with its operation, attempt unauthorised access or use it to send unlawful or harmful material.</p></section>
      <section><h2>Enquiries and project agreements</h2><p>Sending an enquiry does not create a client relationship, confirm availability or commit either party to a project. Scope, pricing, payment, delivery, revisions, intellectual property and any ongoing support are agreed separately in writing before work begins.</p></section>
      <section><h2>Content and ownership</h2><p>Website text, design, code and creative materials are protected by applicable intellectual property rights. Project names, logos, photography and other third-party materials remain subject to their respective owners’ rights. Displaying portfolio work does not grant visitors permission to reproduce or commercially reuse it.</p></section>
      <section><h2>Information and availability</h2><p>We aim to keep website information useful and current, but content may change and the website may occasionally be unavailable. Portfolio descriptions are provided for general information, not as a guarantee of the outcome of a future project.</p></section>
      <section><h2>Third-party services</h2><p>External links and services are outside our control. Your use of them is subject to their terms and privacy practices. A link does not transfer responsibility for their content to us.</p></section>
      <section><h2>Responsibility</h2><p>Use appropriate care when relying on general website information. Nothing in these terms excludes rights or responsibilities that cannot lawfully be excluded. Specific commitments and responsibilities for paid services are set out in the applicable project agreement.</p></section>
      <section><h2>Changes and questions</h2><p>These terms may be updated as the website evolves. Updates apply to future use of the site and do not replace an existing written project agreement. Contact info@thecoretechnology.com with questions.</p></section>
    </>
  );
}
