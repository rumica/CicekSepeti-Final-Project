import React from 'react';
import RegisterItem from './RegisterItem';
import loginImage from '../../assets/login-page-image.png';
import logo from '../../assets/logo.png';
import Styled from 'styled-components';

const Container = Styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 100vh;
.login-image {
    width: 600px;
    height: 721px;
}
.main-container {
    background-color: #fbfbfb;
    height: 100%;
    width: 1080px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logo {
        width:225px;
        height: 74px;
        margin-bottom: 40px;
    }
}
`

function RegisterPage({ error }) {
    return (
        
        <Container>
            <img className="login-image"src={loginImage} alt="" />
            <div className="main-container">
                <img className="logo"src={logo} alt="" />
                <div>
                    <RegisterItem />
                </div>
            </div>
        </Container>
    )
}

export default RegisterPage;
