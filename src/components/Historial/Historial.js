import React from 'react';

import {SaleDetail} from '../SaleDetail/SaleDetail';

import './Historial.css';
import {Donpez} from '../../util/Donpez';


export class Historial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: [],
      total_sale: {
        total: 0,
        tacosPescado: 0,
        tacosCamaron: 0,
        bebidas: 0,
        jugos: 0
      },
      lastUpdate: [16, 3, 19],
      updateTime: '',
      interval: '2019-04-22to'
    };

    this.handleButton = this.handleButton.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getTotals(sales) {
    const totalPescado = sales.reduce( (acc, sale) => {
      return acc + sale.tacos_pescado;
    }, 0);

    const totalCamaron = sales.reduce( (acc, sale) => {
      return acc + sale.tacos_camaron;
    }, 0);

    const totalBebidas = sales.reduce( (acc, sale) => {
      return acc + sale.bebidas;
    }, 0);

    const totalJugos = sales.reduce( (acc, sale) => {
      return acc + sale.jugos;
    }, 0);

    const total = sales.reduce( (acc, sale) => {
      return acc + sale.total;
    }, 0);

    const totals = {
      tacosPescado: totalPescado,
      tacosCamaron: totalCamaron,
      bebidas: totalBebidas,
      jugos: totalJugos,
      total: total
    }
    return totals;
  }

  handleChange(e) {
    const range = this.state.interval;

    if (e.target.name === 'start') {
      const end = range.split('to')[1];
      this.setState({interval: e.target.value + 'to' + end});
    } else if (e.target.name === 'end') {
      const start = range.split('to')[0];
      this.setState({interval: start + 'to' + e.target.value})
    }

  }

  handleButton(e) {
    console.log(this.state.interval);
    Donpez.sales(this.props.token, this.state.interval).then(sales => {
      const totalSale = this.getTotals(sales);
      console.log(sales);
      const date = new Date();
      this.setState({
        sales: sales,
        total_sale: totalSale,
        lastUpdate: [date.getDate(), date.getMonth(), date.getFullYear()],
        updateTime: `${date.getHours()}:${date.getMinutes()} Hrs`
      });
    });
  }

  getAvgSale() {
    if (this.state.sales.length === 0) {
      return 0;
    } else {
      return this.state.total_sale.total / this.state.sales.length;
    }
  }

  handleDelete(id) {
    Donpez.deletePurchase(this.props.token, id).then(ok => {
      if (ok) {
        this.handleButton();
      }
    });
  }

  render() {
    const day = this.state.lastUpdate[0];
    const month = this.state.lastUpdate[1];
    const year = this.state.lastUpdate[2];
    return (
      <div>
        <div className="sales">
          <h1>Detalle de ventas</h1>
          <h2>De:</h2>
          <input onChange={this.handleChange} name="start" type="date" />
          <h2>A:</h2>
          <input onChange={this.handleChange} name="end" type="date" />
          <h2>Ultima actualizacion: {this.state.updateTime}</h2>
        </div>
        <div className="flex-container-historial">
          <div className="total-sales">
            <h1>Venta Total: ${this.state.total_sale.total}</h1>
            <h2>Tacos de Pescado: {this.state.total_sale.tacosPescado}</h2>
            <h2>Tacos de Camaron: {this.state.total_sale.tacosCamaron}</h2>
            <h2>Bebidas: {this.state.total_sale.bebidas}</h2>
            <h2>Jugos: {this.state.total_sale.jugos}</h2>
            <h2>Transacciones: {this.state.sales.length}</h2>
            <h2>Compra promedio: ${this.getAvgSale()}</h2>
            <button onClick={this.handleButton} className="nav-button" type="button" name="actualizar">Actualizar</button>
          </div>
          <div className="today-sales">
            {this.state.sales.map(sale => {
              return <SaleDetail key={sale.id} details={sale} delete={this.handleDelete} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
