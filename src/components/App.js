import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddProduct from './AddProductPage/AddProduct';
import HomePage from './HomePage/HomePage';
import RegisterPage from './RegisterPage/RegisterPage'
import LoginPage from './LoginPage/LoginPage'; 
import ProductDetailPage from './ProductDetailPage/ProductDetailPage';
import Profile from './ProfilePage/Profile';
import { CategoryProvider } from '../contexts/CategoryContext';
import { ProductProvider } from '../contexts/ProductContext';
import '../scss/Style.scss'

function App() {
  return (
    <ProductProvider>
      <CategoryProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/register-page" exact component={RegisterPage} />
            <Route path="/login-page" exact component={LoginPage} />
            <Route path="/product/:id" exact component={ProductDetailPage} />
            <Route path="/add-product/" exact component={AddProduct} />
            <Route path="/profile-page/" exact component={Profile} />
          </Switch>
        </Router>
        </CategoryProvider>
    </ProductProvider>
  )
}

export default App;
