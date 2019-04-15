import React, { Component } from 'react';
import logo from './donpez.png';
import './App.css';

class App extends Component {
  render() {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    if (minutos<10) {
      minutos = '0' + minutos;
    }

    return (
      <div className="App">
      <div class="flex-container">
        <div class="main-pad">
          <div class="item-pad">
            <h2>Pescado</h2>
            <input class="cantidad" placeholder="Cantidad" value="2"></input>
            <button class="remove-taco" type="button" name="remove">-</button>
            <button class="add-taco" type="button" name="add">+</button>
          </div>
          <div class="item-pad">
            <h2>Camaron</h2>
            <input class="cantidad" placeholder="Cantidad" value="2"></input>
            <button class="remove-taco" type="button" name="remove">-</button>
            <button class="add-taco" type="button" name="add">+</button>
          </div>
          <div class="item-pad">
            <h2>Refrescos</h2>
            <input class="cantidad" placeholder="Cantidad" value="2"></input>
            <button class="remove-taco" type="button" name="remove">-</button>
            <button class="add-taco" type="button" name="add">+</button>
          </div>
        </div>
        <div class="main-pad">
          <div class="total">
            <h2>TOTAL A PAGAR</h2>
            <h1>$120</h1>
            <h2>Entrega</h2>
            <input class="entrega" placeholder="$0"></input>
            <h2>Cambio</h2>
            <h1>$80</h1>
            <button class="total-button">Borrar</button>
            <button class="total-button">Cobrar</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
