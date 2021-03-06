import React from 'react';
import PortfolioAsideItem from './portfolio_aside_item';
import AsideForm from './aside_form';
import { orderBy, isEmpty } from 'lodash';

class PortfolioAside extends React.Component {
  constructor(props) {
    super(props);

    this.fetchPortfolioQuotes = this.fetchPortfolioQuotes.bind(this);
  }

  fetchPortfolioQuotes() {
    Object.values(this.props.holdings).forEach(holding => {
      if (this.props.stocks[holding.ticker] === undefined) {
        this.props.fetchQuote(holding.ticker);
      }
    });
  }

  createPortfolioItems() {
    if (this.props.holdings === undefined) {
      return;
    } else {
      const sortedHoldings = orderBy(Object.values(this.props.holdings), ['ticker'], ['asc']);
      return sortedHoldings.map(holding => {
        if (this.props.stocks[holding.ticker] && this.props.stocks[holding.ticker].change) {
          return <PortfolioAsideItem
            key={ holding.id }
            stock={ this.props.stocks[holding.ticker] }
            />
        } else {
          return;
        }
      });
    }
  }

  componentDidMount() {
    this.fetchPortfolioQuotes();
  }

  componentWillUnmount() {
    this.props.clearCompanies();
  }

  render() {
    const portfolioStocks = this.createPortfolioItems();
    let firstTimeMessage = <div></div>;
    if (isEmpty(portfolioStocks)) {
      firstTimeMessage = <div className="aside-first-time-message" >
        <p>Portfolio is empty</p>
      </div>
    }

    return (
      <aside id="portfolio-aside" >
        <AsideForm
          companies={ this.props.companies }
          searchType={ this.props.searchType }
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
        { firstTimeMessage }
      </aside>
    );
  }
}

export default PortfolioAside;
