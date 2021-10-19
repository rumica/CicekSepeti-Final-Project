import React, { useState, createContext, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = async () => {
        const data = await fetch ('https://bootcampapi.techcs.io/api/fe/v1/product/all')
        const items = await data.json();
        console.log(items)
        setItems(items)
    }

    return (
        <ProductContext.Provider value={[items, setItems]}>
            {props.children}
        </ProductContext.Provider>
    );
}