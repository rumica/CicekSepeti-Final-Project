import react, { useState, useEffect } from 'react';
import Products from './Products';
import Styled from 'styled-components';
import bannerImg from '../../assets/banner.png';


const Banner = Styled.div`
    .banner {
        display: flex;
        justify-content: center;
        img {
            width: 1300px;
            margin-top: 15px;
        }
    }
`

const Categories = Styled.div `
    margin: 25px 60px;
    display: flex;
    justify-content: space-around;
    button {
        border: none;
        background: none;
        cursor: pointer;
        color: #525252;
        padding-bottom: 7px;
        &:focus {
            color: #4b9ce2;
            border-bottom: 1px solid #4b9ce2;
        }
    }
`

function Main() {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://bootcampapi.techcs.io/api/fe/v1/detail/category/all')
        .then((response) => response.json())
        .then(response => setCategories(response))
      }, [])


    return (
        <>
            <Banner>
                <div className="banner">
                    <img src={bannerImg} alt="" />
                </div>
            </Banner>
            <Categories>
                {categories.map(category => {
                    return (
                        <button>{category.title.toUpperCase()}</button>
                    )
                })}
            </Categories>
            <Products />
        </>
    )
}

export default Main;


