import { render, screen } from "@testing-library/react";
import BookingForm from "./Components/BookingForm";

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

