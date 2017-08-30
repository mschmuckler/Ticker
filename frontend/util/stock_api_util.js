export const requestQuote = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `http://finance.google.com/finance/info?client=ig&q=${symbol}`,
    dataType: 'jsonp',
  });
};


export const requestIntraday = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=VEMFO9H0C5TAT3V3`
  });
};

export const requestAddHolding = (holdingData) => {
  return $.ajax({
    method: "POST",
    url: `/api/holdings`,
    data: holdingData,
  });
};

export const requestDeleteHolding = (holdingId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/holdings/${holdingId}`,
  });
};

export const requestCompanies = (searchInput) => {
  return $.ajax({
    method: "GET",
    url: `/api/companies`,
    data: { searchInput },
  });
};

export const requestRandomStocks = () => {
  return $.ajax({
    method: "GET",
    url: `/api/nav/randomstocks`,
  });
};

export const requestCompany = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `/api/companies/${symbol}`
  });
};
