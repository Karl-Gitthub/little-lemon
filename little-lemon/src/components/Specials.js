import '../styles/Specials.css';

const menuItems = [
  {
    id: 1,
    name: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
  },
  {
    id: 2,
    name: 'Bruchetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: '$5.00',
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  },
];

function Specials() {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>Specials</h2>
        <button className="specials-btn">Online Menu</button>
      </div>
      <div className="specials-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="special-card">
            <div className="card-img-placeholder" />
            <div className="card-body">
              <div className="card-title-row">
                <h3>{item.name}</h3>
                <span className="card-price">{item.price}</span>
              </div>
              <p className="card-description">{item.description}</p>
              <p className="card-order">Order a delivery 🛵</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;