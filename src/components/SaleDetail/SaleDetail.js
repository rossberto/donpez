import React from 'react';

export class SaleDetail extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('se pidio borrar' + this.props.details.id);
    this.props.delete(this.props.details.id);
  }

  render() {
    return (
      <div className="sale-detail">
        <h3>ID: {this.props.details.id} <a onClick={this.handleClick} href="#">-</a></h3>
        <h3>Hora: 10:30 AM</h3>
        <h3>Cajero: {this.props.details.cashier}</h3>
        <h3>Tacos de pescado: {this.props.details.tacos_pescado}</h3>
        <h3>Tacos de camaron: {this.props.details.tacos_camaron}</h3>
        <h3>Bebidas: {this.props.details.bebidas}</h3>
        <h3>Total pagado: {this.props.details.total}</h3>
      </div>
    );
  }
}
