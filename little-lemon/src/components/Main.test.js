import { initializeTimes, updateTimes } from './Main';

beforeEach(() => {
  window.fetchAPI = (date) => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };
  window.submitAPI = (formData) => {
    return true;
  };
});

test('initializeTimes returns correct initial times', () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test('updateTimes returns times for selected date', () => {
  const currentState = ['17:00', '18:00', '19:00'];
  const action = { type: 'UPDATE_TIMES', payload: '2024-06-15' };
  const result = updateTimes(currentState, action);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test('updateTimes returns default state for unknown action', () => {
  const currentState = ['17:00', '18:00', '19:00'];
  const action = { type: 'UNKNOWN_ACTION' };
  expect(updateTimes(currentState, action)).toEqual(currentState);
});