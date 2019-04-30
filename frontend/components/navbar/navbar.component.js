import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import { ProductConsumer } from '../../context';

export default class Navbar extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand" href="#">FruVer.com</span>
          </div>
          <ul className="nav navbar-nav navbar-right">

            <li><Link to="/showcase"><span className="glyphicon glyphicon-th"></span></Link></li>
            <li><Link to="/checkout" ><span className="glyphicon glyphicon-shopping-cart">
                  <span  className="badge badge-pill badge-danger">
                    <ProductConsumer>
                      {(value) => {this.props = value; return value.getQtyItemsCompra()}}
                    </ProductConsumer>
                  </span></span></Link></li>
            <li><a><span className="glyphicon glyphicon-inbox"></span></a></li>
            <li><Link to="/login"><span className="glyphicon glyphicon-log-out"></span></Link></li>

          </ul>
        </div>
      </nav>

    )
  }
}
