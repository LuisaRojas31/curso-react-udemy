import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    //const categories = ['One puch', 'goku', 'frida' ];
    const [categories, setCategories] = useState(['One puch' ]);

    //const handleAdd = (value) => {
      // setCategories([...categories, 'papenelope'] );
    //}

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />
        
        <ol>
           {
               categories.map( category => (
                <GifGrid 
                key={ category }
                category= { category }
                />
                ))
                 }
        </ol>
        </>
    )
}