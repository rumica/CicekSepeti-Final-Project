import React from 'react';
import { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = Styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin: 20px 80px;
`

const CardContainer = Styled.div `
    width: 280px;
    height: 400px;
    background-color: #ffff;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 8px;
    .card-info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .brand {
            font-size: 15px;
        }
        .color {
            font-size: 15px;
        }
    }
`


function Products () {

    const [items, setItems] = useState([])

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
    <>
        <Container>
            {items.map(item => {
                return (
                    <CardContainer>
                        <div key={item.id} className="card-info">
                            <Link to={`/product-detail-page/${item.id}`}>
                            <img src={item.imageUrl} alt="" />
                                <h2 className="brand">{item.brand.title}</h2>
                                <h2 className="color">Renk: {item.color.title}</h2>
                            <h4>{item.price}</h4>
                            </Link>
                        </div>
                    </CardContainer>
                )
            })}
        </Container>
    </>
  )
}

export default Products;