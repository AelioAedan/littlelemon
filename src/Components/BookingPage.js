

import { useState, useReducer } from 'react';
import BookingForm from './BookingForm';


const initializeTimes = ([
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
]);

function BookingPage() {

  const [date, setDate] = useState('');

  const changeDate = (event) => {
    setDate(event.target.value);
    dispatch({date: event.target.value})
  };

  const [number, setNumber] = useState(1);

  const changeNumber = (event) => {
    setNumber(event.target.value)
  };

  const [occasion, setOccasion] = useState('');

  const changeOccasion = (event) => {
    setOccasion(event.target.value)
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

  function updateTimes(state, action) {
    switch (action.type) {
      default:
        return state;
    }
  };


  const [selectedTime, setSelectedTime] = useState('');

  const changeSelectedTime = (event) => {
    setSelectedTime(event.target.value);
  }


  return (
    <div id='Reservations'>
    <BookingForm
      date={date}
      changeDate={changeDate}
      dispatch={dispatch}
      selectedTime={selectedTime}
      changeSelectedTime={changeSelectedTime}
      availableTimes={availableTimes}
      number={number}
      changeNumber={changeNumber}
      occasion={occasion}
      changeOccasion={changeOccasion}
    />
    </div>
  )
}

export default BookingPage;