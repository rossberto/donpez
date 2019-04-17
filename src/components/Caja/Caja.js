import React from 'react';

import {ItemPad} from '../ItemPad/ItemPad';
import {TotalBox} from '../TotalBox/TotalBox';

import {Donpez} from '../../util/Donpez';

export class Caja extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {index:0, name: 'Pescado', price: 22, quantity: 0},
        {index:1, name: 'Camarón', price: 26, quantity: 0},
        {index:2, name: 'Bebidas', price: 12, quantity: 0}
      ],
      cashier: 'Cajero 0'
    }

    this.updateQuantity = this.updateQuantity.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal() {
    const costByItem = this.state.items.map(item => {
      return item.price * item.quantity;
    });

    const total = costByItem.reduce( (acc, val) => acc + val );
    //this.setState({total: total});

    return `${total}`;
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

  handlePurchase() {
    const date = new Date();
    Donpez.purchase(date, this.state, this.calculateTotal()).then(jsonResponse => {
      alert(`Compra completada con ID: ${jsonResponse.purchase.id}`);

      this.state.items.map(item => {
        this.changeQuantity(item.index, 0);
      });
    });
  }

  render() {
    return (
      <div className="flex-container-caja">
        <div className="main-pad">
          {this.state.items.map(item => {
            return <ItemPad key={item.index} item={item} update={this.updateQuantity} changeQuantity={this.changeQuantity} />
          })}
        </div>
        <div className="main-pad">
          <TotalBox total={this.calculateTotal()} purchase={this.handlePurchase} />
        </div>
      </div>
    );
  }
}
