import Link from "next/link";
import { Braces } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <header className="not-found-header">
        <Link className="brand" href="/" aria-label="Return to justin's portfolio home">
          <span className="brand-mark" aria-hidden="true">
            <Braces size={23} />
          </span>
          <span>
            justin<span className="brand-dot">'s</span> portfolio
          </span>
        </Link>
      </header>

      <main className="not-found section-wrap">
        <div className="not-found-content">
          <p className="section-kicker">404 · PAGE NOT FOUND</p>
          <h1>This page isn’t here.</h1>
          <p>
            The page may have moved, or the address may be incorrect. Head back
            to the portfolio to continue exploring.
          </p>
          <Link className="button button-primary" href="/">
            Return to portfolio
          </Link>
        </div>
      </main>
    </>
  );
}
