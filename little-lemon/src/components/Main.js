import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

// add export keyword to both functions
export const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes()
  );

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/booking"
        element={
          <BookingPage
            availableTimes={availableTimes}
            dispatch={dispatch}
          />
        }
      />
    </Routes>
  );
}

export default Main;