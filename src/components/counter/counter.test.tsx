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

    test('should render count of 10 after clicking the set', async () => {
        user.setup();
        render(<Counter />);
        const amountInput = screen.getByRole('spinbutton');
        await act(async () => {
            await user.type(amountInput, "10");
        })
        expect(amountInput).toHaveValue(10);

        const buttonElement = screen.getByRole('button', { name: /set/i });

        await act(async () => {
            await user.click(buttonElement);
        });

        const headingText = screen.getByRole('heading')
        expect(headingText).toHaveTextContent("10")
    })


    test('should focus the element in right order', async () => { 
        user.setup()
        render(<Counter />);
        const amountInput = screen.getByRole('spinbutton');
        
        const setButton = screen.getByRole('button', {
            name: /set/i
        });

        const incrementButton = screen.getByRole('button', {
            name: /increment/i
          });

          await act(async () => {
                await user.tab();
            });
            expect(amountInput).toHaveFocus();
        
        await act( async()=>{
            await user.tab();
        })
        expect(setButton).toHaveFocus();

        await act( async()=>{
            await user.tab();
        })
        expect(incrementButton).toHaveFocus();
    })
})