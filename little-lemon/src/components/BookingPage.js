import { useState } from 'react';
import BookingForm from './BookingForm';
import PageHeader from './PageHeader';
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
      setBookings((prev) => [...prev, formData]);
    }
  };

  return (
    <div className="page booking-page">
      <PageHeader
        title="Reservations"
        subtitle="Book your table and enjoy an unforgettable dining experience."
      />

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={handleBookingSubmit}
      />

      <section className="booking-page__table" aria-label="Existing bookings">
        <h2>Existing Bookings</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Guests</th>
                <th scope="col">Occasion</th>
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
        </div>
      </section>
    </div>
  );
}

export default BookingPage;
