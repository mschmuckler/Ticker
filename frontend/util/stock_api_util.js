// export const requestQuote = (ticker) => {
//   return $.ajax({
//     method: "GET"
//   });
// };

export const requestIntraday = (symbol) => {
  return $.ajax({
    method: "GET",
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=VEMFO9H0C5TAT3V3`
  });
};
