import { Container, Box, Heading, Text, Button, Link, textDecoration } from '@chakra-ui/react';
import React from 'react'
import { HashLink } from 'react-router-hash-link';

function ConfirmedBooking() {
  return (
    <Container maxW={"100vw"} bg={"var(--secondary)"} minH={660} pt={100}>
        <Container maxW={"container.xl"} pt={50} pb={12} id='confirmed-booking'>
            <Box textAlign="center">
                <Heading as="h1" size="xl">Confirmed Booking</Heading>
                <Text mt={4} pt={50}>Thank you for your reservation!</Text>
                <Text mt={2}>Your booking has been confirmed.</Text>
            </Box>
            <Box textAlign="center" pt={120}>
            <Button bg={"var(--primary2)"} color={"var(--higlight2)"}
                            _hover={{
                                background: "var(--secondary2)",
                            }}
                        >
                            <Link as={HashLink} to={'/#home'} _hover={{textDecoration: "none"}}>Back Home</Link>
                        </Button>
            </Box>
        </Container>
    </Container>
  )
}

export default ConfirmedBooking;