import { useState } from 'react';
import BookingForm from './BookingForm';
import '../styles/BookingPage.css';

function BookingPage({ availableTimes, dispatch }) {
  const [bookings, setBookings] = useState([
    { date: '2024-06-15', time: '17:00', guests: 2, occasion: 'Birthday' },
    { date: '2024-06-16', time: '19:00', guests: 4, occasion: 'Anniversary' },
    { date: '2024-06-17', time: '20:00', guests: 3, occasion: 'Birthday' },
  ]);

  const handleBookingSubmit = (formData) => {
    const submitted = window.submitAPI(formData);
    if (submitted) {
      setBookings([...bookings, formData]);
    }
  };

  return (
    <>
      <h1>Reserve a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmit={handleBookingSubmit}
      />

      <section>
        <h2>Existing Bookings</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Occasion</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.guests}</td>
                <td>{booking.occasion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default BookingPage;