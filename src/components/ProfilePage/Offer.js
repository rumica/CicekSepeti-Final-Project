import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
margin: 25px 60px;
border-radius: 8px;
color: #525252;
background-color: #ffff;
height: 500px;
.buttons {
    display: flex;
    button {
        color: #B1B1B1;
        border: none;
        background-color: transparent;
        cursor: pointer;
        margin: 20px 30px;
        font-weight: 600;
        font-size: 15px;
        padding-bottom: 7px;
        &:focus {
            color: #4B9CE2;
            border-bottom: 1px solid #4B9CE2;
        }
    }
}
`

function Offer() {
    return (
        <Container>
            <div className="buttons">
                <button>Teklif Aldıklarım</button>
                <button>Teklif Verdiklerim</button>
            </div>
        </Container>
    )
}

export default Offer;
