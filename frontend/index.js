import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ProductProvider } from './context';
import App from './App';

render(
  <ProductProvider>
    <Router>
      <App/>
    </Router>
  </ProductProvider>
  , document.getElementById('app'));
