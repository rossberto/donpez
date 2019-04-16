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
        {index:0, name: 'Pescado', price: 22, quantity: 0},
        {index:1, name: 'Camarón', price: 26, quantity: 0},
        {index:2, name: 'Bebidas', price: 12, quantity: 0}
      ]
    }

    this.updateQuantity = this.updateQuantity.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  calculateTotal() {
    const costByItem = this.state.items.map(item => {
      return item.price * item.quantity;
    });

    return `${costByItem.reduce( (acc, val) => acc + val )}`;
  }

  updateQuantity(index, type) {
    let quantity = this.state.items[index].quantity;

    if (type === '+') {
      quantity++;
    } else if (type === '-') {
      if (quantity > 0) {
        quantity--;
      }
    }

    let items = this.state.items;
    items[index].quantity = quantity;
    this.setState({items: items });
  }

  changeQuantity(index, value) {
    let items = this.state.items;

    if (value >= 0) {
      items[index].quantity = value;
    } else {
      items[index].quantity = 0;
    }

    this.setState({items: items});
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
              return <ItemPad key={item.index} item={item} update={this.updateQuantity} changeQuantity={this.changeQuantity} />
            })}
          </div>
          <div className="main-pad">
            <TotalBox total={this.calculateTotal()} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
