"use client";

import { useMemo, useState } from "react";
import { questions } from "@/data/questions";

export default function PracticePage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];
  const progress = Math.round(((current + (selected !== null ? 1 : 0)) / questions.length) * 100);

  const choose = (option) => {
    if (selected !== null) return;
    setSelected(option);
    if (option === question.answer) setScore((value) => value + 1);
  };

  const next = () => {
    if (current === questions.length - 1) {
      setFinished(true);
      return;
    }
    setCurrent((value) => value + 1);
    setSelected(null);
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="page-shell narrow">
        <section className="result-card">
          <div className="result-icon">✓</div>
          <div className="eyebrow">QUIZ COMPLETE</div>
          <h1>{score} / {questions.length}</h1>
          <p>
            {score === questions.length
              ? "Perfect. You know your countries and nationalities."
              : "Good work. Review the lesson and try again."}
          </p>
          <button className="button primary" onClick={restart}>Try Again</button>
        </section>
      </div>
    );
  }

  return (
    <div className="page-shell narrow">
      <section className="page-heading">
        <div className="eyebrow">PRACTICE · {current + 1} / {questions.length}</div>
        <h1>Check your knowledge</h1>
        <div className="progress-track" aria-label={`Question progress: ${progress}%`}>
          <span style={{ width: `${progress}%` }} />
        </div>
      </section>

      <section className="quiz-card">
        <p className="quiz-question">{question.question}</p>
        <div className="answer-list">
          {question.options.map((option) => {
            const isCorrect = selected !== null && option === question.answer;
            const isWrong = selected === option && option !== question.answer;
            return (
              <button
                className={`answer-option ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}`}
                key={option}
                onClick={() => choose(option)}
                disabled={selected !== null}
              >
                <span>{option}</span>
                {isCorrect && <b>✓</b>}
                {isWrong && <b>×</b>}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className={`feedback ${selected === question.answer ? "good" : "bad"}`}>
            <strong>{selected === question.answer ? "Correct!" : "Not quite."}</strong>
            <span>{question.explanation}</span>
          </div>
        )}

        <button className="button primary full-button" onClick={next} disabled={selected === null}>
          {current === questions.length - 1 ? "See Result" : "Next Question →"}
        </button>
      </section>
    </div>
  );
}
