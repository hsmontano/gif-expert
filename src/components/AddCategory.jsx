import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleOnChange = ({ target }) => {
        setInputValue(target.value);
    }

    const handleOnEvent = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        
        onNewCategory(inputValue.trim());
        //setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
    }

    return (
        <form onSubmit={ handleOnEvent } >
            <input
                id='searchGifs'
                type="text"
                placeholder="Search gifs"
                value={ inputValue }
                onChange={ handleOnChange } />
        </form>
    )
}