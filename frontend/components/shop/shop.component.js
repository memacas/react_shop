import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from './navbar/navbar.component';
import Showcase from './showcase/showcase.component';
import Checkout from './checkout/checkout.component';
import DetailProduct from './detail-product/detail-product.component';
import './shop.component.css';

export default class Shop extends Component {
  render(){
    return (
      <Router>
        <div className="container">
          <div class="principalShop">
            <div class="dataContainer">
              <div class="showcaseDataContainer">
                    <Navbar></Navbar>
                <div class="mainShowcaseContainer">

                  <div class="row show-hide-message">
                    <div></div>
                  </div>

                  <div class="showcaseContainer">
                  <Switch>
                    <Route exact path="/showcase" component={Showcase} />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route exact path="/detail-product:id" component={DetailProduct} />
                  </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}
