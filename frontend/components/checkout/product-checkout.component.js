import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';

export default class ProductDetailProduct extends Component{

  render(){

    const {_id, nombre, nombreFoto, precio, stock } = this.props.product;

    //const foto = require("../../assets/images/" + nombreFoto);

    return(
            /*{<img src={'../' + foto} style={{ maxHeight: '300px' }} />}*/

          <div className="row">
            <div className="col-md-3">
              <img src={require("../../assets/images/" + nombreFoto)} alt="Lights" style="max-width:100%">
            </div>
            <div className="col-md-9">
              {{ item.product.nombre }}
              <br>
              <strong>Unidades</strong>&nbsp;{ qty }
              <br>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <strong>Subtotal:</strong>&nbsp;{ qty * precio }
            </div>
          </div>
    )
  }
}
