import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from "./components/login/login.component";
import Shop from "./components/shop/shop.component";

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/showcase" component={Shop} />
            <Route exact path="/checkout" component={Shop} />
            <Route exact path="/detail-product" component={Shop} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
