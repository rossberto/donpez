import React, { Component } from 'react';
import logo from './donpez.png';
import './App.css';

import {Login} from './components/Login/Login';
import {AdminPage} from './components/AdminPage/AdminPage';
import {CashierPage} from './components/CashierPage/CashierPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
      userType: ''
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.authorize = this.authorize.bind(this);
  }

  authorize(auth) {
    console.log(auth);
    this.setState({
      token: auth.token,
      userType: auth.access_type
    });
  }

  handleLogout() {
    this.setState({
      token: '',
      userType: ''
    });
  }

  setPage() {
    if (this.state.userType === 'Administrador') {
      return <AdminPage token={this.state.token} logout={this.handleLogout} />;
    } else if (this.state.userType === 'Cajero') {
      return <CashierPage token={this.state.token} logout={this.handleLogout} />;
    } else if (this.state.userType === '') {
      return <Login authorize={this.authorize} />;
    }
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.token}</p>
        {this.setPage()}
      </div>
    );
  }
}

export default App;
