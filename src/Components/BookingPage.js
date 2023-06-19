import { useState, useReducer, useEffect } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './api';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function BookingPage() {
  const today = new Date();

  const [initializeTimes, setInitializeTimes] = useState([]);

  const fetchData = (date) => {
    const times = fetchAPI(date);
    setInitializeTimes(times);
  };

  useEffect(() => {
    fetchData(today);
  }, []);

  const [date, setDate] = useState('');
  const [number, setNumber] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const changeDate = (event) => {
    setDate(event.target.value);
    dispatch({ type: 'FETCH_TIMES', date: event.target.value });
  };

  const changeNumber = (event) => {
    setNumber(event.target.value);
  };

  const changeOccasion = (event) => {
    setOccasion(event.target.value);
  };

  const changeSelectedTime = (event) => {
    setSelectedTime(event.target.value);
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'FETCH_TIMES':
        const times = fetchAPI(new Date(action.date));
        return times;
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    const successfulSubmit = submitAPI(formData);
    if (successfulSubmit) {
      navigate("/confirmed-booking");
    }
  };

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
        submitForm={handleSubmit}
      />
        <Footer />
    </div>
  );
}

export default BookingPage;
