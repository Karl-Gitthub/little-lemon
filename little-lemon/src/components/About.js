import Button from './Button';
import '../styles/About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <p>
          Our chefs draw inspiration from the rich culinary traditions of the
          Mediterranean coast, bringing you authentic flavors in every dish.
        </p>
        <Button to="/about" variant="secondary">
          Learn More About Us
        </Button>
      </div>
      <div className="about-images" aria-hidden="true">
        <div className="about-image about-image--primary" />
        <div className="about-image about-image--secondary" />
      </div>
    </section>
  );
}

export default About;
