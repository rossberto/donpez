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
        Bebidas: 0
      },
      lastUpdate: ['16', 'abril', '19'],
      updateTime: '10:30 AM'
    }
  }

  handleButton(e) {
    // se piden datos nuevos al backend
    Donpez.sales();
    // se calculan totales del display
    // se actualiza hora de ultima actualizacion
  }

  render() {
    const day = this.state.lastUpdate[0];
    const month = this.state.lastUpdate[1];
    const year = this.state.lastUpdate[2];
    return (
      <div>
        <div className="sales">
          <h1>Detalle de ventas</h1>
          <h1>{day} de {month} de {year}</h1>
          <h2>Ultima actualizacion: {this.state.updateTime}</h2>
        </div>
        <div className="flex-container-historial">
          <div className="total-sales">
            <h1>Venta Total: $2534</h1>
            <h2>Tacos de Pescado: 123</h2>
            <h2>Tacos de Camaron: 123</h2>
            <h2>Bebidas: 123</h2>
            <button onClick={this.handleButton} className="nav-button" type="button" name="actualizar">Actualizar</button>
          </div>
          <div className="today-sales">
            <SaleDetail />
            <SaleDetail />
            <SaleDetail />
            <SaleDetail />
            <SaleDetail />
            <SaleDetail />
          </div>
        </div>
      </div>
    );
  }
}
