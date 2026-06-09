import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

const renderForm = () =>
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

// ─── Step 1: HTML5 Attribute Tests ───────────────────────────────────────────

describe('HTML5 validation attributes', () => {
  test('date input has required, min, and type attributes', () => {
    renderForm();
    const dateInput = screen.getByLabelText(/reservation date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('min'); // today's date
  });

  test('time select has required attribute', () => {
    renderForm();
    const timeSelect = screen.getByLabelText(/reservation time/i);
    expect(timeSelect).toHaveAttribute('required');
  });

  test('guests input has required, min, and max attributes', () => {
    renderForm();
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('form has noValidate to allow React to control validation', () => {
    renderForm();
    const form = screen.getByRole('form', { name: /reservation form/i });
    expect(form).toHaveAttribute('noValidate');
  });

  test('time select renders all available times as options', () => {
    renderForm();
    mockAvailableTimes.forEach((t) => {
      expect(screen.getByRole('option', { name: t })).toBeInTheDocument();
    });
  });
});

// ─── Step 2: JavaScript Validation Tests ─────────────────────────────────────

describe('submit button disabled state', () => {
  test('submit button is disabled when form is empty', () => {
    renderForm();
    const submitBtn = screen.getByRole('button', { name: /submit reservation/i })
      || screen.getByDisplayValue(/make your reservation/i);
    expect(submitBtn).toBeDisabled();
  });

  test('submit button is enabled when all fields are valid', () => {
    renderForm();
    const today = new Date().toISOString().split('T')[0];

    fireEvent.change(screen.getByLabelText(/reservation date/i), {
      target: { value: today },
    });
    fireEvent.change(screen.getByLabelText(/reservation time/i), {
      target: { value: '18:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '4' },
    });

    const submitBtn = screen.getByDisplayValue(/make your reservation/i);
    expect(submitBtn).not.toBeDisabled();
  });
});

describe('date validation', () => {
  test('shows error when date is not selected and form is submitted', () => {
    renderForm();
    // Manually trigger submit with no date
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '2' },
    });
    fireEvent.submit(screen.getByRole('form', { name: /reservation form/i }));
    expect(screen.getByText(/please select a date/i)).toBeInTheDocument();
  });

  test('shows error for a past date', () => {
    renderForm();
    fireEvent.change(screen.getByLabelText(/reservation date/i), {
      target: { value: '2020-01-01' },
    });
    fireEvent.submit(screen.getByRole('form', { name: /reservation form/i }));
    expect(screen.getByText(/date cannot be in the past/i)).toBeInTheDocument();
  });

  test('clears date error when valid date is entered', () => {
    renderForm();
    const today = new Date().toISOString().split('T')[0];
    const dateInput = screen.getByLabelText(/reservation date/i);

    fireEvent.change(dateInput, { target: { value: '2020-01-01' } });
    fireEvent.submit(screen.getByRole('form', { name: /reservation form/i }));
    expect(screen.getByText(/date cannot be in the past/i)).toBeInTheDocument();

    fireEvent.change(dateInput, { target: { value: today } });
    expect(screen.queryByText(/date cannot be in the past/i)).not.toBeInTheDocument();
  });
});

describe('guests validation', () => {
  test('shows error when guests is 0', () => {
    renderForm();
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '0' },
    });
    fireEvent.submit(screen.getByRole('form', { name: /reservation form/i }));
    expect(screen.getByText(/guests must be between 1 and 10/i)).toBeInTheDocument();
  });

  test('shows error when guests exceeds 10', () => {
    renderForm();
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '11' },
    });
    fireEvent.submit(screen.getByRole('form', { name: /reservation form/i }));
    expect(screen.getByText(/guests must be between 1 and 10/i)).toBeInTheDocument();
  });

  test('clears guests error when valid number is entered', () => {
    renderForm();
    const guestsInput = screen.getByLabelText(/number of guests/i);

    fireEvent.change(guestsInput, { target: { value: '0' } });
    fireEvent.submit(screen.getByRole('form', { name: /reservation form/i }));
    expect(screen.getByText(/guests must be between 1 and 10/i)).toBeInTheDocument();

    fireEvent.change(guestsInput, { target: { value: '3' } });
    expect(screen.queryByText(/guests must be between 1 and 10/i)).not.toBeInTheDocument();
  });
});

describe('form submission', () => {
  test('calls submitForm with correct data when form is valid', () => {
    renderForm();
    const today = new Date().toISOString().split('T')[0];

    fireEvent.change(screen.getByLabelText(/reservation date/i), {
      target: { value: today },
    });
    fireEvent.change(screen.getByLabelText(/reservation time/i), {
      target: { value: '19:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '3' },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: 'Anniversary' },
    });

    fireEvent.submit(screen.getByRole('form', { name: /reservation form/i }));

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: today,
      time: '19:00',
      guests: 3,
      occasion: 'Anniversary',
    });
  });

  test('does not call submitForm when form is invalid', () => {
    renderForm();
    mockSubmitForm.mockClear();
    fireEvent.submit(screen.getByRole('form', { name: /reservation form/i }));
    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  test('dispatch is called when date changes', () => {
    renderForm();
    const today = new Date().toISOString().split('T')[0];
    fireEvent.change(screen.getByLabelText(/reservation date/i), {
      target: { value: today },
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      payload: today,
    });
  });
});