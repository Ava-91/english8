import Link from "next/link";
import { lessons } from "@/data/course";

export default function LessonsPage() {
  return (
    <div className="page-shell">
      <section className="page-heading">
        <div className="eyebrow">YOUR COMPLETE COURSE · 7 LESSONS</div>
        <h1>Pick your next adventure ✨</h1>
        <p>Choose a topic, learn useful words and expressions, then practise them in everyday situations.</p>
      </section>
      <section className="feature-grid" aria-label="All seven English lessons">
        {lessons.map((lesson) => (
          <Link className={`feature-card ${lesson.color}`} href={lesson.id === 1 ? "/lesson-1" : `/lesson/${lesson.id}`} key={lesson.id}>
            <div className="feature-icon" aria-hidden="true"><span style={{fontSize: "1.7rem"}}>{lesson.icon}</span></div>
            <div className="section-kicker">LESSON {lesson.id}</div>
            <h2>{lesson.title}</h2>
            <p>{lesson.goal}</p>
            <span className="card-link">Start lesson <span aria-hidden="true">→</span></span>
          </Link>
        ))}
      </section>
    </div>
  );
}
