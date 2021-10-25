import React from 'react'
import Styled from 'styled-components';

const Button = Styled.button`
        border: none;
        background: none;
        cursor: pointer;
        color: #525252;
        padding-bottom: 7px;
        font-weight: 900;
        font-size: 18px;
        &:focus {
            color: #4b9ce2;
            border-bottom: 1px solid #4b9ce2;
        }
`

function Category({ category, id }) {
    return (
        <>          
            <Button>{category.charAt(0).toUpperCase() + category.slice(1)}</Button>       
        </>
    )
}

export default Category;
