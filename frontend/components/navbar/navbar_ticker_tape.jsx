import React from 'react';
import { isEmpty } from 'lodash';

class NavbarTickerTape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickers: [
        'TSLA',
        'MSFT',
        'EDIT',
        'DGX',
        'GWPH',
        'SNAP',
        'MO',
        'PM',
        'BABA',
        'NTLA',
        'APRN',
        'FB',
        'REIT',
      ]
    }

    this.fetchPortfolioQuotes = this.fetchPortfolioQuotes.bind(this);
  }

  fetchPortfolioQuotes() {
    this.state.tickers.forEach(ticker => {
      this.props.fetchQuote(ticker);
    });
  }

  componentDidMount() {
    this.fetchPortfolioQuotes();
  }

  render() {
    if (this.props.stocks[this.state.tickers[0]] === undefined) {
      return <div id="ticker-tape" ></div>
    } else {
      const randomTickers = this.state.tickers.map((ticker, idx) => {
        const stock = this.props.stocks[ticker] || {};
        let changeColor = "green";
        let changeArrow = "▲";
        if (stock.change < 0) {
          changeColor = "red";
          changeArrow = "▼";
        }

        return (
          <p key={ idx } className={ `tape-element ${changeColor}` } >
            { `${ticker} ${stock.price} ${changeArrow}` }
          </p>
        );
      });

      return (
        <div id="ticker-tape">
            <marquee behavior="scroll" direction="right" scrollamount="5">
              <div id="inner-tape">
                { randomTickers }
              </div>
            </marquee>
          </div>
      );
    }
  }
}

export default NavbarTickerTape;
