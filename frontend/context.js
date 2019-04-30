import React, { Component } from 'react';
import axios from 'axios';
const ProductContext = React.createContext();

class ProductProvider extends Component {


  constructor(props){
    super(props);
  }

  state = {
            products: [],
            productos_filtrados: [],
            cart: {
              id: '',
              qty: 0
            },
            qty_items: 0,
            detail_product: {
              nombre: '',
              nombreFoto: '',
              descripcion: '',
              precio: 0,
              stock: 0
            },
            term_search: ''
          };

  componentDidMount(){
        axios.get('/product/allProducts')
            .then(res => {
              if (res.data.success){
                this.setState({products: res.data.products, productos_filtrados: res.data.products});
              }
            }).catch(function(err){
              console.log(err);
            });
  }

  getProduct = (id) => {
    let prod = this.state.products.filter(function(product){
                return product._id.includes(id);
              })
    if (prod.length > 0) prod = prod[0];
    return prod;
  }

  finalizarCompra = () => {
  }

  adicionarProducto = (id, qty) =>{
    if (!qty) qty = 1;
    else qty = parseInt(qty, 0);
    this.setState(prevState => ({
    cart: [...prevState.cart, {id: id, qty: qty}]
    }))
    let qty_items = this.state.qty_items;
    this.setState({qty_items: qty + qty_items});
  }

  getQtyItemsCompra = () => {
    return this.state.qty_items;
  }

  filtrarProducts = (term) => {
    let prod_filter;
    if (term == undefined || term == '') prod_filter =  this.state.products;
      else {
        prod_filter = this.state.products.filter(function(product){
          return product.nombre.toLowerCase().includes(term.toLowerCase());
      });
    }
    this.setState({productos_filtrados: prod_filter, term_search: term})
  }

  render(){
    return (
      <ProductContext.Provider value={{products: this.state.products,
                                      adicionarProducto: this.adicionarProducto,
                                      finalizarCompra: this.finalizarCompra,
                                      getQtyItemsCompra: this.getQtyItemsCompra,
                                      getProduct: this.getProduct,
                                      filtrarProducts: this.filtrarProducts,
                                      productos_filtrados: this.state.productos_filtrados,
                                      term_search: this.state.term_search
                                    }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
