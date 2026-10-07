import Link from "next/link";

const features = [
  {
    icon: "🌍",
    title: "Explore",
    text: "Click countries and learn the nationality used for people from each place.",
    href: "/world-map",
  },
  {
    icon: "📚",
    title: "Learn",
    text: "Review useful vocabulary, questions, answers, and sentence patterns.",
    href: "/lesson-1",
  },
  {
    icon: "🧠",
    title: "Practice",
    text: "Test country and nationality knowledge with short interactive questions.",
    href: "/practice",
  },
];

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
            <div className="feature-icon">{feature.icon}</div>
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
