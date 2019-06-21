import React from 'react';

function getZeroNumber(number) {
  if (number <10) {
    return '0' + number;
  } else {
    return number;
  }
}

export class SaleDetail extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.getTime = this.getTime.bind(this);
  }

  handleClick() {
    this.props.delete(this.props.details.id);
  }

  getTime() {
    const date = new Date(this.props.details.date);
    const minutes = getZeroNumber(date.getMinutes());
    const seconds = getZeroNumber(date.getSeconds());

    return date.getHours() + ':' + minutes + ':' + seconds;
  }

  render() {
    return (
      <div className="sale-detail">
        <h3>ID: {this.props.details.id} <a onClick={this.handleClick} href="#">-</a></h3>
        <h3>Hora: {this.getTime()}</h3>
        <h3>Cajero: {this.props.details.cashier}</h3>
        <h3>Tacos de pescado: {this.props.details.tacos_pescado}</h3>
        <h3>Tacos de camaron: {this.props.details.tacos_camaron}</h3>
        <h3>Bebidas: {this.props.details.bebidas}</h3>
        <h3>Jugos: {this.props.details.jugos}</h3>
        <h3>Total pagado: ${this.props.details.total}</h3>
      </div>
    );
  }
}
