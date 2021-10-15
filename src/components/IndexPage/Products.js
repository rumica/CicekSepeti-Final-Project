import React from 'react';
import { useEffect, useState } from 'react';
import Styled from 'styled-components';

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

  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('http://bootcampapi.techcs.io/api/fe/v1/product/all')
    .then((response) => response.json())
    .then(response => setProducts(response))
  }, [])



  return (
    <>
        <Container>
            {products.map(product => {
                return (
                    <CardContainer>
                        <div className="card-info">
                            <img src={product.imageUrl} alt="" />
                                <h2 className="brand">{product.brand.title}</h2>
                                <h2 className="color">Renk: {product.color.title}</h2>
                            <h4>{product.price}</h4>
                        </div>
                    </CardContainer>
                )
            })}
        </Container>
    </>
  )
}

export default Products;