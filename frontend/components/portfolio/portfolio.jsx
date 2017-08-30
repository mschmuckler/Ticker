import React from 'react';
import { orderBy, isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
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
    if (this.props.holdings === undefined) {
      return [];
    } else {
      let sortedHoldings = orderBy(Object.values(this.props.holdings), ['ticker'], ['asc']);
      sortedHoldings = sortedHoldings.map(holding => {
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
      return sortedHoldings.filter(row => {
        return row !== undefined;
      });
    }
  }

  componentDidMount() {
    this.fetchPortfolioQuotes();
    this.props.clearError("addStock");
  }

  componentWillUnmount() {
    this.props.clearCompanies();
  }

  render() {
    const portfolioStocks = this.createPortfolioRows();
    let firstTimeMessage = <div></div>;
    if (isEmpty(portfolioStocks)) {
      firstTimeMessage = <div className="first-time-message" >
        <p>Add something to your portfolio to get started</p>
      </div>
    }

    return (
      <main id="portfolio" >
        <table id="portfolio-table" >
          <thead>
            <tr>
              <th className="symbol-header cell" >SYMBOL</th>
              <th className="price-header cell" >LAST PRICE</th>
              <th className="change-header cell" >CHG</th>
              <th className="changepercent-header cell" >% CHG</th>
              <th className="open-header cell" >OPEN</th>
              <th className="volume-header cell" >VOLUME</th>
              <th className="prevclose-header cell" >PREV CLOSE</th>
              <th className="delete-header cell" ></th>
            </tr>
          </thead>
          <tbody>
            { portfolioStocks }
          </tbody>
        </table>

        { firstTimeMessage }

        <div id="portfolio-form-and-link" >
          <PortfolioForm
            companies={ this.props.companies }
            searchType={ this.props.searchType }
            addHolding={ this.props.addHolding }
            fetchQuote={ this.props.fetchQuote }
            fetchCompanies={ this.props.fetchCompanies }
            clearCompanies={ this.props.clearCompanies }
            errors={ this.props.errors }
          />
          <Link to="/article/new/default" >
            <button id="new-article-link" >Write an Article</button>
          </Link>
        </div>
      </main>
    );
  }
}

export default Portfolio;
