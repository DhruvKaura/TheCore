import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — The Core Technology",
  description: "How The Core Technology handles website enquiries and personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <p className="legal-page__eyebrow">Privacy & transparency</p>
      <h1>Privacy Policy</h1>
      <p className="legal-page__updated">Last updated: 6 November 2026</p>
      <p>This policy describes how The Core Technology handles personal information in connection with this website and enquiries about our services. Contact us at info@thecoretechnology.com about this policy or your information.</p>
      <section><h2>Information you share</h2><p>When you contact us, you may share your name, email address, company, selected services and project details. Please do not include passwords, financial credentials or sensitive personal information in an enquiry.</p></section>
      <section><h2>How the enquiry form works</h2><p>The website form opens a draft in your email application with the details you entered. The form does not submit those details to a website database. We receive the enquiry only when you send the email. Your email provider processes the draft and message under its own terms.</p></section>
      <section><h2>How information is used</h2><p>Enquiry information is used to respond, discuss requirements, prepare proposals and manage related communications. If a project proceeds, its agreement may describe additional processing. We do not use the enquiry form to enrol you in a marketing list.</p></section>
      <section><h2>Newsletter requests</h2><p>The newsletter form opens an email draft requesting studio updates for the address you enter. It does not automatically subscribe you or save the address in a website database. Send the email to make your request; subscription arrangements and how to unsubscribe will be confirmed separately. You can contact us to withdraw your request.</p></section>
      <section><h2>Website delivery and service providers</h2><p>Delivering a website involves technical information such as an IP address, browser details and requested pages. Hosting, security and email providers may process this information to deliver their services. Their processing locations and retention depend on the providers used; contact us for details about the current arrangements.</p></section>
      <section><h2>Retention and access</h2><p>Enquiry correspondence is retained as needed for the discussion, related business records and applicable obligations. The appropriate period depends on the relationship and the information involved. Contact us to ask about retention or request deletion of your correspondence.</p></section>
      <section><h2>Your requests</h2><p>You can contact us to request access, correction or deletion of your personal information, or to raise an objection to its use. Depending on applicable law, you may have additional rights, including withdrawal of consent where processing relies on consent and the right to complain to your local data protection authority. We may need to verify your identity before responding.</p></section>
      <section><h2>Cookies and external links</h2><p>The current website does not implement advertising or analytics trackers in its application code. Our Cookie Policy explains browser storage and your controls. External websites have their own privacy practices.</p></section>
      <section><h2>Updates</h2><p>We may update this notice when the website or our practices change. The date above identifies the latest revision.</p></section>
    </>
  );
}
