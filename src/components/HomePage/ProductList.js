import React, { useState, useContext } from "react";
import Products from "./Products";
import ProductDetail from "../ProductDetailPage/ProductDetail";
import { ProductContext } from "../../context/ProductContext";


const ProductList = () => {

    const [items, setItems] = useContext(ProductContext);

    return(
        <>
            <div style={{display: "flex", alignItmes: "center", flexWrap: "wrap", justifyContent: "space-around", margin:"20px 70px"}}>
                {items.map(item => (
                    <Products 
                    key={item.id}
                    data={item}
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

export default ProductList;