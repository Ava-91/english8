import Link from "next/link";
import { lessons } from "@/data/course";

export default function LessonContent({ id }) {
  const lesson = lessons.find((item) => item.id === Number(id));
  if (!lesson) return null;
  const previous = lessons.find((item) => item.id === lesson.id - 1);
  const next = lessons.find((item) => item.id === lesson.id + 1);
  const practice = lesson.practice;

  return (
    <div className="page-shell narrow">
      <section className="page-heading">
        <div className="eyebrow">LESSON {lesson.id} OF 7 · {lesson.theme}</div>
        <h1>{lesson.icon} {lesson.title}</h1>
        <p>{lesson.goal}</p>
      </section>

      <section className="section-card">
        <div className="section-kicker">SPEAKING PATTERNS</div>
        <div className="pattern-grid">
          {lesson.patterns.map((item) => (
            <article className="pattern-card" key={item.question}>
              <p className="pattern-question">{item.question}</p>
              <p className="pattern-answer">{item.answer}</p>
              <p className="muted">{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="section-kicker">WORD BANK</div>
        <div className="vocab-grid">
          {lesson.vocabulary.map(([term, meaning, example]) => (
            <article className="vocab-card" key={term}>
              <strong>{term}</strong>
              <span>{meaning}</span>
              <p>{example}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="section-kicker">SPEAK IT OUT ✨</div>
        <p>{lesson.sounds}</p>
        <p><strong>Try it:</strong> Read the example phrases aloud twice: slowly first, then at a natural speed.</p>
      </section>

      <section className="section-card">
        <div className="section-kicker">QUICK CHECK</div>
        <h2>{practice.question}</h2>
        <div className="pattern-grid">
          {practice.options.map((option, index) => (
            <Link className="pattern-card" href={`/practice?lesson=${lesson.id}`} key={option}>
              <p className="pattern-question">{String.fromCharCode(65 + index)}. {option}</p>
              <p className="muted">Open practice to test what you learned.</p>
            </Link>
          ))}
        </div>
        <p className="muted">Answer check: {practice.answer}. {practice.explanation}</p>
      </section>

      <section className="cta-card">
        <div>
          <div className="section-kicker">KEEP GOING</div>
          <h2>{next ? `Next up: ${next.title}` : "You made it through all seven lessons!"}</h2>
          <p>{next ? next.goal : "Review your favourite topics and keep practising a little every day."}</p>
        </div>
        <div className="hero-actions">
          {previous && <Link className="button secondary" href={previous.id === 1 ? "/lesson-1" : `/lesson/${previous.id}`}>← Previous</Link>}
          {next && <Link className="button primary" href={next.id === 1 ? "/lesson-1" : `/lesson/${next.id}`}>Next lesson →</Link>}
          <Link className="button secondary" href="/lessons">All lessons</Link>
        </div>
      </section>
    </div>
  );
}
