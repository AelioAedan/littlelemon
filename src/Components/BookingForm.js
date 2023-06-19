import { Container } from '@chakra-ui/react';

function BookingForm({
  date,
  changeDate,
  selectedTime,
  changeSelectedTime,
  availableTimes,
  number,
  changeNumber,
  occasion,
  changeOccasion,
  submitForm,
})
{
const handleSubmit = (e) => {
  e.preventDefault();
  const data = {
    date: {date},
    time: {selectedTime},
    guests: {number},
    occasion: {occasion}
  }
  const formData = data;
  submitForm(formData);
}
  const isEnabled = () => {
    if (date && selectedTime && number && occasion) {
      return true
    } else {
      return false
    };
    };



  return (
    <Container pt={200}>
  <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
    <label htmlFor='res-date' aria-label='Choose date'>Choose date</label>
    <input type='date' id='res-date' onChange={changeDate} value={date} required />
    <label htmlFor='res-time' aria-label='Choose time'>Choose time</label>
    <select id='res-time' value={selectedTime} onChange={changeSelectedTime} required>
      {availableTimes.map((time) => (
        <option key={time} value={time}>
          {time}
        </option>
      ))}
    </select>
    <label htmlFor='guests' aria-label='Number of guests'>Number of guests</label>
    <input
      type='number'
      placeholder='1'
      min='1'
      max='10'
      id='guests'
      value={number}
      onChange={changeNumber}
      required
    />
    <label htmlFor='occasion' aria-label='Occasion'>Occasion</label>
    <select id='occasion' value={occasion} onChange={changeOccasion} required>
      <option value='birthday'>Birthday</option>
      <option value='anniversary'>Anniversary</option>
    </select>
    <input type='submit' value='Make Your reservation' disabled={!isEnabled()} aria-label='On Click' />
  </form>
</Container>

  );
}

export default BookingForm;
