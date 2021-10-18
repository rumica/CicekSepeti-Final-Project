import React from 'react';
import { useEffect, useState } from 'react';
import { NavbarBrand } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


function ProductDetail () {

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
        <div>
            <h2>Marka: {item.brand.title}</h2>
            <h2>Renk: {item.color.title}</h2>
            {/*title kısmını okuyamıyor*/}
        </div>
    </>
  )
}

export default ProductDetail;