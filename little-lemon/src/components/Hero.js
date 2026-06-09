import '../styles/Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a
          modern twist.
        </p>
        <Link to="/booking">
          <button className="hero-btn">Reserve a Table</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;