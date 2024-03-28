import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";


describe('Pruebas en <AddCategory />', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'Hola Mundo'}});
        screen.debug();
        expect(input.value).toBe('Hola Mundo');
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Hola Mundo';
        const handleNewCategory = jest.fn();

        render(<AddCategory onNewCategory={handleNewCategory}/>);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.change(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe('');
        expect(handleNewCategory).toHaveBeenCalled();
        expect(handleNewCategory).toHaveBeenCalledTimes(1);
        expect(handleNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('no debe de llamar el onNewCategory si el input esta vació', () => {
        
        const handleNewCategory = jest.fn();

        render(<AddCategory onNewCategory={handleNewCategory}/>);
                
        const form = screen.getByRole('form');
        
        fireEvent.submit(form);
        // screen.debug();
        
        expect(handleNewCategory).toHaveBeenCalledTimes(0);
        expect(handleNewCategory).not.toHaveBeenCalled();
    })
})

