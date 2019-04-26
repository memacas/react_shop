import React, { Component } from 'react';

export default class Navbar extends Component {
  render(){
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">FruVer.com</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><a ><span className="glyphicon glyphicon-th"></span></a></li>
            <li><a ><span className="glyphicon glyphicon-shopping-cart"><span  className="badge badge-pill badge-danger">5</span></span></a></li>
            <li><a ><span className="glyphicon glyphicon-inbox"></span></a></li>
            <li><a ><span className="glyphicon glyphicon-log-out"></span></a></li>

          </ul>
        </div>
      </nav>

    )
  }
}
