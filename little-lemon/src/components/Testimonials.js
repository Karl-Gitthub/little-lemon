import '../styles/Testimonials.css';

const reviews = [
  {
    id: 1,
    name: 'John D.',
    rating: '★★★★★',
    review: 'Amazing food and great atmosphere! The Greek salad was perfect.',
  },
  {
    id: 2,
    name: 'Maria S.',
    rating: '★★★★★',
    review: 'Best Mediterranean food in Chicago. Highly recommend the lemon dessert.',
  },
  {
    id: 3,
    name: 'James L.',
    rating: '★★★★☆',
    review: 'Lovely place, will definitely come back. The bruschetta was delicious.',
  },
  {
    id: 4,
    name: 'Anna K.',
    rating: '★★★★★',
    review: 'Authentic recipes, just like grandma used to make. Wonderful experience.',
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {reviews.map((r) => (
          <div key={r.id} className="testimonial-card">
            <p className="testimonial-rating">{r.rating}</p>
            <div className="reviewer">
              <div className="reviewer-avatar-placeholder" />
              <span className="reviewer-name">{r.name}</span>
            </div>
            <p className="review-text">{r.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;