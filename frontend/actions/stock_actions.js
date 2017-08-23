import * as APIUtil from '../util/stock_api_util';

export const RECEIVE_INTRADAY = 'RECEIVE_INTRADAY';

export const fetchIntraday = (symbol) => dispatch => {
  return APIUtil.requestIntraday(symbol).then(
    (stockData) => dispatch(receieveIntraday(stockData))
  );
};

export const receieveIntraday = (stock) => {
  const ticker = stock["Meta Data"]["2. Symbol"];
  const intradayValues = Object.values(stock["Time Series (1min)"]);

  const intraday = intradayValues.map(timePoint => {
    return timePoint["4. close"];
  });
  const open = intradayValues[0]["1. open"];

  return {
    type: RECEIVE_INTRADAY,
    stock: { [ticker]:
      {
        intraday: intraday,
        open: open,
      },
    },
  };
};

// receiveQuote
// ${resp.query.results.quote.LastTradePriceOnly}
