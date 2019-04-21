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
        bebidas: 0
      },
      lastUpdate: [16, 3, 19],
      updateTime: '10:30 AM'
    };

    this.handleButton = this.handleButton.bind(this);
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

    const total = sales.reduce( (acc, sale) => {
      return acc + sale.total;
    }, 0);

    const totals = {
      tacosPescado: totalPescado,
      tacosCamaron: totalCamaron,
      bebidas: totalBebidas,
      total: total
    }
    return totals;
  }

  handleButton(e) {
    // se piden datos nuevos al backend
    // then se calculan totales del display
    Donpez.sales().then(sales => {
      const totalSale = this.getTotals(sales);
      const date = new Date();
      this.setState({
        sales: sales,
        total_sale: totalSale,
        lastUpdate: [date.getDate(), date.getMonth(), date.getFullYear()],
        updateTime: `${date.getHours()}:${date.getMinutes()}`
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

  render() {
    const day = this.state.lastUpdate[0];
    const month = this.state.lastUpdate[1];
    const year = this.state.lastUpdate[2];
    return (
      <div>
        <div className="sales">
          <h1>Detalle de ventas</h1>
          <h1>{day} / {month + 1} / {year}</h1>
          <h2>Ultima actualizacion: {this.state.updateTime}</h2>
        </div>
        <div className="flex-container-historial">
          <div className="total-sales">
            <h1>Venta Total: ${this.state.total_sale.total}</h1>
            <h2>Tacos de Pescado: {this.state.total_sale.tacosPescado}</h2>
            <h2>Tacos de Camaron: {this.state.total_sale.tacosCamaron}</h2>
            <h2>Bebidas: {this.state.total_sale.bebidas}</h2>
            <h2>Transacciones: {this.state.sales.length}</h2>
            <h2>Compra promedio: ${this.getAvgSale()}</h2>
            <button onClick={this.handleButton} className="nav-button" type="button" name="actualizar">Actualizar</button>
          </div>
          <div className="today-sales">
            {this.state.sales.map(sale => {
              return <SaleDetail key={sale.id} details={sale} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
