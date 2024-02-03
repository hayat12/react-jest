import { render, screen } from '@testing-library/react';
import Greet from './greet';

/**
 * Greet should render the text hello and if the name is passed into the component
 * it should render hello followed by the name
 */
test('Greet render correctly', () => {
    render(<Greet/>);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
})

test('Greet render with a name', () => { 
    render(<Greet name={'hayat'}/>);
    const textElement = screen.getByText(/Hello hayat/i);
    expect(textElement).toBeInTheDocument();
})