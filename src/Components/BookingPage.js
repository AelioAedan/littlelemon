

import { useState, useReducer, useEffect } from 'react';
import BookingForm from './BookingForm';

function BookingPage() {

const today = new Date ();

  const [initializeTimes, setInitializeTimes] = useState(today) ;

  const fetchData = () => {
    fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
      .then((response) => response.json())
      .then((jsonData) => setInitializeTimes(jsonData))
      .catch((error) => console.log(error));
  };

  useEffect((today) => {
    fetchData(today)
  }, []);

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