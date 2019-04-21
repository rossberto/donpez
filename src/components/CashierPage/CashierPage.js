import React from 'react';

import {Caja} from '../Caja/Caja';

export class CashierPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <nav>
          <button onClick={this.handleLogout} className="nav-button" type="button" name="salir">Salir</button>
        </nav>
        <Caja token={this.props.token} user-type="Cajero" />
      </div>
    );
  }
}
