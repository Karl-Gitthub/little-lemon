import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './BookingForm';

const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const dispatch = jest.fn();

test('Renders the BookingForm heading', () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </MemoryRouter>
  );
  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();
});

test('Renders the Choose date label', () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </MemoryRouter>
  );
  expect(screen.getByText("Choose date")).toBeInTheDocument();
});

test('Renders the Choose time label', () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </MemoryRouter>
  );
  expect(screen.getByText("Choose time")).toBeInTheDocument();
});

test('Renders the Number of guests label', () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </MemoryRouter>
  );
  expect(screen.getByText("Number of guests")).toBeInTheDocument();
});

test('Renders the Occasion label', () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </MemoryRouter>
  );
  expect(screen.getByText("Occasion")).toBeInTheDocument();
});