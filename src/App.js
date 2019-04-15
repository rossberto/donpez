import React, { Component } from 'react';
import logo from './donpez.png';
import './App.css';

import {ItemPad} from './components/ItemPad/ItemPad';
import {TotalBox} from './components/TotalBox/TotalBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {name: 'Pescado', price: 22},
        {name: 'Camarón', price: 26},
        {name: 'Bebidas', price: 12}
      ]
    }
  }

  render() {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    if (minutos<10) {
      minutos = '0' + minutos;
    }

    return (
      <div className="App">
        <div className="flex-container">
          <div className="main-pad">
            {this.state.items.map(item => {
              return <ItemPad item={item.name} />
            })}
          </div>
          <div className="main-pad">
            <TotalBox />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
