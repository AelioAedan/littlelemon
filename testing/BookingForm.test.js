import { render, screen } from '@testing-library/react';
import BookingForm from '../src/Components/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
})