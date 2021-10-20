import React, { useState, createContext, useEffect } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, [])

    const fetchCategories = async () => {
        const data = await fetch ('https://bootcampapi.techcs.io/api/fe/v1/detail/category/all')
        const categories = await data.json();
        setCategories(categories)
    }

    return (
        <CategoryContext.Provider value={[categories, setCategories]}>
            {props.children}
        </CategoryContext.Provider>
    );
}