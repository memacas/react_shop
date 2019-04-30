import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import './login.component.css';

export default class Login extends Component {

  constructor(props){
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: 'pruebauser06',
      password: 'pruebapass'
    }

    axios.get('/authentication/createUser')
        .then(res => console.log(res.data));

    axios.get('/product/createManyProducts')
        .then(res => console.log(res.data));
  }

  onChangeUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();

    this.setState({
      username: '',
      password: ''
    })

    const login = {
      username: this.state.username,
      password: this.state.password
    }

    axios.post('/authentication/login', login)
        .then(res => {
          if (res.data.success){
            setTimeout(() => {
            window.location.href = '/showcase';
          }, 1000)
          }
        });

  }

  render(){
    return (
      <Router>
        <div className="container">
          <div className="principalLogin">
            <div className="loginContainer">

              <div className="row show-hide-message">
                <div></div>
              </div>

              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
                </div>

                <div className="form-group">
                  <input className="btn btn-primary" type="submit" value="Ingresar" />
                </div>

              </form>

            </div>
          </div>
        </div>
      </Router>
    )
  }
}
