# Little Lemon Restaurant 🍋
> **Meta Front-End Developer Professional Certificate - Capstone Project**

A responsive, modern web application built for Little Lemon, a fictional Mediterranean restaurant. This project serves as the final capstone for the Meta Front-End Developer specialization, demonstrating proficiency in React, component design, state management, form validation, and semantic UI/UX principles.

---

## 🚀 Features

*   **Responsive Navigation:** A fully adaptive navbar and footer designed with a mobile-first approach, featuring a functional hamburger menu for smaller screens.
*   **Dynamic Table Reservation System:** A robust booking form utilizing React's `useReducer` hook to dynamically manage available time slots based on the selected date.
*   **Form Validation:** Client-side form validation ensuring correct data entry (names, contact details, party size) before submission.
*   **Component Architecture:** Clean, modular, and reusable React components adhering to separation of concerns.
*   **Unit Testing:** Written with Jest and React Testing Library to guarantee reliability for critical business logic (e.g., booking form submission and time slot allocation).

---

## 🛠️ Tech Stack

*   **Frontend Core:** React 18, HTML5 (Semantic elements), CSS3 / Tailwind CSS
*   **Routing:** React Router v6
*   **State Management:** React Hooks (`useState`, `useReducer`, `useEffect`)
*   **Testing Suite:** Jest, React Testing Library

---

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components (Navbar, Footer, Card, etc.)
├── pages/               # Page-level components
│   ├── Home/            # Hero section, Highlights (Menu), Testimonials, About
│   ├── Booking/         # Reservation page & BookingForm
│   ├── Menu/            # Full restaurant menu
│   └── UnderConstruction/ # Placeholders for Order Online, Login, etc.
├── tests/               # Unit and integration tests
├── App.js               # Root component and client routing
└── index.js             # Application entry point
