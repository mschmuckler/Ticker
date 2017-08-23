import React from 'react';
import PortfolioItem from './portfolio_item';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.fetchPortfolioQuotes = this.fetchPortfolioQuotes.bind(this);
  }

  fetchPortfolioQuotes() {
    Object.values(this.props.holdings).forEach(holding => {
      this.props.fetchQuote(holding.ticker);
    });
  }

  componentDidMount() {
    this.fetchPortfolioQuotes();
  }

  render() {
    const portfolioStocks = Object.values(this.props.holdings).map(holding => {
      if (this.props.stocks[holding.ticker] === undefined) {
        return;
      } else {
        return <PortfolioItem
          key={ holding.id }
          holdingId={ holding.id }
          deleteHolding={ this.props.deleteHolding }
          stock={ this.props.stocks[holding.ticker] }
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
