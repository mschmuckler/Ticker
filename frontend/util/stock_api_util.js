export const requestQuote = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22${symbol}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`
  });
};

export const requestIntraday = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=VEMFO9H0C5TAT3V3`
  });
};
