import React from 'react';
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

const Main = () => {

    return (
        <>
           <Banner>
                <div className="banner">
                    <img src={bannerImg} alt="" />
                </div>
            </Banner>
              
        </>
    )
}

export default Main;


