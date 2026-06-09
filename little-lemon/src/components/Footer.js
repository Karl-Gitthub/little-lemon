import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../styles/Footer.css';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/booking', label: 'Reservations' },
  { to: '/order', label: 'Order Online' },
  { to: '/login', label: 'Login' },
];

const socialLinks = [
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
        />
      </svg>
    ),
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 0 1 1.77 1.153 4.92 4.92 0 0 1 1.153 1.77c.163.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.153 1.77 4.92 4.92 0 0 1-1.77 1.153c-.46.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 0 1-1.77-1.153 4.92 4.92 0 0 1-1.153-1.77c-.163-.46-.349-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.92 4.92 0 0 1 1.153-1.77 4.92 4.92 0 0 1 1.77-1.153c.46-.163 1.26-.349 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.73.333 3.865.63a6.865 6.865 0 0 0-2.49 1.62A6.865 6.865 0 0 0 .63 3.865C.333 4.73.13 5.775.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.277.261 2.322.558 3.187a6.865 6.865 0 0 0 1.62 2.49 6.865 6.865 0 0 0 2.49 1.62c.865.297 1.91.5 3.187.558C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.058 2.322-.261 3.187-.558a6.865 6.865 0 0 0 2.49-1.62 6.865 6.865 0 0 0 1.62-2.49c.297-.865.5-1.91.558-3.187.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.261-2.322-.558-3.187a6.865 6.865 0 0 0-1.62-2.49A6.865 6.865 0 0 0 20.135.63c-.865-.297-1.91-.5-3.187-.558C15.668.014 15.259 0 12 0z"
        />
        <path
          fill="currentColor"
          d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
        />
      </svg>
    ),
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
    ),
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="footer-section footer-section--brand">
          <Link to="/" aria-label="Little Lemon home">
            <Logo className="footer-logo" variant="footer" />
          </Link>
          <p className="footer-tagline">
            Mediterranean flavors in the heart of Chicago.
          </p>
        </div>

        <nav className="footer-section" aria-label="Footer navigation">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-section">
          <h4>Contact</h4>
          <address>
            <p>123 Example Street</p>
            <p>Chicago, IL 60601</p>
            <p>
              <a href="tel:+11234567890">(123) 456-7890</a>
            </p>
            <p>
              <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
            </p>
          </address>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links" aria-label="Social media links">
            {socialLinks.map(({ href, label, icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="site-footer__copyright">
        &copy; {year} Little Lemon. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
