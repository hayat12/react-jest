import { render, screen } from '@testing-library/react';
import Greet from './greet';
test('greet render correctly', () => {
    render(<Greet/>);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
})