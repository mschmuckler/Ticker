import React from 'react';
import { isEmpty } from 'lodash';
import PortfolioItem from './portfolio_item';
import PortfolioForm from './portfolio_form';

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

  createPortfolioRows() {
    return Object.values(this.props.holdings).map(holding => {
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
  }

  componentDidMount() {
    this.fetchPortfolioQuotes();
  }

  render() {
    if (isEmpty(this.props.holdings)) {
      return <h1>Let's add some stocks</h1>
    } else {
      const portfolioStocks = this.createPortfolioRows();
      return (
        <main>
          <h1>Portfolio</h1>
          <table>
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Last Price</th>
                <th>Change</th>
                <th>Volume</th>
                <th>Prev Close</th>
                <th>Open</th>
              </tr>
            </thead>
            <tbody>
              { portfolioStocks }
            </tbody>
          </table>

          <PortfolioForm
            addHolding={ this.props.addHolding }
            fetchQuote={ this.props.fetchQuote }
          />
        </main>
      );
    }
  }
}

export default Portfolio;
