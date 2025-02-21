import React, { Component } from 'react';
import logo from './donpez.png';
import './App.css';

import {Login} from './components/Login/Login';
import {AdminPage} from './components/AdminPage/AdminPage';
import {CashierPage} from './components/CashierPage/CashierPage';

import {Donpez} from './util/Donpez';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
      cashier: '',
      userType: '',
      accessId: ''
    }

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.authorize = this.authorize.bind(this);
  }

  authorize(auth, user) {
    this.setState({
      token: auth.token,
      cashier: user,
      userType: auth.access_type,
      accessId: auth.id
    });
  }

  handleLogout() {
    Donpez.logout(this.state.token, this.state.accessId);
    this.setState({
      token: '',
      userType: '',
      cashier: '',
      accessId: ''
    });
  }

  setPage() {
    if (this.state.userType === 'Administrador') {
      return <AdminPage cashier={this.state.cashier} token={this.state.token} logout={this.handleLogout} />;
    } else if (this.state.userType === 'Cajero') {
      return <CashierPage cashier={this.state.cashier} token={this.state.token} logout={this.handleLogout} />;
    } else if (this.state.userType === '') {
      return <Login authorize={this.authorize} />;
    }
  }

  componentDidMount() {
      window.addEventListener("beforeunload", (ev) => {
        ev.preventDefault();
        return ev.returnValue = this.handleLogout();
      });
  }

  render() {
    return (
      <div className="App">
        {this.setPage()}
      </div>
    );
  }
}

export default App;
