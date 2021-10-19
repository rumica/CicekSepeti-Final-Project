import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../Header/Header'
import { useParams } from 'react-router-dom';


function ProductDetail ({ brand, status, color, price}) {

    const { id } = useParams();
    const [item, setItem] = useState({})

    useEffect(() => {
        fetchItem();
    }, [])

    const fetchItem = async () => {
        const data = await fetch (`https://bootcampapi.techcs.io/api/fe/v1/product/${id}`)
        const item = await data.json();
        console.log(item)
        setItem(item)
    }

  return (
    <>
        <Header />
            <div>
                <h4>Marka: {brand}</h4>
                <h4>Renk: {color}</h4>
                <h4>Kullanım Durumu: {status}</h4>
                <h2>{price} TL</h2>     
            </div>
    </>
  )
}

export default ProductDetail;