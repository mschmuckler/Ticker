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
    if (this.props.holdings === undefined) {
      return;
    } else {
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
  }

  componentDidMount() {
    this.fetchPortfolioQuotes();
  }

  render() {
    const portfolioStocks = this.createPortfolioRows();
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

        <PortfolioForm
          companies={ this.props.companies }
          addHolding={ this.props.addHolding }
          fetchQuote={ this.props.fetchQuote }
          fetchCompanies={ this.props.fetchCompanies }
          clearCompanies={ this.props.clearCompanies }
          errors={ this.props.errors }
        />
      </main>
    );
  }
}

export default Portfolio;
