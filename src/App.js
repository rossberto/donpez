import React, { Component } from 'react';
import logo from './donpez.png';
import './App.css';

import {Caja} from './components/Caja/Caja';
import {Historial} from './components/Historial/Historial';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'historial'
    }

    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(e) {
    this.setState({page: e.target.name});
  }

  setPage() {
    if (this.state.page === 'caja') {
      return <Caja />;
    } else if (this.state.page === 'historial') {
      return <Historial />
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          <button onClick={this.handleButton} className="nav-button" type="button" name="caja">Caja</button>
          <button onClick={this.handleButton} className="nav-button" type="button" name="historial">Historial</button>
        </nav>
        {this.setPage()}
      </div>
    );
  }
}

export default App;
