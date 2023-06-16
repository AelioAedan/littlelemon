import { render, screen } from "@testing-library/react";
import BookingForm from "./Components/BookingForm";

const availableTimes = ['10:00', '12:00', '14:00']; // Mock-Wert für availableTimes
render(
    <BookingForm
      date=""
      changeDate={() => {}}
      selectedTime=""
      changeSelectedTime={() => {}}
      availableTimes={availableTimes}
      number={1}
      changeNumber={() => {}}
      occasion=""
      changeOccasion={() => {}}
    />
  );
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();

