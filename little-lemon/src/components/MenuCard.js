import Button from './Button';

function MenuCard({ item, showOrderCta = true }) {
  return (
    <article className="menu-card">
      <div className="menu-card__image" aria-hidden="true" />
      <div className="menu-card__body">
        <div className="menu-card__title-row">
          <h3>{item.name}</h3>
          <span className="menu-card__price">{item.price}</span>
        </div>
        {item.category && (
          <span className="menu-card__category">{item.category}</span>
        )}
        <p className="menu-card__description">{item.description}</p>
        {showOrderCta && (
          <Button to="/order" variant="secondary" className="menu-card__cta">
            Order Now
          </Button>
        )}
      </div>
    </article>
  );
}

export default MenuCard;
