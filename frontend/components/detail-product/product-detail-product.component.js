import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';

export default class ProductDetailProduct extends Component{

  render(){

    const {_id, nombre, nombreFoto, precio, stock } = this.props.product;

    const foto = require("../../assets/images/" + nombreFoto);

    return(
      <div>
        <h1 className="page-header">{ nombre }</h1>

        <div className="row">
          <div className="thumbnail col-md-6">
            <img src={'../' + foto} style={{ maxHeight: '300px' }} />
          </div>

          <div className="col-md-6">
            <div><h4>{ nombre }</h4></div>
            <div><strong>Precio: </strong>{ precio }</div>
            <div><strong>Unidades disponibles: </strong>{ stock }</div>
          </div>

        </div>

        <div className="row">
          <div className="col-lg-5">
            <Link to="/showcase"><button type="button" name="button" className="btn btn-default">Atràs</button></Link>
          </div>
        </div>
      </div>
    )
  }
}
