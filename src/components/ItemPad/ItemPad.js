import React from 'react';

export class ItemPad extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.name === 'add') {
      this.props.update(this.props.item.index, '+');
    } else if (e.target.name === 'remove') {
      this.props.update(this.props.item.index, '-');
    }
  }

  render() {
    return (
      <div className="item-pad">
        <h2>{this.props.item.name}</h2>
        <input className="cantidad" placeholder="Cantidad" value={this.props.item.quantity}></input>
        <button onClick={this.handleClick} className="remove-taco" type="button" name="remove">-</button>
        <button onClick={this.handleClick} className="add-taco" type="button" name="add">+</button>
      </div>
    );
  }
}
