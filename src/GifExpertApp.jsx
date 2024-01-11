import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1> 
                Gif Expert App 
            </h1>
            <div className='category'>
                <AddCategory 
                    onNewCategory={onAddCategory} />
            </div>
            <ol>
                {
                    categories.map(
                        (category) => <GifGrid key={category} category={category} />
                        )
                }
            </ol>
        </>
    )
}