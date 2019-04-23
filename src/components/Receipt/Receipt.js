import React from 'react';
import logo from './donpez.png';

export class Receipt extends React.Component {
  render() {
    const purchaseInfo = this.props.purchase_info;
    const totalPescado = purchaseInfo.items[0].quantity * purchaseInfo.items[0].price;
    const totalCamaron = purchaseInfo.items[1].quantity * purchaseInfo.items[1].price;
    const totalBebidas = purchaseInfo.items[2].quantity * purchaseInfo.items[2].price;
    const total = totalPescado + totalCamaron + totalBebidas;

    const date = new Date();

    return (
      <div id="receipt">
        <div className="receipt-header">
          <img className="receipt-img" src={logo} alt="donpez-logo" />
          <div>
            <p>Gracias por tu compra</p>
            <p>Cajero: {this.props.cashier}</p>
            <p>{`${date}`.slice(0, -33)}</p>
            <p>Número de Recibo: {purchaseInfo.lastReceipt}</p>
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
              <td className="receipt-quantity">{purchaseInfo.items[0].quantity}</td>
              <td>${purchaseInfo.items[0].price}</td>
              <td>${totalPescado}</td>
            </tr>
            <tr>
              <td className="receipt-item">T. camarón:</td>
              <td className="receipt-quantity">{purchaseInfo.items[1].quantity}</td>
              <td>${purchaseInfo.items[1].price}</td>
              <td>${totalCamaron}</td>
            </tr>
            <tr>
              <td className="receipt-item">Bebidas:</td>
              <td className="receipt-quantity">{purchaseInfo.items[2].quantity}</td>
              <td>${purchaseInfo.items[2].price}</td>
              <td>${totalBebidas}</td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td className="receipt-total">Total:</td>
              <td className="receipt-total">${total}</td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td className="receipt-total">Entrega:</td>
              <td className="receipt-total">${purchaseInfo.payment}</td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td className="receipt-total">Cambio:</td>
              <td className="receipt-total">${purchaseInfo.payment - total}</td>
            </tr>
          </tbody>
        </table>
        <p className="receipt-factura"><span className="bold-span">Facturación:</span> Envía número de recibo y datos fiscales a <span className="bold-span">facturas@donpez.com.mx</span></p>
        <p className="receipt-factura">¿Cómo te atendimos hoy? Envía tus comentarios: <span className="bold-span">buzon@donpez.com.mx</span></p>
      </div>
    );
  }
}
