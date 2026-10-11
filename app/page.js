import Link from "next/link";

const features = [
  { icon: "map", title: "Explore the world", text: "Pick a country and discover what people from there are called.", href: "/world-map", label: "Open the map", tone: "mint" },
  { icon: "book", title: "Learn the lesson", text: "Practice the useful words and sentence patterns from Lesson 1.", href: "/lessons", label: "Explore lessons", tone: "purple" },
  { icon: "quiz", title: "Play & practice", text: "Answer quick questions, get instant feedback, and see your score.", href: "/practice", label: "Take the quiz", tone: "coral" },
];

function FeatureIcon({ name }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" };
  if (name === "map") return <svg {...common}><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15" /></svg>;
  if (name === "book") return <svg {...common}><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5zM4 4.5v17M7 6h9M7 10h9M7 14h6" /></svg>;
  return <svg {...common}><path d="M7 3h10a2 2 0 0 1 2 2v16H5V5a2 2 0 0 1 2-2Z" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>;
}

export default function HomePage() {
  return (
    <div className="page-shell home-page">
      <section className="hero">
        <div className="hero-copy-column">
          <div className="eyebrow eyebrow-pill">✦ ENGLISH 8 · 7 LESSONS</div>
          <h1>Say hello to the <span>world!</span></h1>
          <p className="hero-copy">
            Countries, nationalities, and new words — learn them with colorful
            activities that make English feel like an adventure.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/lessons">Let’s learn <span aria-hidden="true">↗</span></Link>
            <Link className="button secondary" href="/world-map">Explore the map <span aria-hidden="true">🌍</span></Link>
          </div>
        </div>
        <div className="hero-art" aria-label="Illustration of the world and language learning" role="img">
          <span className="sparkle s1" aria-hidden="true">✦</span>
          <span className="sparkle s2" aria-hidden="true">✳</span>
          <div className="globe-card"><span className="globe-emoji" aria-hidden="true">🌍</span></div>
          <div className="float-chip one"><span aria-hidden="true">👋</span> Hello!</div>
          <div className="float-chip two"><span aria-hidden="true">🇮🇷</span> Iranian</div>
          <div className="float-chip three"><span aria-hidden="true">💬</span> Where are you from?</div>
        </div>
      </section>

      <section className="feature-grid" aria-label="Choose your learning activity">
        {features.map((feature, index) => (
          <Link className={"feature-card " + feature.tone} href={feature.href} key={feature.title}>
            <div className="feature-icon"><FeatureIcon name={feature.icon} /></div>
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
            <span className="card-link">{feature.label} <span aria-hidden="true">→</span></span>
          </Link>
        ))}
      </section>

      <section className="section-card lesson-preview">
        <div>
          <div className="section-kicker">YOUR FIRST ADVENTURE ✨</div>
          <h2>A complete English adventure</h2>
          <p>Explore all seven course themes: identity, routines, abilities, health, places, weather, and hobbies.</p>
        </div>
        <Link className="button secondary" href="/lessons">Explore all lessons →</Link>
      </section>
    </div>
  );
}
