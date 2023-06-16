import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './Components/BookingForm';

describe('BookingForm', () => {
  test('renders all input fields', () => {
    render(<BookingForm />);

    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
  });

  test('submit button is disabled when fields are empty', () => {
    render(<BookingForm />);

    const submitButton = screen.getByText('Make Your reservation');
    expect(submitButton).toBeDisabled();
  });

  test('submit button is enabled when all fields are filled', () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText('Choose date');
    const timeInput = screen.getByLabelText('Choose time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionInput = screen.getByLabelText('Occasion');
    const submitButton = screen.getByText('Make Your reservation');

    fireEvent.change(dateInput, { target: { value: '2023-06-14' } });
    fireEvent.change(timeInput, { target: { value: '12:00 PM' } });
    fireEvent.change(guestsInput, { target: { value: '5' } });
    fireEvent.change(occasionInput, { target: { value: 'birthday' } });

    expect(submitButton).toBeEnabled();
  });
});
