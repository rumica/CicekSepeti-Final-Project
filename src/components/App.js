import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddProduct from './AddProductPage/AddProduct';
import HomePage from './HomePage/HomePage';
import RegisterPage from './RegisterPage/RegisterPage'
import LoginPage from './LoginPage/LoginPage'; 
import ProductDetail from './ProductDetailPage/ProductDetail';
import '../css/Style.css'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register-page" exact component={RegisterPage} />
        <Route path="/login-page" exact component={LoginPage} />
        <Route path="/product/:id" exact component={ProductDetail} />
        <Route path="/add-product/" exact component={AddProduct} />
      </Switch>
    </Router>
  )
}

export default App;
