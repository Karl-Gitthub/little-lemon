import { initializeTimes, updateTimes } from './Main';

// Step 2 — Test initializeTimes
test('initializeTimes returns correct initial times', () => {
  const expectedTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
  expect(initializeTimes()).toEqual(expectedTimes);
});

// Step 2 — Test updateTimes returns same state
test('updateTimes returns the same state', () => {
  const currentState = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
  const action = { type: 'UPDATE_TIMES', payload: '2024-01-01' };
  expect(updateTimes(currentState, action)).toEqual(currentState);
});

test('updateTimes returns default state for unknown action', () => {
  const currentState = ['17:00', '18:00', '19:00'];
  const action = { type: 'UNKNOWN_ACTION' };
  expect(updateTimes(currentState, action)).toEqual(currentState);
});