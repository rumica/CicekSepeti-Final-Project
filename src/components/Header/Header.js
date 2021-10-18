import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Styled from 'styled-components';

const Container = Styled.header`
background-color: #ffff;
width: 100%;
height: 80px;
display: flex;
justify-content: space-around;
align-items: center;
margin-bottom: 20px;
.logo img{
  width: 129px;
  height: 42px;
}
.header-buttons .add-product-btn {
    margin: 5px;
    font-weight: 600;
    padding: 5px 10px;
    background-color: #f0f8ff;
    color: #4b9ce2;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: #4b9ce2 ;
        color: #ffff;
    }
    }
   .sign-in-btn {
    margin: 5px;
    font-weight: 600;
    padding: 5px 10px;
    background-color: #f0f8ff;
    color: #4B9CE2;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: #4b9ce2 ;
        color: #ffff;
    }
  }
}
`

function Header() {
    return (
       <Container>
           <div className="logo"><img src={logo} alt="" /></div>
           <div className="header-buttons">
               <Link to="/add-product">
                    <button className="add-product-btn">Ürün Ekle</button>
               </Link>
               <Link to="/login-page">
                    <button className="sign-in-btn">Giriş Yap</button>
               </Link>
           </div>
       </Container>
    )
}

export default Header;
