import React from 'react';
import PortfolioAsideItem from './portfolio_aside_item';

class PortfolioAside extends React.Component {
  constructor(props) {
    super(props);

    this.fetchPortfolioQuotes = this.fetchPortfolioQuotes.bind(this);
  }

  fetchPortfolioQuotes() {
    Object.values(this.props.holdings).forEach(holding => {
      this.props.fetchQuote(holding.ticker);
    });
  }

  createPortfolioItems() {
    if (this.props.holdings === undefined) {
      return;
    } else {
      return Object.values(this.props.holdings).map(holding => {
        if (this.props.stocks[holding.ticker] === undefined) {
          return;
        } else {
          return <PortfolioAsideItem
            key={ holding.id }
            stock={ this.props.stocks[holding.ticker] }
          />
        }
      });
    }
  }

  componentDidMount() {
    this.fetchPortfolioQuotes();
  }

  render() {
    const portfolioStocks = this.createPortfolioItems();

    return (
      <aside id="portfolio-aside" >
        <table>
          { portfolioStocks }
        </table>
      </aside>
    );
  }
}

export default PortfolioAside;
