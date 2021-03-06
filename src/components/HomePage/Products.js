import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = Styled.div`
    display: flex;
   justify-content: space-around;
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
        img{
            width: 100%;
            margin: 0 auto;
        }
        .brand-color {
            display: flex;
            justify-content: space-between;
            p {
                font-size: 15px;
                margin-top: 10px;
                font-weight: 900;
            }
            .brand {
                color: #4B9CE2;
            }
            .color {
                color: #3E3E3E;
                span {
                    font-weight: 300;
                }
            }
        }
        h4 {
            margin-top: 25px;
            font-size: 18px;
            color: #3E3E3E;
        }
    }
`

function Products ({ brand, price, color, image, status, desc, id, data }) {

  return (
    <>
        <Container>    
            <Link to={`/product/${id}`}>
                <CardContainer key={id}>
                    <div  className="card-info">
                        <img src={image} alt="" />
                            <div className="brand-color">
                                <p className="brand">{brand.charAt(0).toUpperCase() + brand.slice(1)}</p>
                                <p className="color">Renk: <span>{color.charAt(0).toUpperCase() + color.slice(1)}</span></p>
                            </div>
                        <h4>{price} TL</h4>
                    </div>
                </CardContainer>
            </Link>
        </Container>
    </>
  )
}

export default Products;