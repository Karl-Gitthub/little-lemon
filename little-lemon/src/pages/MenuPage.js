import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import MenuCard from '../components/MenuCard';
import menuItems from '../data/menuItems';
import '../styles/MenuPage.css';

function MenuPage() {
  return (
    <div className="page menu-page">
      <PageHeader
        title="Our Menu"
        subtitle="Traditional Mediterranean recipes with a modern Chicago twist."
      >
        <Button to="/order" variant="primary" className="menu-page__hero-cta">
          Order Now
        </Button>
      </PageHeader>

      <section className="menu-page__grid" aria-label="Full menu">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}

export default MenuPage;
