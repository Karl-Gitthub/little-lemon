import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="page about-page">
      <PageHeader
        title="About Little Lemon"
        subtitle="A family-owned Mediterranean restaurant in the heart of Chicago."
      />

      <section className="about-page__content">
        <div className="about-page__text">
          <h2>Our Story</h2>
          <p>
            Little Lemon opened its doors with a simple mission: bring the
            warmth and flavors of the Mediterranean coast to Chicago. What
            started as a small family kitchen has grown into a beloved
            neighborhood gathering place.
          </p>
          <p>
            Our chefs draw inspiration from the rich culinary traditions of
            Greece, Italy, and the Levant, bringing you authentic flavors in
            every dish — served with a modern twist.
          </p>
          <p>
            We source fresh, local ingredients whenever possible and prepare
            everything from scratch, just like grandma used to make.
          </p>
          <Button to="/booking" variant="primary">
            Book a Table
          </Button>
        </div>

        <div className="about-page__images" aria-hidden="true">
          <div className="about-page__image about-page__image--primary" />
          <div className="about-page__image about-page__image--secondary" />
        </div>
      </section>

      <section className="about-page__values">
        <article className="value-card">
          <h3>Fresh Ingredients</h3>
          <p>Locally sourced produce and the finest Mediterranean imports.</p>
        </article>
        <article className="value-card">
          <h3>Family Recipes</h3>
          <p>Time-honored recipes passed down through generations.</p>
        </article>
        <article className="value-card">
          <h3>Warm Hospitality</h3>
          <p>Every guest is treated like family from the moment they arrive.</p>
        </article>
      </section>
    </div>
  );
}

export default AboutPage;
