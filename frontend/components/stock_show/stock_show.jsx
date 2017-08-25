import React from 'react';

const StockShow = (props) => {
  return (
    <div>
      <h1>Stock show page</h1>
      <h2>{ props.match.params.ticker }</h2>
    </div>
  );
}

export default StockShow;
