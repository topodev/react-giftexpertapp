import React from 'react'
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

    
    const [categories, setCategories] = useState(['One Punch']);

    
    return (
        <div>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                categories.map(category =>(
                     <GifGrid 
                     key={category}
                     category={category}/>
                ))
                }
            </ol>
            
        </div>
    )
}
