import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../navbar/navbar.component';
import ProductShowcase from './product-showcase.component';
import { ProductConsumer } from '../../context';
import './showcase.component.css';

export default class showcase extends Component {

  constructor(props){
    super(props);

    this.state = {products: [], term_search: localStorage.getItem('term_search')};
  }

  render(){
    return (
      <React.Fragment>
        <div className="principal">
          <div className="dataContainer">
            <div className="showcaseDataContainer">
                  <Navbar></Navbar>
              <div className="mainShowcaseContainer">

                <div className="row show-hide-message">
                  <div></div>
                </div>

                <div className="showcaseContainer">

                  <div className="row">
                    <div className="col-md-9">
                      <h1>Catálogo de productos</h1>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="buscar">Qué estás buscando?</label>
                        <div>
                          <input className="form-control" type="text" name="buscar" defaultValue={ this.state.term_search } onKeyUp={(e) => this.props.filtrarProducts(e.target.value)} />
                        </div>
                      </div>
                    </div>
                  </div>{/* FIN DEL ROW DEL ENCABEZADO*/}

                  <div className="row lista-productos" style={{marginTop:20}}>
                    <ProductConsumer>
                      {(value) => {
                        this.props = value;
                        this.state.term_search = value.term_search;
                        localStorage.setItem('term_search', value.term_search);
                        return value.productos_filtrados.map(product => {
                          return <ProductShowcase key={product._id} product = {product} adicionarProducto = {value.adicionarProducto} />;
                        })
                      }}
                    </ProductConsumer>


                  </div>{/* FIN DEL ROW DE PRODUCTOS */}

                </div>

              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
