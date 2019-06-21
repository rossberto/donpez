import React from 'react';

import {ItemPad} from '../ItemPad/ItemPad';
import {TotalBox} from '../TotalBox/TotalBox';
import {Receipt} from '../Receipt/Receipt';

import {Donpez} from '../../util/Donpez';

export class Caja extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {index:0, name: 'Pescado', price: 15, quantity: 0},
        {index:1, name: 'Camarón', price: 20, quantity: 0},
        {index:2, name: 'Bebidas', price: 10, quantity: 0}
      ],
      payment: 0,
      sale: {}
    }

    this.updateQuantity = this.updateQuantity.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.payment = this.payment.bind(this);
  }

  calculateTotal() {
    const costByItem = this.state.items.map(item => {
      return item.price * item.quantity;
    });

    const total = costByItem.reduce( (acc, val) => acc + val );

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

  payment(payment) {
    this.setState({payment: payment});
  }

  handlePurchase() {
    const items = {
      tacosPescado: this.state.items[0].quantity,
      tacosCamaron: this.state.items[1].quantity,
      bebidas: this.state.items[2].quantity
    };
    const priceId = 3;

    Donpez.purchase(this.props.token, items, priceId).then(sale => {
      this.setState({sale: sale});

      console.log(sale);
      window.print();

      this.state.items.map(item => {
        this.changeQuantity(item.index, 0);
      });
    });
  }

  render() {
    const prices = {
      pescado: this.state.items[0].price,
      camaron: this.state.items[1].price,
      bebidas: this.state.items[2].price
    };

    return (
      <div>
        <div className="flex-container-caja">
          <div className="main-pad">
            {this.state.items.map(item => {
              return <ItemPad key={item.index} item={item} update={this.updateQuantity} changeQuantity={this.changeQuantity} />
            })}
          </div>
          <div className="main-pad">
            <TotalBox total={this.calculateTotal()} purchase={this.handlePurchase} payment={this.payment} />
          </div>
        </div>
        <Receipt cashier={this.props.cashier} sale={this.state.sale} payment={this.state.payment} prices={prices} />
      </div>
    );
  }
}
