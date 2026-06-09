import Button from './Button';
import MenuCard from './MenuCard';
import { featuredItems } from '../data/menuItems';
import '../styles/Specials.css';

function Specials() {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>This Week's Specials</h2>
        <Button to="/menu" variant="dark">
          View Full Menu
        </Button>
      </div>
      <div className="specials-grid">
        {featuredItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Specials;
