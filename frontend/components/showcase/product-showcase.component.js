import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';

export default class ProductShowcase extends Component{

  createSelectQty(stockMax) {
   let items = [];
   for (let i = 1; i <= stockMax; i++) {
     let option = <option key={i} value={i}>{i}</option>;
        items.push(option);
   }
   return items;
 }

  render(){

    const {_id, nombre, nombreFoto, precio, stock } = this.props.product;
    const select=1;

    return(
      <div className="col-md-3">
        <div className="thumbnail">
          <img src={require("../../assets/images/" + nombreFoto)} alt="Lights" style={{maxHeight:'100px'}} />
          <div className="caption">
            <div><h4>{nombre}</h4></div>
            <div><strong>Precio: </strong>{precio}</div>
            <div><strong>Unidades disponibles: </strong>{stock}</div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <Link to={'/detail-product/' + _id}><button type="button" name="button" className="btn btn-info">Ver mas</button></Link>
            </div>
            <div className="col-lg-7">
              <form>
                <div className="form-group">
                  <button type="button" name="button" onClick={() => {this.props.adicionarProducto(_id, this.select)}} className="btn btn-warning" >Añadir</button>
                  <select onChange={(e)=> {this.select = e.target.value} } className="form-control" name="qty"  id="sel1" style={{width: 'auto', display:'inline'}}>
                    {this.createSelectQty(stock)}
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
