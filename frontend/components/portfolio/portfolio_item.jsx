import React from 'react';
import { Link } from 'react-router-dom';

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
          <td className="symbol-cell cell" >
            <Link to={ `/stock/${this.props.stock.ticker}` } >
              { this.props.stock.ticker }
            </Link>
          </td>
          <td className="price-cell cell" >{ this.props.stock.price }</td>
          <td className={ changeColor + " change-cell cell" } >{ this.props.stock.change }</td>
          <td className={ changeColor + " changepercent-cell cell" } >{ this.props.stock.changeInPercent }</td>
          <td className="open-cell cell" >{ this.props.stock.open }</td>
          <td className="volume-cell cell" >{ this.props.stock.volume }</td>
          <td className="prevclose-cell cell" >{ this.props.stock.prevClose }</td>
          <td className="delete-cell cell"
              onClick={ this.handleDelete }>
            <img
              className="delete-icon"
              src={ window.staticImages.deleteIcon }
            />
          </td>
        </tr>
    );
  }
};

export default PortfolioItem;
