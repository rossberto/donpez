import React, { Component } from 'react';
import logo from './donpez.png';
import './App.css';

import {Caja} from './components/Caja/Caja';
import {Historial} from './components/Historial/Historial';
import {Login} from './components/Login/Login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'login',
      token: '',
      userType: ''
    }

    this.handleButton = this.handleButton.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.authorize = this.authorize.bind(this);
  }

  authorize(auth) {
    this.setState({
      token: auth.token,
      userType: auth.userType,
      page: 'caja'
    });
  }

  handleButton(e) {
    this.setState({page: e.target.name});
  }

  handleLogout() {
    this.setState({
      token: '',
      userType: '',
      page: 'login'
    });
  }

  setNav() {
    if (this.state.userType === 'admin') {
      return (
        <div>
          <button onClick={this.handleButton} className="nav-button" type="button" name="caja">Caja</button>
          <button onClick={this.handleButton} className="nav-button" type="button" name="historial">Historial</button>
          <button onClick={this.handleLogout} className="nav-button" type="button" name="salir">Salir</button>
        </div>
      );
    } else if (this.state.userType === 'cashier') {
      return <button onClick={this.handleLogout} className="nav-button" type="button" name="salir">Salir</button>;
    }
  }

  setPage() {
    if (this.state.page === 'caja') {
      return <Caja />;
    } else if (this.state.page === 'historial') {
      return <Historial />;
    } else if (this.state.page === 'login') {
      return <Login authorize={this.authorize} />;
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          {this.setNav()}
        </nav>
        {this.setPage()}
      </div>
    );
  }
}

export default App;
