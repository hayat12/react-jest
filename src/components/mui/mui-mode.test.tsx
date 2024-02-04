import { render, screen } from '@testing-library/react';
import MuiMode from './mui-mode';
import { AppProvider } from '../../providers/app-provider';

describe("Mui", ()=>{
    test('should print the theme mode', () => { 
        render(<MuiMode/>);
        const textElement = screen.getByText("MuiMode");
        expect(textElement).toBeInTheDocument();
    })

    test('should render custom', () => {
        render(<MuiMode/>, {
        wrapper: AppProvider
        });
        const headingElement = screen.getByText("MuiMode");
        expect(headingElement).toBeInTheDocument()
    })
})