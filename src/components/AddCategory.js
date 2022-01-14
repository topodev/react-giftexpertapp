import React, { useState } from 'react';
import Proptypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        
        setInputValue(e.target.value)
    }

    const handlesubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length>2){

            setCategories( cats=>[ inputValue, ...cats ]);
            setInputValue('');
        }

        

    }

    return (
       
            <form onSubmit={handlesubmit}>
            <input
            type="text"
            value={inputValue}
            onChange={ handleInputChange}         
            />
            
            </form>
            
        
    )
}

AddCategory.prototype={
    setCategories: Proptypes.func.isRequired
}
