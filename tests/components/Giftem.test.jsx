import { render, screen } from "@testing-library/react";
import { Giftem }from "../../src/components";

describe('Pruebas en <GifItem />', () => { 
    const title = "Francisco";
    const url = "https://localhost/algo.jpg";

    test('debe de hacer match con el snapshot', () => {
        const {container} = render(<Giftem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<Giftem title={title} url={url} />);
        //screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de mostrar el titulo en el componente', () => {
        render(<Giftem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
});