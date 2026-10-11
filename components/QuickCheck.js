"use client";

import { useState } from "react";

export default function QuickCheck({ practice }) {
  const [selected, setSelected] = useState("");
  const isCorrect = selected === practice.answer;

  return (
    <div>
      <h2>{practice.question}</h2>
      <div className="answer-list">
        {practice.options.map((option) => {
          const chosen = selected === option;
          const correct = option === practice.answer;
          const stateClass = selected && correct ? " correct" : selected && chosen ? " wrong" : "";
          return (
            <button
              className={`answer-option${stateClass}`}
              type="button"
              key={option}
              onClick={() => setSelected(option)}
              disabled={Boolean(selected)}
              aria-pressed={chosen}
            >
              <span>{option}</span>
              {selected && correct && <span aria-label="Correct answer">✓</span>}
              {selected && chosen && !correct && <span aria-label="Your answer">✕</span>}
            </button>
          );
        })}
      </div>
      {selected && (
        <div className={`feedback ${isCorrect ? "good" : "bad"}`} role="status">
          <strong>{isCorrect ? "That's right! 🎉" : "Not quite — keep learning!"}</strong>
          <span>{practice.explanation}</span>
          <button className="button secondary full-button" type="button" onClick={() => setSelected("")}>Try again</button>
        </div>
      )}
    </div>
  );
}
