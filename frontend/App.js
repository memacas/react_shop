import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from "./components/login/login.component";
import Checkout from "./components/checkout/checkout.component";
import Showcase from "./components/showcase/showcase.component";
import DetailProduct from "./components/detail-product/detail-product.component";
import './App.css';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <div className="container">
          <Switch>
            <Route exact path="/showcase" component={Showcase} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/detail-product/:id" component={DetailProduct}  />
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Login} />
          </Switch>
        </div>

      </React.Fragment>
    )
  }
}

export default App;
