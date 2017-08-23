import * as APIUtil from '../util/stock_api_util';

export const RECEIVE_INTRADAY = 'RECEIVE_INTRADAY';
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';

export const fetchIntraday = (symbol) => dispatch => {
  return APIUtil.requestIntraday(symbol).then(
    (stockData) => dispatch(receiveIntraday(stockData))
  );
};

export const fetchQuote = (symbol) => dispatch => {
  return APIUtil.requestQuote(symbol).then(
    (stockData) => dispatch(receiveQuote(stockData))
  );
};

export const receiveIntraday = (stock) => {
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

export const receiveQuote = (stock) => {
  const ticker = stock.query.results.quote.Symbol;
  const name = stock.query.results.quote.Name;
  const price = stock.query.results.quote.LastTradePriceOnly;
  const change = stock.query.results.quote.Change;
  const changeInPercent = stock.query.results.quote.ChangeinPercent;
  const high = stock.query.results.quote.DaysHigh;
  const prevClose = stock.query.results.quote.PreviousClose;
  const low = stock.query.results.quote.DaysLow;
  const open = stock.query.results.quote.Open;
  const mktCap = stock.query.results.quote.MarketCapitalization;
  const pe = stock.query.results.quote.PERatio;
  const volume = stock.query.results.quote.Volume;

  return {
    type: RECEIVE_QUOTE,
    stock: { [ticker]:
      {
        name,
        price,
        change,
        changeInPercent,
        high,
        prevClose,
        low,
        open,
        mktCap,
        pe,
        volume,
      },
    },
  };
};
