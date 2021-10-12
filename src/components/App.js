import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexPage from './IndexPage/IndexPage';
import RegisterPage from './RegisterPage/RegisterPage'
import LoginPage from './LoginPage/LoginPage'; 
import '../css/Style.css'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/register-page" exact component={RegisterPage} />
        <Route path="/login-page" exact component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default App;
