import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../navbar/navbar.component';
import ProductDetailProduct from './product-detail-product.component.js';
import { ProductConsumer } from '../../context';
import './detail-product.component.css';

export default class DetailProduct extends Component {

  constructor(props){
    super(props);

    this.state = {
      nombre: '',
      nombreFoto: '',
      descripcion: '',
      precio: '',
      stock: '',
    }
  }

  render(){
    let id = this.props.match.params.id;

      return (
          <div className="principal">
            <div className="dataContainer">
              <div className="detailProductDataContainer">
                    <Navbar></Navbar>
                <div className="mainDetailProductContainer">

                  <div className="row show-hide-message">
                    <div></div>
                  </div>

                  <div className="detailProductContainer">
                  <ProductConsumer>
                    {(value) => {
                      return <ProductDetailProduct product = {value.getProduct(id)} />;
                    }}
                  </ProductConsumer>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )

  }
}
