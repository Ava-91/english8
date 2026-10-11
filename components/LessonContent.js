import Link from "next/link";
import { lessons } from "@/data/course";
import QuickCheck from "@/components/QuickCheck";
import { textbookLessons } from "@/data/textbook";

export default function LessonContent({ id }) {
  const lesson = lessons.find((item) => item.id === Number(id));
  const textbook = textbookLessons[Number(id)];
  if (!lesson || !textbook) return null;

  const previous = lessons.find((item) => item.id === lesson.id - 1);
  const next = lessons.find((item) => item.id === lesson.id + 1);

  return (
    <div className="page-shell narrow">
      <section className="page-heading">
        <div className="eyebrow">LESSON {lesson.id} OF 7 · TEXTBOOK PAGES {textbook.pages}</div>
        <h1>{lesson.icon} {textbook.title}</h1>
        <p>{textbook.theme}. Work through the textbook conversation, key language, vocabulary, pronunciation and classroom activities.</p>
      </section>

      <section className="section-card">
        <div className="section-kicker">TEXTBOOK CONVERSATION</div>
        <h2>{textbook.conversationTitle}</h2>
        <div className="dialogue-list">
          {textbook.conversation.map(([speaker, line], index) => (
            <div className="dialogue-line" key={index}>
              <strong>{speaker}</strong>
              <p>{line}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="section-kicker">KEY LANGUAGE FROM THE BOOK</div>
        <div className="pattern-grid">
          {textbook.language.map(([question, answer]) => (
            <article className="pattern-card" key={question}>
              <p className="pattern-question">{question}</p>
              <p className="pattern-answer">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="section-kicker">TEXTBOOK VOCABULARY</div>
        <div className="vocab-grid">
          {textbook.vocabulary.map((word) => (
            <article className="vocab-card" key={word}><strong>{word}</strong></article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="section-kicker">SPELLING & PRONUNCIATION</div>
        <p><strong>Focus:</strong> {textbook.pronunciation.focus.join(" · ")}</p>
        <p>{textbook.pronunciation.task}</p>
      </section>

      <section className="section-card">
        <div className="section-kicker">LISTENING, SPEAKING, READING & WRITING</div>
        <div className="pattern-grid">
          {textbook.activities.map((activity) => (
            <article className="pattern-card" key={activity.title}>
              <p className="pattern-question">{activity.title}</p>
              <p>{activity.instruction}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="section-kicker">TEXTBOOK REVIEW CHECKLIST</div>
        <ul className="textbook-review-list">
          {textbook.review.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section-card">
        <div className="section-kicker">EXTRA INTERACTIVE PRACTICE ✨</div>
        <p>Try this additional check after studying the textbook material.</p>
        <QuickCheck practice={lesson.practice} />
      </section>

      <section className="cta-card">
        <div>
          <div className="section-kicker">KEEP GOING</div>
          <h2>{next ? `Next up: ${next.title}` : "You made it through all seven lessons!"}</h2>
          <p>{next ? next.goal : "Review the textbook checklists and practise a little every day."}</p>
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
