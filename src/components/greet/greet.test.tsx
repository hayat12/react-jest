import { render, screen } from '@testing-library/react';
import Greet from './greet';


/** Group Test */

describe("Greet", ()=>{

    /**
 * Greet should render the text hello and if the name is passed into the component
 * it should render hello followed by the name
 */
test('Render correctly', () => {
    render(<Greet/>);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
})

describe("Nested", ()=>{
    test('Render with a name', () => { 
        render(<Greet name={'hayat'}/>);
        const textElement = screen.getByText(/Hello hayat/i);
        expect(textElement).toBeInTheDocument();
    })
})

})