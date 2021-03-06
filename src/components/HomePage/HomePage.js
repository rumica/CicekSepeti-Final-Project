import React from 'react'
import Header from '../Header/Header'
import Main from './Main'
import CategoryList from './CategoryList'
import ProductList from './ProductList'

const HomePage = () => {
    return (
        <>
            <Header />
            <Main />
            <CategoryList />
            <ProductList />
        </>
    )
}

export default HomePage;
