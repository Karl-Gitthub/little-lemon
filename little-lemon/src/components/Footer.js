import React from 'react'
import logo from '../assets/logo.png';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Little Lemon" />

            <nav aria-label="Footer navigation">
                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order online</a></li>
                </ul>
            </nav>

            <address>
                <p>123 Example Street, Chicago</p>
                <p><a href="tel:+11234567890">(123) 456-7890</a></p>
                <p><a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a></p>
            </address>

            <ul aria-label="Social media links">
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
            </ul>
        </footer>
    )
}

export default Footer