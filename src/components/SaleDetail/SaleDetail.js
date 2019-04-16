import React from 'react';

export class SaleDetail extends React.Component {
  render() {
    return (
      <div className="sale-detail">
        <h3>ID: 1 <a href="#">-</a></h3>
        <h3>Hora: 10:30 AM</h3>
        <h3>Cajero: Juan</h3>
        <h3>Tacos de pescado: 2</h3>
        <h3>Tacos de camaron: 1</h3>
        <h3>Bebidas: 2</h3>
        <h3>Total pagado: $120</h3>
      </div>
    );
  }
}
