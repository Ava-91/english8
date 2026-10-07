"use client";

export default function WorldMapError({ reset }) {
  return (
    <div className="page-shell narrow">
      <section className="result-card error-card" role="alert">
        <div className="result-icon">!</div>
        <div className="eyebrow">MAP ERROR</div>
        <h1>The map could not load</h1>
        <p>
          The map data is bundled with this app. Try refreshing the map before
          continuing.
        </p>
        <button className="button primary" onClick={() => reset()}>
          Try Again
        </button>
      </section>
    </div>
  );
}
