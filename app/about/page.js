export default function AboutPage() {
  return (
    <div className="page-shell narrow">
      <section className="page-heading">
        <div className="eyebrow">ABOUT</div>
        <h1>About this project</h1>
        <p>A school project that turns an English 8 lesson into an interactive learning experience.</p>
      </section>

      <section className="section-card prose">
        <h2>What is it?</h2>
        <p>
          English 8 is an educational website focused on Lesson 1,
          “My Nationality”. It combines lesson explanations, an interactive
          country map, vocabulary, and practice.
        </p>
        <h2>Built with</h2>
        <ul>
          <li>Next.js and React</li>
          <li>Responsive HTML and CSS</li>
          <li>React Simple Maps for the interactive SVG map</li>
          <li>Local lesson and quiz data</li>
        </ul>
        <h2>Content note</h2>
        <p>
          The interface and learning activities are original work. The site
          is designed as a school learning aid rather than a replacement for
          the textbook.
        </p>
      </section>
    </div>
  );
}
