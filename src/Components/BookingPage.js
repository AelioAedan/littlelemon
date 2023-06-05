import React from 'react';
import BookingForm from './BookingForm';
import Nav from './Nav';
import Footer from './Footer';
import { Container } from '@chakra-ui/react';

function BookingPage() {
  return (
    <div id='Reservations'>
    <Nav />
      <BookingForm/>
    <Footer />
    </div>
  )
}

export default BookingPage;