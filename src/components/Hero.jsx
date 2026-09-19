
import { useState } from "react";

function Hero() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="hero">
      <h1>Welcome to My Website</h1>

      <p>
        This is my first React website built with React JS and Vite.
      </p>

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Learn More"}
      </button>

      {showMore && (
        <div className="more-info">
          <h2>More About This Project</h2>

          <p>
            This project is created using React JS and Vite. Through this
            project, I am learning how to create React components, use CSS,
            and build a simple and responsive website.
          </p>

          <p>
            I have created separate components for the Header, Hero, About,
            and Footer sections.
          </p>
        </div>
      )}
    </section>
  );
}

export default Hero;