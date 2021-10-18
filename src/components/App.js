import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexPage from './HomePage/HomePage';
import RegisterPage from './RegisterPage/RegisterPage'
import LoginPage from './LoginPage/LoginPage'; 
import ProductDetail from './ProductDetailPage/ProductDetail';
import '../css/Style.css'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/register-page" exact component={RegisterPage} />
        <Route path="/login-page" exact component={LoginPage} />
        <Route path="/product-detail-page/:id" exact component={ProductDetail} />
      </Switch>
    </Router>
  )
}

export default App;
