import Button from './Button';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
      <div className="hero__text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <Button to="/booking" variant="primary" ariaLabel="Book a table">
          Book a Table
        </Button>
      </div>
      <div className="hero__image" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Hero;
