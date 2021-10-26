import React from 'react'
import Styled from 'styled-components';
import userIcon from '../../assets/user-icon.png'

const Container = Styled.div`
margin: 25px 60px;
color: #525252;
.count {
    display: flex;
    align-items: center;
    background-color: #ffff;
    padding: 16px 26px;
    border-radius: 8px;
    font-weight: 600;
    p {
        padding-left: 10px;
    }
}
`

const ProfileDetail = () => {
    return (
        <Container>
            <div className="count">
                <img src={userIcon} alt="" />
                <p>example@example.com</p>
            </div>
        </Container>
    )
}

export default ProfileDetail;
