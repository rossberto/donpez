import React from 'react';

export class TotalBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payment: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    const payment = e.target.value;
    this.setState({payment: payment})
  }

  getPayment() {
    if (this.state.payment === 0) {
      return '';
    } else {
      return this.state.payment;
    }
  }

  checkPositive() {
    const change = this.state.payment - this.props.total;
    if (change < 0) {
      return 'active';
    } else {
      return '';
    }
  }

  calculateChange() {
    const change = this.state.payment - this.props.total;
    return change;
  }

  handleReset() {
    this.setState({payment: 0});
  }

  render() {
    return (
      <div className="total">
        <h2>TOTAL A PAGAR</h2>
        <h1>${this.props.total}</h1>
        <h2>Entrega</h2>
        <input onChange={this.handleChange} className="entrega" placeholder="$0" value={this.getPayment()}></input>
        <h2>Cambio</h2>
        <h1 id={this.checkPositive()}>${this.calculateChange()}</h1>
        <button onClick={this.handleReset} className="total-button">Borrar</button>
        <button className="total-button">Cobrar</button>
      </div>
    );
  }
}
