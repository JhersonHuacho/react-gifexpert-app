import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {
        console.log(newCategory);
        if (categories.includes(newCategory)) {
            return;
        }
        setCategories([...categories, newCategory]);
        // setCategories(category => [...category, 'HunterXHunter']);
    };

    console.log(categories);

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory
                // setCategories={setCategories} 
                onNewCategory={event => onAddCategory(event)}
            />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}
