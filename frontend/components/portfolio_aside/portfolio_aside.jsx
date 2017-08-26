import React from 'react';
import PortfolioAsideItem from './portfolio_aside_item';
import AsideForm from './aside_form';
import { orderBy } from 'lodash';

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
      const sortedHoldings = orderBy(Object.values(this.props.holdings), ['ticker'], ['asc']);
      return sortedHoldings.map(holding => {
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
        <AsideForm
          companies={ this.props.companies }
          addHolding={ this.props.addHolding }
          fetchQuote={ this.props.fetchQuote }
          fetchCompanies={ this.props.fetchCompanies }
          clearCompanies={ this.props.clearCompanies }
        />
        <table id="aside-table" >
          <tbody>
            { portfolioStocks }
          </tbody>
        </table>
      </aside>
    );
  }
}

export default PortfolioAside;
