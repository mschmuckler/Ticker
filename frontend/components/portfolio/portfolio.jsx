import React from 'react';
import PortfolioItem from './portfolio_item';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.fetchPortfolioStocks = this.fetchPortfolioStocks.bind(this);
  }

  fetchPortfolioStocks() {
    let tempHolding;
    this.props.holdings.forEach(holding => {
      tempHolding = Object.values(holding)[0];
      this.props.fetchQuote(tempHolding.ticker);
    });
  }

  componentDidMount() {
    this.fetchPortfolioStocks();
  }

  render() {
    const temp = Object.values(this.props.stocks).map(stock => {
      return <PortfolioItem key={ stock.ticker } stock={ stock } />;
    });

    return (
      <main>
        <h1>Portfolio</h1>
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Name</th>
              <th>Last Price</th>
              <th>Change</th>
              <th>ChangeInPercent</th>
              <th>Volume</th>
              <th>Prev Close</th>
              <th>Open</th>
            </tr>
          </thead>
          <tbody>
            { temp }
          </tbody>
        </table>
      </main>
    );
  }
}

export default Portfolio;
