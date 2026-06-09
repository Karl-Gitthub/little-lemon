import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

beforeEach(() => {
  window.fetchAPI = (date) => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };
  window.submitAPI = (formData) => {
    return true;
  };
});

test('renders the app', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});