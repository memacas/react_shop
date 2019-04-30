import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from '../navbar/navbar.component';
import { ProductConsumer } from '../../context';
import './checkout.component.css';

export default class Checkout extends Component {

  constructor(props){
    super(props);

    console.log(this.props);
  }

  render(){
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
                <ProductConsumer>
                  {(value) => {this.props = value;}}
                </ProductConsumer>


                <div className="showcaseContainer">
                  <h1 className="page-header">Carrito de compras</h1>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="row thumbnail item">
                        <div className="row">
                          <div className="col-md-3">
                            <img alt="Lights" style={{maxWidth:"100%"}} />
                          </div>
                          <div className="col-md-9">
                            <div>
                            nombre
                            </div>
                            <div>
                            <strong>Unidades</strong>&nbsp;qty
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <strong>Subtotal:</strong>&nbsp;qty * precio
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                      <h4>Total: total</h4>
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
