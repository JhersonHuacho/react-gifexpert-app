import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();        
        console.log('Submit hecho');
        if (inputValue.trim().length <= 1) return;

        // setCategories(categories => [...categories, inputValue]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    };
    return (
        <>
            <form action="" onSubmit={handleSubmit} aria-label="form">
                <input
                    type="text"
                    placeholder="Buscar gifs.."
                    value={inputValue}
                    onChange={handleInputChange}
                // onChange={(event) => handleInputChange(event)}
                />
            </form>
        </>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};