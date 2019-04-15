import React from 'react';

export class TotalBox extends React.Component {
  render() {
    return (
      <div className="total">
        <h2>TOTAL A PAGAR</h2>
        <h1>$120</h1>
        <h2>Entrega</h2>
        <input className="entrega" placeholder="$0"></input>
        <h2>Cambio</h2>
        <h1>$80</h1>
        <button className="total-button">Borrar</button>
        <button className="total-button">Cobrar</button>
      </div>
    );
  }
}
