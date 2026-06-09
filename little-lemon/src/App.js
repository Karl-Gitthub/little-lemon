import Nav from './components/Nav';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;