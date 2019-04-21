import React from 'react';

import {Caja} from '../Caja/Caja';
import {Historial} from '../Historial/Historial';
import {Users} from '../Users/Users';

export class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'users'
    }

    this.handleButton = this.handleButton.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleButton(e) {
    this.setState({view: e.target.name});
  }

  handleLogout() {
    this.props.logout();
  }

  setView() {
    const view = this.state.view;
    switch (view) {
      case 'caja':
        return <Caja user-type="Administrador" />;
        break;
      case 'historial':
        return <Historial />;
        break;
      case 'users':
        return <Users />;
        break;
      default:
        return <h1>Error: No deberías ver esto</h1>;
    }
  }

  render() {
    return (
      <div>
        <nav>
          <button onClick={this.handleButton} className="nav-button" type="button" name="caja">Caja</button>
          <button onClick={this.handleButton} className="nav-button" type="button" name="historial">Historial</button>
          <button onClick={this.handleButton} className="nav-button" type="button" name="users">Usuarios</button>
          <button onClick={this.handleLogout} className="nav-button" type="button" name="salir">Salir</button>
        </nav>
        {this.setView()}
      </div>
    );
  }
}
