import Link from "next/link";

const features = [
  {
    icon: "map",
    title: "Explore",
    text: "Click countries and learn the nationality used for people from each place.",
    href: "/world-map",
  },
  {
    icon: "book",
    title: "Learn",
    text: "Review useful vocabulary, questions, answers, and sentence patterns.",
    href: "/lesson-1",
  },
  {
    icon: "quiz",
    title: "Practice",
    text: "Test country and nationality knowledge with short interactive questions.",
    href: "/practice",
  },
];

function FeatureIcon({ name }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "map") {
    return <svg {...common}><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15" /></svg>;
  }
  if (name === "book") {
    return <svg {...common}><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5zM4 4.5v17M7 6h9M7 10h9M7 14h6" /></svg>;
  }
  return <svg {...common}><path d="M7 3h10a2 2 0 0 1 2 2v16H5V5a2 2 0 0 1 2-2Z" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>;
}

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="hero">
        <div className="eyebrow">ENGLISH 8 · LESSON 1</div>
        <h1>My <span>Nationality</span></h1>
        <p className="hero-copy">
          Learn how to talk about countries and nationalities through an
          interactive lesson made for English 8.
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="/lesson-1">Start Lesson →</Link>
          <Link className="button secondary" href="/world-map">Explore the Map</Link>
        </div>
      </section>

      <section className="feature-grid" aria-label="Website sections">
        {features.map((feature) => (
          <Link className="feature-card" href={feature.href} key={feature.title}>
            <div className="feature-icon"><FeatureIcon name={feature.icon} /></div>
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
            <span className="card-link">Open →</span>
          </Link>
        ))}
      </section>

      <section className="section-card lesson-preview">
        <div>
          <div className="section-kicker">THE LESSON</div>
          <h2>Country · Nationality · Identity</h2>
          <p>
            Start with the basic question-and-answer patterns, then use the
            world map and practice activities to reinforce them.
          </p>
        </div>
        <Link className="text-link" href="/lesson-1">View Lesson 1 →</Link>
      </section>
    </div>
  );
}
