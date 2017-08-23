import React from 'react';
import PortfolioItem from './portfolio_item';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.fetchPortfolioQuotes = this.fetchPortfolioQuotes.bind(this);
  }

  fetchPortfolioQuotes() {
    let tempHolding;
    this.props.holdings.forEach(holding => {
      tempHolding = Object.values(holding)[0];
      this.props.fetchQuote(tempHolding.ticker);
    });
  }

  componentDidMount() {
    this.fetchPortfolioQuotes();
  }

  render() {
    let tempHolding;

    const portfolioStocks = this.props.holdings.map(holding => {
      tempHolding = Object.values(holding)[0];

      if (this.props.stocks[tempHolding.ticker] === undefined) {
        return;
      } else {
        return <PortfolioItem
          key={ tempHolding.id }
          holdingId={ tempHolding.id }
          deleteHolding={ this.props.deleteHolding }
          stock={ this.props.stocks[tempHolding.ticker] }
        />
      }
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
            { portfolioStocks }
          </tbody>
        </table>
      </main>
    );
  }
}

export default Portfolio;
