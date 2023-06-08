
import { Container } from "@chakra-ui/react";




  function BookingForm({
    date,
    changeDate,
    selectedTime,
    changeSelectedTime,
    availableTimes,
    number,
    changeNumber,
    occasion,
    changeOccasion
  }) {

  return (
    <>
    <Container pt={200}>
  <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
    <label htmlFor="res-date">Choose date</label>
    <input type="date" id="res-date" onChange={changeDate} value={date} />
    <label htmlFor="res-time">Choose time</label>
    <select id="res-time" value={selectedTime} onChange={changeSelectedTime}>
      {availableTimes.map((time) =>(
        <option key={time} value={time} >
          {time}
          </option>
      ))}
    </select>
    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests" value={number} onChange={changeNumber} />
    <label htmlFor="occasion">Occasion</label>
    <select id="occasion" value={occasion} onChange={changeOccasion}>
      <option value='birthday'>Birthday</option>
      <option value='anniversary'>Anniversary</option>
    </select>
    <input type="submit" value="Make Your reservation" />
  </form>
  </Container>
</>

  );
};

export default BookingForm;
