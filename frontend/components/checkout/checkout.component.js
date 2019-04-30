import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from '../navbar/navbar.component';
import { ProductConsumer } from '../../context';
import  ProductCheckout  from './product-checkout.component';
import './checkout.component.css';

export default class Checkout extends Component {

  render(){

    const total = 0;

    return (
        <div className="principal">
          <div className="dataContainer">
            <div className="checkoutDataContainer">
                  <Navbar></Navbar>
              <div className="mainCheckoutContainer">

                <div className="row show-hide-message">
                  <div></div>
                </div>

                <div className="checkoutContainer">

                <div className="showcaseContainer">
                  <h1 className="page-header">Carrito de compras</h1>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="row thumbnail item">

                      <ProductConsumer>
                        {(value) => {
                          this.props = value;
                          return value.cart.map(item => {
                            return <ProductCheckout key={item.id} qty={item.qty} product = {item.detail_product} />;})
                        }}
                      </ProductConsumer>



                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                      <h4>Total:&nbsp; &nbsp;
                      <ProductConsumer>
                        {(value) => {return value.getTotal()}}
                      </ProductConsumer>
                      </h4>
                      </div>
                      <div>
                        <Link to={'/showcase'}><button type="button" name="button" className="btn btn-default">Cancelar</button></Link>
                        <button type="button" onClick={() => {this.props.finalizarCompra()}} name="button" className="btn btn-default">Pagar</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
