import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../navbar/navbar.component';
import './showcase.component.css';

const Product = props => (
  <div className="col-md-3">
    <div className="thumbnail">
      <img src={require("../../assets/images/" + props.product.nombreFoto)} alt="Lights" style={{maxHeight:'100px'}} />
      <div className="caption">
        <div><h4>{props.product.nombre}</h4></div>
        <div><strong>Precio: </strong>{props.product.precio}</div>
        <div><strong>Unidades disponibles: </strong>{props.product.stock}</div>
      </div>
      <div className="row">
        <div className="col-lg-5">
          <Link to = {"/detail-product/" + props.product._id}><button type="button" name="button" className="btn btn-info">Ver más</button></Link>
        </div>
        <div className="col-lg-7">
          <form>
            <div className="form-group">
              <button type="button" onClick={() => handleClick('A')} name="button" className="btn btn-warning" >Añadir</button>
              <select className="form-control" name="qty"  id="sel1" style={{width: 'auto', display:'inline'}}>
                <option>1</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default class showcase extends Component {

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {products: [],
                  justClicked: '',
                  letters: ''
    };

  }

  componentDidMount(){
        axios.get('/product/allProducts')
            .then(res => {
              if (res.data.success)
                this.setState({products: res.data.products});
            }).catch(function(err){
              console.log(err);
            });
  }

  productList(){
    return this.state.products.map(function(current_product, i){
      return <Product product={current_product} key={i} />;
    })
  }

  handleClick(letter) {
    console.log(letter);
    //this.setState({ justClicked: letter });
  }

  render(){
    return (
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
                      <form>
                        <div className="form-group">
                          <label htmlFor="buscar">Qué estás buscando?</label>
                          <div>
                            <input className="form-control" type="text" name="buscar" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>{/* FIN DEL ROW DEL ENCABEZADO*/}

                  <div className="row lista-productos" style={{marginTop:20}}>
                    { this.productList() }



                  </div>{/* FIN DEL ROW DE PRODUCTOS */}

                </div>

              </div>
            </div>
          </div>
        </div>
    )
  }
}
