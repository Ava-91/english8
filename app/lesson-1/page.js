import Link from "next/link";
import { vocabulary } from "@/data/lesson";

const patterns = [
  {
    question: "Where are you from?",
    answer: "I'm from Iran.",
    note: "Use a country name after “from”.",
  },
  {
    question: "What's your nationality?",
    answer: "I'm Iranian.",
    note: "Use the nationality word to describe a person.",
  },
];

export default function LessonOnePage() {
  return (
    <div className="page-shell narrow">
      <section className="page-heading">
        <div className="eyebrow">LESSON 1</div>
        <h1>My Nationality</h1>
        <p>Build the core language first. Then explore it on the map.</p>
      </section>

      <section className="section-card">
        <div className="section-kicker">KEY PATTERNS</div>
        <div className="pattern-grid">
          {patterns.map((item) => (
            <article className="pattern-card" key={item.question}>
              <p className="pattern-question">{item.question}</p>
              <p className="pattern-answer">{item.answer}</p>
              <p className="muted">{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="section-kicker">VOCABULARY</div>
        <div className="vocab-grid">
          {vocabulary.map((word) => (
            <article className="vocab-card" key={word.term}>
              <strong>{word.term}</strong>
              <span>{word.meaning}</span>
              <p>{word.example}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-card">
        <div>
          <div className="section-kicker">NEXT</div>
          <h2>Put it on the map.</h2>
          <p>Choose a country and see its nationality.</p>
        </div>
        <Link className="button primary" href="/world-map">Open World Map →</Link>
      </section>
    </div>
  );
}
