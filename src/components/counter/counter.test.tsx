import { render, screen, act } from '@testing-library/react';
import user from '@testing-library/user-event';
import Counter from './counter';
describe("Counter", ()=>{
    test('should render counter', () => { 
        render(<Counter/>);
        const elementText = screen.getByText(/counter/i)
        expect(elementText).toBeInTheDocument();
    })

    test('should render count 0', () => { 
        render(<Counter/>);
        const textElement = screen.getByRole('heading')
        expect(textElement).toHaveTextContent("0");
    })

    test('should render a count of 1 after the first click', async () => {
        user.setup();
        render(<Counter />);
        const buttonElement = screen.getByRole('button', { name: /increment/i });
        expect(buttonElement).toBeInTheDocument();
      
        await act(async () => {
          await user.click(buttonElement);
        });
      
        const textElement = screen.getByRole('heading');
        expect(textElement).toHaveTextContent('1');
    });
})