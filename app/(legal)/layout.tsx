import Link from "next/link";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="legal-page">
      <div className="legal-page__container">
        <Link href="/" className="legal-page__back">← Back to home</Link>
        <article>{children}</article>
        <p className="legal-page__contact">Questions? <a href="mailto:info@thecoretechnology.com">info@thecoretechnology.com</a></p>
      </div>
    </main>
  );
}
