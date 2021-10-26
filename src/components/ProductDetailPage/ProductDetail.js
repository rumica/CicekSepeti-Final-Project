import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Styled from 'styled-components';

const Container = Styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #ffff;
    color: #555555;
    width: 1300px;
    height: 600px;
    border-radius: 8px;
    padding: 10px;
    margin: auto;
    img {
        width: 40%;
        border-radius: 5px;
    }
    .card-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 55%;
        padding: 20px;
        h1 {
            margin-bottom: 20px;
            font-weight: 500;
        }       
        .product-info {
            margin-bottom: 5px;
            h4{
                margin-bottom: 15px;
                span{
                     position: absolute;
                     left: 900px;
                     font-weight: 500;

                }
            }
        }

        h2{
            margin-bottom: 20px;
        }
        
            button:not(:first-child) {
                margin-left: 10px;
                background-color: #F0F8FF;
                color: #4B9CE2;
            }
            button {
                width: 200px;
                height: 40px;
                font-weight: 600;
                border-radius: 8px;
                border: none;
                outline: none;
                cursor: pointer;
                background-color: #4B9CE2;
                color: #FFFFFF;
            }
            h3 {
                margin-top: 20px;
                margin-bottom: 10px;
            }
        
}
`
function ProductDetail () {

    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(async () => {
        const data = await fetch (`https://bootcampapi.techcs.io/api/fe/v1/product/${id}`)
        const item = await data.json();
        setItem(item)
    }, [])

    let title = `${item?.title}`
    let brand = `${item?.brand?.title}`
    let color = `${item?.color?.title}`
    let status = `${item?.status?.title}`
    let description = `${item?.description}`

  return (
    <>
        <Container>
            <img src={item?.imageUrl} alt="" />
            <div className="card-container">
                    <h1>{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
                    <div className="product-info">
                        <h4>Marka: <span>{brand.charAt(0).toUpperCase() + brand.slice(1)}</span></h4>
                        <h4>Renk: <span>{color.charAt(0).toUpperCase() + color.slice(1)}</span></h4>
                        <h4>Kullanım Durumu: <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span></h4>
                    </div>               
                <h2>{item?.price} TL</h2>
                <div className="buttons">
                    <button className="buy-btn">Satın Al</button>
                    <button className="offer-btn">Teklif Ver</button>
                </div>
                <h3>Açıklama</h3>
                <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
            </div>
        </Container>
    </>
  )
}

export default ProductDetail;