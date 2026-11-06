import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__glow" />

      <div className="not-found__container">
        <div className="not-found__code" aria-hidden="true">
          404
        </div>

        <div className="not-found__content">
          <span>Page not found</span>

          <h1>This page went off-grid.</h1>

          <p>
            The page you&apos;re looking for may have moved, changed, or never
            existed. Let&apos;s get you back somewhere useful.
          </p>

          <div className="not-found__actions">
            <Link href="/" className="not-found__primary">
              Back to home
            </Link>

            <Link href="/contact" className="not-found__secondary">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
