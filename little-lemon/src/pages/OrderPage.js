import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import menuItems from '../data/menuItems';
import '../styles/OrderPage.css';

function OrderPage() {
  const [cart, setCart] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const addToCart = (item) => {
    setSubmitted(false);
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setSubmitted(true);
    setCart([]);
  };

  return (
    <div className="page order-page">
      <PageHeader
        title="Order Online"
        subtitle="Select your favorites and we'll have them ready for pickup or delivery."
      />

      {submitted && (
        <div className="order-page__success" role="status">
          Your order has been placed! We'll contact you shortly to confirm.
        </div>
      )}

      <div className="order-page__layout">
        <section className="order-page__menu" aria-label="Order menu">
          {menuItems.map((item) => (
            <article key={item.id} className="order-item">
              <div className="order-item__info">
                <h3>{item.name}</h3>
                <span className="order-item__price">{item.price}</span>
                <p>{item.description}</p>
              </div>
              <Button
                variant="secondary"
                onClick={() => addToCart(item)}
                ariaLabel={`Add ${item.name} to cart`}
              >
                Add to Cart
              </Button>
            </article>
          ))}
        </section>

        <aside className="order-page__cart" aria-label="Shopping cart">
          <h2>Your Cart ({totalItems})</h2>
          {cart.length === 0 ? (
            <p className="order-page__empty">Your cart is empty.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <ul className="cart-list">
                {cart.map((item) => (
                  <li key={item.id} className="cart-list__item">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <button
                      type="button"
                      className="cart-list__remove"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <Button type="submit" variant="primary">
                Place Order
              </Button>
            </form>
          )}
        </aside>
      </div>
    </div>
  );
}

export default OrderPage;
