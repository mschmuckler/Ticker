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
    let changeColor = 'green-text';
    if (this.props.stock.change[0] === '-') {
      changeColor = 'red-text';
    }

    return (

      <tr>
        <td className="symbol-cell" >{ this.props.stock.ticker }</td>
        <td className="price-cell" >{ this.props.stock.price }</td>
        <td className={ changeColor + " change-cell" } >{ this.props.stock.change }</td>
        <td className={ changeColor + " changepercent-cell" } >{ this.props.stock.changeInPercent }</td>
        <td className="open-cell" >{ this.props.stock.open }</td>
        <td className="volume-cell" >{ this.props.stock.volume }</td>
        <td className="prevclose-cell" >{ this.props.stock.prevClose }</td>
        <td><button onClick={ this.handleDelete } >Remove</button></td>
      </tr>
    );
  }
};

export default PortfolioItem;
