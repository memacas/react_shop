import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';

export default class ProductCheckout extends Component{

  render(){
    const {_id, nombre, nombreFoto, precio, stock } = this.props.product;
    const qty = this.props.qty;
    const foto = require("../../assets/images/" + nombreFoto);

    return(
        <div>
          <div className="row">
            <div className="col-md-3">
              <img src={'../' + foto} alt="Lights" style={{maxWidth:'100%'}} />
            </div>
            <div className="col-md-9">
              <div>{nombre}</div>
              <div><strong>Unidades</strong>&nbsp;{ qty }</div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <strong>Subtotal:</strong>&nbsp;{ qty * precio }
            </div>
          </div>
        </div>
    )
  }
}
