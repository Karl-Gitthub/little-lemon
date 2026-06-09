import { useState } from 'react';
import Button from './Button';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [errors, setErrors] = useState({});

  const today = new Date().toISOString().split('T')[0];

  const validate = (fields) => {
    const newErrors = {};

    if (!fields.date) {
      newErrors.date = 'Please select a date.';
    } else if (fields.date < today) {
      newErrors.date = 'Date cannot be in the past.';
    }

    if (!fields.time) {
      newErrors.time = 'Please select a time.';
    }

    if (!fields.guests || fields.guests < 1 || fields.guests > 10) {
      newErrors.guests = 'Guests must be between 1 and 10.';
    }

    return newErrors;
  };

  const isFormValid = () => {
    return Object.keys(validate({ date, time, guests, occasion })).length === 0;
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
    setErrors((prev) => ({ ...prev, date: undefined }));
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
    setErrors((prev) => ({ ...prev, guests: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate({ date, time, guests, occasion });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    submitForm({ date, time, guests: Number(guests), occasion });
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-label="Reservation form"
      noValidate
    >
      <h2 className="booking-form__title">Make a Reservation</h2>

      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          min={today}
          onChange={handleDateChange}
          aria-label="Reservation date"
          aria-required="true"
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? 'date-error' : undefined}
          required
        />
        {errors.date && (
          <span id="date-error" className="form-error" role="alert">
            {errors.date}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          aria-label="Reservation time"
          aria-required="true"
          required
        >
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={handleGuestsChange}
          aria-label="Number of guests"
          aria-required="true"
          aria-invalid={!!errors.guests}
          aria-describedby={errors.guests ? 'guests-error' : undefined}
          required
        />
        {errors.guests && (
          <span id="guests-error" className="form-error" role="alert">
            {errors.guests}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          aria-label="Occasion"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={!isFormValid()}
        ariaLabel="Submit reservation"
      >
        Make Your Reservation
      </Button>
    </form>
  );
}

export default BookingForm;
