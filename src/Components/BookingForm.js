import { Container, FormControl, FormLabel, Input, Select, Button, Flex } from '@chakra-ui/react';

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
<Container maxW={'100vw'} bg={"var(--secondary)"} pt={"50"}>
            <Container maxW={"container.xl"} pt={"100"} pb={"100"} minH={'50vh'} centerContent>
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor='res-date' aria-label='Choose date'><b>Choose date</b></FormLabel>
        <Input type='date' id='res-date' onChange={changeDate} value={date} required />
      </FormControl>
      <FormControl pt={25}>
        <FormLabel htmlFor='res-time' aria-label='Choose time'><b>Choose time</b></FormLabel>
        <Select id='res-time' value={selectedTime} onChange={changeSelectedTime} required>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl pt={25}>
        <FormLabel htmlFor='guests' aria-label='Number of guests'><b>Number of guests</b></FormLabel>
        <Input
          type='number'
          placeholder='1'
          min='1'
          max='10'
          id='guests'
          value={number}
          onChange={changeNumber}
          required
        />
      </FormControl>
      <FormControl pt={25} pb={50}>
        <FormLabel htmlFor='occasion' aria-label='Occasion'><b>Occasion</b></FormLabel>
        <Select id='occasion' value={occasion} onChange={changeOccasion} required>
          <option value='birthday'>Birthday</option>
          <option value='anniversary'>Anniversary</option>
        </Select>
      </FormControl>
      <Button bg={"var(--secondary2)"} color={"var(--higlight2)"} _hover={{background: "var(--primary2)"}} type='submit' isDisabled={!isEnabled()} aria-label='On Click'>Make Your reservation</Button>
    </form>
  </Container>
  </Container>

  );
}

export default BookingForm;