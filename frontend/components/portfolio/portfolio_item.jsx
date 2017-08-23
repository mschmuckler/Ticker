import React from 'react';

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteHolding(this.props.holdingId);
  }

  render() {
    let changeColor = 'red-text';
    if (this.props.stock.change[0] === '+') {
      changeColor = 'green-text';
    }

    return (

      <tr>
        <td>{ this.props.stock.ticker }</td>
        <td>{ this.props.stock.name }</td>
        <td>{ this.props.stock.price }</td>
        <td className={ changeColor } >{ this.props.stock.change }</td>
        <td className={ changeColor } >{ this.props.stock.changeInPercent }</td>
        <td>{ this.props.stock.volume }</td>
        <td>{ this.props.stock.prevClose }</td>
        <td>{ this.props.stock.open }</td>
        <td><button onClick={ this.handleDelete } >Remove</button></td>
      </tr>
    );
  }
};

export default PortfolioItem;
