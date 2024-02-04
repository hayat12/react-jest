import { render, screen } from '@testing-library/react';
import Skills from './skills';


describe('Skills', () => { 
    const skills = ["HTML", "JavaScript", "PHP"];
    test("Render skill", ()=>{
        render(<Skills/>)
        const listItem = screen.getByRole("list");
        expect(listItem).toBeInTheDocument();
    })

    test('Render all skills in the list', ()=>{
        render(<Skills/>)
        const listItem = screen.getAllByRole("listitem");
        expect(listItem).toHaveLength(skills.length);
    });

    test('Render login button', () => { 
        render(<Skills/>)
        const loginButton = screen.getByRole("button", {name: 'Login'});
        expect(loginButton).toBeInTheDocument();
    })

    test('Start learning button', () => { 
        render(<Skills/>)
        const loginButton = screen.queryByRole("button", {name: 'Start learning'});
        expect(loginButton).not.toBeInTheDocument()
    })

    test('Start learning button is eventually displayed',async () => { 
        // const view  = render(<Skills/>)
        render(<Skills/>)
        // logRoles(view.container);
        const button = await screen.findByRole("button", {name: 'Start learning'}, {timeout: 2001});
        expect(button).toBeInTheDocument();
    })
})