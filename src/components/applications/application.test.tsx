import { render, screen} from '@testing-library/react';
import Application from './application';

describe('Application', ()=>{
    test('render correctly', () => {
        render(<Application/>);
        
        const textBox = screen.getByRole("textbox", {name: 'Name'});
        expect(textBox).toBeInTheDocument();

        const bio = screen.getByRole("textbox", {name: 'Bio'});
        expect(bio).toBeInTheDocument();

        const comboBox = screen.getByRole("combobox");
        expect(comboBox).toBeInTheDocument();

        const checkBox = screen.getByRole("checkbox");
        expect(checkBox).toBeInTheDocument();

        const submitButton = screen.getByRole("button");
        expect(submitButton).toBeInTheDocument();

    })
})