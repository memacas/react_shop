import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './login.component.css';

export default class Login extends Component {
  render(){
    return (
      <Router>
        <div className="container">
          <div className="principalLogin">
            <div className="loginContainer">

              <div className="row show-hide-message">
                <div></div>
              </div>
                ESTAMOS EN EL LOGIN
              {/*
              <form [formGroup]="form" (submit)="onLoginSubmit()">

                <div className="form-group">
                  <div [ngClass]="{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }">
                    <input className="form-control" type="text" name="username" formControlName="username" placeholder="username"/>
                    <!-- Validación -->
                    <ul className="help-block">
                      <li *ngIf="form.controls.username.errors?.required && form.controls.username.dirty">Este campo es obligatorio.</li>
                    </ul>
                  </div>
                </div>

                <div className="form-group">
                  <div [ngClass]="{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }">
                    <input className="form-control" type="password" name="password" formControlName="password" placeholder="password"/>
                    <!-- Validación -->
                    <ul className="help-block">
                      <li *ngIf="form.controls.password.errors?.required && form.controls.password.dirty">Este campo es obligatorio.</li>
                    </ul>
                  </div>
                </div>
                <!-- Submit Button -->
                <input [disabled]="!form.valid || processing" className="btn btn-primary" type="submit" value="Ingresar" />
              </form>
              */}

            </div>
          </div>
        </div>
      </Router>
    )
  }
}
