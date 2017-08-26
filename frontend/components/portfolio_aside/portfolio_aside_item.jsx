import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioAsideItem = (props) => {
  let changeColor = 'green-text';
  if (props.stock.change[0] === '-') {
    changeColor = 'red-text';
  }

  return (
    <tr className="aside-row" >
      <td className="aside-ticker" >
        <Link to={ `/stock/${props.stock.ticker}` } >
          { props.stock.ticker }
        </Link>
      </td>
      <td>{ '$' + props.stock.price }</td>
      <td className={ changeColor + " aside-change" } >{ parseFloat(props.stock.change).toFixed(2) }</td>
      <td className={ changeColor + " aside-change" } >{ parseFloat(props.stock.changeInPercent).toFixed(2) + '%' }</td>
    </tr>
  );
};

export default PortfolioAsideItem;
