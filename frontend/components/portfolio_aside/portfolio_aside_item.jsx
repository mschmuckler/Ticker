import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioAsideItem = (props) => {
  let changeColor = 'green-text';
  if (props.stock.change[0] === '-') {
    changeColor = 'red-text';
  }

  return (
    <tr className="aside-row" >
      <td>
        <Link to={ `/stock/${props.stock.ticker}` } >
          { props.stock.ticker }
        </Link>
      </td>
      <td>{ props.stock.price }</td>
      <td className={ changeColor } >{ parseFloat(props.stock.change).toFixed(2) }</td>
      <td className={ changeColor } >{ parseFloat(props.stock.changeInPercent).toFixed(2) + '%' }</td>
    </tr>
  );
};

export default PortfolioAsideItem;
