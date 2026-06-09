const menuItems = [
  {
    id: 1,
    name: 'Greek Salad',
    price: '$12.99',
    category: 'Salads',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    featured: true,
  },
  {
    id: 2,
    name: 'Bruschetta',
    price: '$5.99',
    category: 'Appetizers',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    featured: true,
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: '$5.00',
    category: 'Desserts',
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    featured: true,
  },
  {
    id: 4,
    name: 'Grilled Fish',
    price: '$18.99',
    category: 'Mains',
    description:
      'Fresh catch of the day grilled with Mediterranean herbs, served with roasted vegetables and lemon butter sauce.',
    featured: false,
  },
  {
    id: 5,
    name: 'Lamb Chops',
    price: '$22.99',
    category: 'Mains',
    description:
      'Tender lamb chops marinated in rosemary and garlic, grilled to perfection with a side of tzatziki.',
    featured: false,
  },
  {
    id: 6,
    name: 'Hummus Plate',
    price: '$8.99',
    category: 'Appetizers',
    description:
      'Creamy house-made hummus served with warm pita bread, olive oil drizzle, and paprika.',
    featured: false,
  },
];

export const featuredItems = menuItems.filter((item) => item.featured);

export default menuItems;
