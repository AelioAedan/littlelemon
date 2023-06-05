import { Container, FormControl, FormLabel, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, SimpleGrid, Spacer, VStack } from '@chakra-ui/react'
import React from 'react'

// function BookingForm() {
//   return (
//     <div>
//         <form style={{ display: 'grid', maxWidth: '200px', gap: '20px', marginLeft:'auto', marginRight:'auto' }}>
//   <label htmlFor="res-date">Choose date</label>
//   <input type="date" id="res-date" />
//   <label htmlFor="res-time">Choose time</label>
//   <select id="res-time">
//     <option>17:00</option>
//     <option>18:00</option>
//     <option>19:00</option>
//     <option>20:00</option>
//     <option>21:00</option>
//     <option>22:00</option>
//   </select>
//   <label htmlFor="guests">Number of guests</label>
//   <input type="number" placeholder="1" min="1" max="10" id="guests" />
//   <label htmlFor="occasion">Occasion</label>
//   <select id="occasion">
//     <option>Birthday</option>
//     <option>Anniversary</option>
//   </select>
//   <input type="submit" value="Make Your reservation" />
// </form>

//     </div>
  // )
// }

// export default BookingForm


function BookingForm () {
  return(
    <Container maxW={'100vw'} bg={"var(--primary2)"} py={100}>
    <SimpleGrid maxW={'container.md'} columns={1} rowGap={8} marginX={'auto'}>
      <FormControl>
      <FormLabel>
        Choose Date
      </FormLabel>
      <Input type='date' />
      </FormControl>
      <FormControl>
      <FormLabel>
        Choose time
      </FormLabel>
      <Select>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </Select>
      </FormControl>
      <FormControl>
      <FormLabel>
        Number of guests
      </FormLabel>
      <NumberInput min={1} max={10}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      </FormControl>
      <FormControl>
      <FormLabel>
        Ocassion
      </FormLabel>
      <Select>
        <option>Birthday</option>
        <option>Anniversary</option>
      </Select>
    </FormControl>
    </SimpleGrid>
    </Container>
  )
};

export default BookingForm;