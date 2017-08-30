import * as APIUtil from '../util/stock_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_INTRADAY = 'RECEIVE_INTRADAY';
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';
export const RECEIVE_FAKE_QUOTE = 'RECEIVE_FAKE_QUOTE';
export const DELETE_HOLDING = 'DELETE_HOLDING';
export const ADD_HOLDING = 'ADD_HOLDING';
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';

const fakeIntraday = () => {
  let fakeChartData = [];
  let startPoint = 100;
  for (let i = 0; i < 1500; i++) {
    fakeChartData.push(startPoint);
    startPoint += (Math.round(Math.random()) * 2 - 1);
  }
  return fakeChartData;
}

export const fetchIntraday = (symbol) => dispatch => {
  return APIUtil.requestIntraday(symbol).then(
    (stockData) => dispatch(receiveIntraday(stockData)),
    () => dispatch(fetchIntraday(symbol)),
  );
};

export const fetchQuote = (symbol) => dispatch => {
  return APIUtil.requestQuote(symbol).then(
    (stockData) => dispatch(receiveQuote(stockData)),
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

export const receiveQuote = (stock) => {
  const ticker = stock[0].t;
  const price = stock[0].l;
  const prevClose = stock[0].pcls_fix;
  const changeInPercent = stock[0].cp;
  const mktCap = Math.floor((Math.random() * 150));
  const pe = parseFloat(Math.random() * 17).toFixed(2);
  const volume = Math.floor(Math.random() * 100000);
  const intraday = fakeIntraday();
  let change = stock[0].c;
  change = (change[0] === '+') ? change.slice(1) : change;
  const open = (price - change).toFixed(2);
  const high = parseFloat(price + (Math.random() * 5)).toFixed(2);
  const low = parseFloat(open - (Math.random() * 5)).toFixed(2);

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
  const volume = (Math.random() * 100000);
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
