import React from 'react';
import StockShowContainer from './stock_show_container';

const StockPage = (props) => {
  return (
    <div id="stock-page" >
      <StockShowContainer ticker={ props.match.params.ticker } />
    </div>
  );
}

export default StockPage;
