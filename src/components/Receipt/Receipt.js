import React from 'react';
import logo from './donpez.png';

export class Receipt extends React.Component {
  constructor(props) {
    super(props);
  }

  obtainZeroNumber(number) {
    if (number < 10) {
      return '0' + number;
    } else {
      return number;
    }
  }

  render() {
    const sale = this.props.sale;
    const d = new Date(sale.date);

    const seconds = this.obtainZeroNumber(d.getSeconds());
    const minutes = this.obtainZeroNumber(d.getMinutes());
    const hours = this.obtainZeroNumber(d.getHours());

    const payment = this.props.payment;
    const totalPescado = sale.tacos_pescado * this.props.prices.pescado;
    const totalCamaron = sale.tacos_camaron * this.props.prices.camaron;
    const totalBebidas = sale.bebidas * this.props.prices.bebidas;
    const totalJugos = sale.jugos * this.props.prices.jugos;

    return (
      <div id="receipt">
        <div className="receipt-header">
          <img className="receipt-img" src={logo} alt="donpez-logo" />
          <div>
            <p>Gracias por tu compra</p>
            <p>Cajero: {this.props.cashier}</p>
            <p>{d.getDate()}/{d.getMonth()}/{d.getFullYear()} - {hours}:{minutes}:{seconds}</p>
            <p>Número de Recibo: {sale.id}</p>
          </div>
        </div>
        <table className="receipt-table">
          <thead>
            <tr>
              <th className="receipt-item">Artículo</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Costo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="receipt-item">T. pescado:</td>
              <td className="receipt-quantity">{sale.tacos_pescado}</td>
              <td>${this.props.prices.pescado}</td>
              <td>${totalPescado}</td>
            </tr>
            <tr>
              <td className="receipt-item">T. camarón:</td>
              <td className="receipt-quantity">{sale.tacos_camaron}</td>
              <td>${this.props.prices.camaron}</td>
              <td>${totalCamaron}</td>
            </tr>
            <tr>
              <td className="receipt-item">Bebidas:</td>
              <td className="receipt-quantity">{sale.bebidas}</td>
              <td>${this.props.prices.bebidas}</td>
              <td>${totalBebidas}</td>
            </tr>
            <tr>
              <td className="receipt-item">Jugos:</td>
              <td className="receipt-quantity">{sale.jugos}</td>
              <td>${this.props.prices.jugos}</td>
              <td>${totalJugos}</td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td className="receipt-total">Total:</td>
              <td className="receipt-total">${sale.total}</td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td className="receipt-total">Entrega:</td>
              <td className="receipt-total">${payment}</td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td className="receipt-total">Cambio:</td>
              <td className="receipt-total">${payment - sale.total}</td>
            </tr>
          </tbody>
        </table>
        <p className="receipt-factura"><span className="bold-span">Facturación:</span> Envía número de recibo y datos fiscales a <span className="bold-span">facturas@donpez.com.mx</span></p>
        <p className="receipt-factura">¿Cómo te atendimos hoy? Envía tus comentarios: <span className="bold-span">buzon@donpez.com.mx</span></p>
      </div>
    );
  }
}
