import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
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

const Header = () => {

    let isLogged = sessionStorage.getItem("token") !== null;

    let history = useHistory(); 

    const handleClick = () => {
       isLogged ? history.push("/profile-page") : history.push("/login-page")
      }
   
    return (
       <Container>
           <Link to="/">
                <div className="logo"><img src={logo} alt="" /></div>
           </Link>
           <div className="header-buttons">
               <Link to="/add-product">
                    <button className="add-product-btn">Ürün Ekle</button>
               </Link>
               <button onClick={handleClick} className="sign-in-btn">{isLogged ? 'Hesabım ✅' : 'Giriş Yap'}</button>       
           </div>
       </Container>
    )
}

export default Header;
