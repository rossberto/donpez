import React from 'react';

export class ItemPad extends React.Component {
  render() {
    return (
      <div className="item-pad">
        <h2>{this.props.item}</h2>
        <input className="cantidad" placeholder="Cantidad" value="2"></input>
        <button className="remove-taco" type="button" name="remove">-</button>
        <button className="add-taco" type="button" name="add">+</button>
      </div>
    );
  }
}
