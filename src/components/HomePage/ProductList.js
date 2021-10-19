import React, { useState, useContext } from "react";
import Products from "./Products";
import { ProductContext } from "../../context/ProductContext";


const MovieList = () => {

    const [items, setItems] = useContext(ProductContext);

    return(
        <>
            <div style={{display: "flex", alignItmes: "center", flexWrap: "wrap", justifyContent: "space-around"}}>
                {items.map(item => (
                    <Products 
                    brand={item.brand.title}
                    price={item.price}
                    color={item.color.title}
                    image={item.imageUrl}
                    desc={item.description}
                    status={item.status.title}
                    id={item.id}
                    
                    />
                ))}
            </div>
        </>
    );
}

export default MovieList;