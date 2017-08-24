import * as APIUtil from '../util/stock_api_util';

export const RECEIVE_INTRADAY = 'RECEIVE_INTRADAY';
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';
export const RECEIVE_FAKE_QUOTE = 'RECEIVE_FAKE_QUOTE';
export const DELETE_HOLDING = 'DELETE_HOLDING';
export const ADD_HOLDING = 'ADD_HOLDING';

export const fetchIntraday = (symbol) => dispatch => {
  return APIUtil.requestIntraday(symbol).then(
    (stockData) => dispatch(receiveIntraday(stockData))
  );
};

export const fetchQuote = (symbol) => dispatch => {
  return APIUtil.requestQuote(symbol).then(
    (stockData) => dispatch(receiveQuote(stockData)),
    () => dispatch(receiveFakeQuote(symbol)),
  );
};

export const addHolding = (holding) => dispatch => {
  return APIUtil.requestAddHolding(holding).then(
    (holding) => dispatch(receiveHoldingAddition(holding))
  );
};

export const deleteHolding = (holdingId) => dispatch => {
  return APIUtil.requestDeleteHolding(holdingId).then(
    (blankHolding) => dispatch(receiveHoldingDeletion(blankHolding))
  );
};

export const receiveHoldingDeletion = (holdingId) => {
  return {
    type: DELETE_HOLDING,
    holdingId,
  };
};

export const receiveHoldingAddition = (holding) => {
  return {
    type: ADD_HOLDING,
    holding,
  };
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
        ticker,
        intraday,
        open,
      },
    },
  };
};

export const receiveQuote = (stock) => {
  const ticker = stock.query.results.quote.Symbol;
  const name = stock.query.results.quote.Name;
  const price = stock.query.results.quote.LastTradePriceOnly;
  let change = stock.query.results.quote.Change;
  const high = stock.query.results.quote.DaysHigh;
  const prevClose = stock.query.results.quote.PreviousClose;
  const low = stock.query.results.quote.DaysLow;
  const open = stock.query.results.quote.Open;
  const mktCap = stock.query.results.quote.MarketCapitalization;
  const pe = stock.query.results.quote.PERatio;
  const volume = stock.query.results.quote.Volume;

  if (change[0] === '+') {
    change = change.slice(1);
  }

  return {
    type: RECEIVE_QUOTE,
    stock: { [ticker]:
      {
        name,
        ticker,
        price,
        change,
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

export const receiveFakeQuote = (symbol) => {
  const price = (Math.random() * 1000);
  const high = (price + (Math.random() * 10));
  const prevClose = (price + (Math.random() * 10));
  const low = (price - (Math.random() * 10));
  const open = (price + (Math.round(Math.random()) * 2 - 1) * (Math.random() * 10));
  const change = (open - price);
  const mktCap = (Math.random() * 1000000);
  const pe = (Math.random() * 10);
  const volume = (Math.random() * 100000);

  const fakeData = {
    [symbol]: {
      ticker: symbol,
      price: price.toFixed(2),
      change: change.toFixed(2),
      high: high.toFixed(2),
      prevClose: prevClose.toFixed(2),
      low: low.toFixed(2),
      open: open.toFixed(2),
      mktCap: mktCap.toFixed(2),
      pe: pe.toFixed(2),
      volume: volume.toFixed(2),
    }
  }
  return {
    type: RECEIVE_FAKE_QUOTE,
    stock: fakeData,
  };
}
