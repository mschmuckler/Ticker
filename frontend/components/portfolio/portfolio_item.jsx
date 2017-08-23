import React from 'react';

const PortfolioItem = (props) => {
  return (
    <tr>
      <td>{ props.stock.ticker }</td>
      <td>{ props.stock.name }</td>
      <td>{ props.stock.price }</td>
      <td>{ props.stock.change }</td>
      <td>{ props.stock.changeInPercent }</td>
      <td>{ props.stock.volume }</td>
      <td>{ props.stock.prevClose }</td>
      <td>{ props.stock.open }</td>
    </tr>
  );
};

export default PortfolioItem;
