import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell narrow">
      <section className="result-card">
        <div className="result-icon">?</div>
        <div className="eyebrow">404 · NOT FOUND</div>
        <h1>That page doesn't exist.</h1>
        <p>Let's get you back to the English 8 lesson.</p>
        <Link className="button primary" href="/">
          Back Home
        </Link>
      </section>
    </div>
  );
}
