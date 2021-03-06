import * as APIUtil from '../util/stock_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_INTRADAY = 'RECEIVE_INTRADAY';
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';
export const RECEIVE_FAKE_QUOTE = 'RECEIVE_FAKE_QUOTE';
export const DELETE_HOLDING = 'DELETE_HOLDING';
export const ADD_HOLDING = 'ADD_HOLDING';
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';

const fakeIntraday = (numPoints = 1500) => {
  let fakeChartData = [];
  let startPoint = 100;
  for (let i = 0; i < numPoints; i++) {
    fakeChartData.push(startPoint);
    startPoint += (Math.round(Math.random()) * 2 - 1) * Math.random();
  }
  return fakeChartData;
}

export const fetchIntraday = (symbol) => dispatch => {
  return APIUtil.requestIntraday(symbol).then(
    (stockData) => {
      (Object.keys(stockData).length === 0 || Object.keys(stockData)[0] === "Error Message") ?
        dispatch(receiveFakeIntraday(symbol)) :
        dispatch(receiveIntraday(stockData))
    },
    () => dispatch(receiveFakeIntraday(symbol)),
  );
};

export const fetchQuote = (symbol) => dispatch => {
  return APIUtil.requestQuote(symbol).then(
    (stockData) => {
      (stockData.query.result) ?
      dispatch(receiveQuote(stockData)) :
      dispatch(receiveFakeQuote(symbol))
    },
    (error) => dispatch(receiveFakeQuote(symbol)),
  );
};


export const addHolding = (holding) => dispatch => {
  return APIUtil.requestAddHolding(holding).then(
    (holding) => dispatch(receiveHoldingAddition(holding)),
    (errors) => dispatch(receiveErrors(errors, "addStock"))
  );
};

export const deleteHolding = (holdingId) => dispatch => {
  return APIUtil.requestDeleteHolding(holdingId).then(
    (blankHolding) => dispatch(receiveHoldingDeletion(blankHolding))
  );
};

export const fetchCompany = (symbol) => dispatch => {
  return APIUtil.requestCompany(symbol).then(
    (company) => dispatch(receiveCompany(company))
  );
}

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

export const receiveFakeIntraday = (symbol) => {
  const ticker = symbol;
  const intraday = fakeIntraday(100);
  const open = 100;

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
  const high = stock.query.results.quote.DaysHigh;
  const prevClose = stock.query.results.quote.PreviousClose;
  const low = stock.query.results.quote.DaysLow;
  const open = stock.query.results.quote.Open;
  const mktCap = stock.query.results.quote.MarketCapitalization;
  const pe = stock.query.results.quote.PERatio;
  const volume = stock.query.results.quote.Volume;
  const change = (price - open);
  const changeInPercent = (change / price) * 100;
  const intraday = fakeIntraday();

  return {
    type: RECEIVE_QUOTE,
    stock: { [ticker]:
      {
        ticker,
        price,
        change: parseFloat(change).toFixed(2),
        changeInPercent: parseFloat(changeInPercent).toFixed(2) + '%',
        high,
        prevClose,
        low,
        open,
        mktCap,
        pe,
        volume,
        intraday,
      },
    },
  };
};

export const receiveFakeQuote = (symbol) => {
  const price = (Math.random() * 500) + 10;
  const high = (price + (Math.random() * 10));
  const prevClose = (price + (Math.random() * 10));
  const low = (price - (Math.random() * 10));
  const open = (price + ((Math.round(Math.random()) * 2 - 1) * (Math.random() * 5)));
  const change = (price - open);
  const changeInPercent = (change / price) * 100;
  const mktCap = Math.floor((Math.random() * 150));
  const pe = (Math.random() * 17);
  const volume = (Math.random() * 1000000);
  const intraday = fakeIntraday();

  const fakeData = {
    [symbol]: {
      ticker: symbol,
      price: price.toFixed(2),
      change: change.toFixed(2),
      changeInPercent: changeInPercent.toFixed(2) + '%',
      high: high.toFixed(2),
      prevClose: prevClose.toFixed(2),
      low: low.toFixed(2),
      open: open.toFixed(2),
      mktCap: mktCap + 'B',
      pe: pe.toFixed(2),
      volume: volume.toFixed(0),
      intraday,
    }
  }
  return {
    type: RECEIVE_FAKE_QUOTE,
    stock: fakeData,
  };
}

export const receiveCompany = (company) => {
  return {
    type: RECEIVE_COMPANY,
    company,
  };
}
