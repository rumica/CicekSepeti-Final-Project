import React, { useState, useContext } from "react";
import ProductDetail from "../ProductDetailPage/ProductDetail";
import { ProductContext } from "../../context/ProductContext";


const MapProductDetail = () => {

    const [items, setItems] = useContext(ProductContext);

    return(
        <>
            <div style={{display: "flex", alignItmes: "center", flexWrap: "wrap", justifyContent: "space-around"}}>
                {items.map(item => (
                    <ProductDetail 
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

export default MapProductDetail;