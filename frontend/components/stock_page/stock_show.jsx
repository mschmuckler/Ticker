import React from 'react';

class StockShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleMoveHolding = this.handleMoveHolding.bind(this);
  }

  componentDidMount() {
    const ticker = this.props.match.params.ticker;
    const stocks = this.props.stocks;

    this.props.fetchCompany(ticker).then(() => {
      if (stocks[ticker] === undefined) {
        this.props.fetchQuote(ticker);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const oldTicker = this.props.match.params.ticker
    const newStocks = nextProps.stocks;
    const newTicker = nextProps.match.params.ticker;

    if (newTicker !== oldTicker) {
      nextProps.fetchCompany(newTicker).then(() => {
        if (newStocks[newTicker] === undefined) {
          nextProps.fetchQuote(newTicker);
        }
      });
    }
  }

  componentDidUpdate() {
    const ticker = this.props.match.params.ticker;
    const stocks = this.props.stocks;

    if (stocks[ticker] && stocks[ticker].intraday) {
      this.renderChart();
    }
  }

  handleMoveHolding(e) {
    e.preventDefault();

    let holdingFxn = this.props.addHolding
    let holdingData = { holding: { ticker: this.props.match.params.ticker } };
    if (e.target.innerText === "Remove from Portfolio") {
      holdingFxn = this.props.deleteHolding;
      Object.values(this.props.holdings).forEach(holding => {
        if (this.props.match.params.ticker === holding.ticker) {
          holdingData = holding.id
        }
      });
    }

    holdingFxn(holdingData);
  }

  renderChart() {
    $('#stock-chart').sparkline(this.props.stocks[this.props.match.params.ticker].intraday, {
      width: 484,
      height: 200,
      spotColor: '',
      minSpotColor: false,
      maxSpotColor: false,
      lineColor: `#FF7200`,
      fillColor: `#FEB880`,
      highlightLineColor: `#FF7200`,
      highlightSpotColor: `black`,
      tooltipChartTitle: this.props.match.params.ticker,
    });
  }

  render() {
    if (this.props.stocks[this.props.match.params.ticker] === undefined ||
        this.props.stocks[this.props.match.params.ticker].name === undefined ||
        this.props.stocks[this.props.match.params.ticker].change === undefined) {
      return <div id="stock-show-loading" >Loading...</div>
    } else {
      const self = this;
      const { ticker } = self.props.match.params;
      const stock = self.props.stocks[ticker];
      const {
        name,
        exchange,
        sector,
        industry,
        price,
        high,
        prevClose,
        low,
        open,
        mktCap,
        pe,
        volume,
        change,
        changeInPercent,
      } = stock;

      let changeColor = "green-change";
      if (change < 0) {
        changeColor = "red-change";
      }

      let formButtonText = "Add to Portfolio";
      let formButtonStyle = "stock-add-btn";
      Object.values(this.props.holdings).forEach(holding => {
        if (this.props.match.params.ticker === holding.ticker) {
          formButtonText = "Remove from Portfolio";
          formButtonStyle = "stock-remove-btn";
        }
      });

      let roundedChange = parseFloat(change).toFixed(2);
      let roundedChangeInPercent = parseFloat(changeInPercent).toFixed(2) + '%';

      return (
        <section id="stock-show-section" >
          <div id="stock-header" >
            <div id="stock-header-info" >
              <div>
                <h1>{ ticker }</h1>
                <h1>{ `$${price}` }</h1>
                <h1 className={ changeColor } >
                  { `${roundedChange} (${roundedChangeInPercent})` }
                </h1>
              </div>
              <div>
                <h2>{ name.toUpperCase() }</h2>
                <h2>{ exchange }</h2>
              </div>
            </div>
            <button
              onClick={ this.handleMoveHolding }
              className={ formButtonStyle } >
                { formButtonText }
            </button>
          </div>
          <div id="chart-and-details" >
            <span id="stock-chart" ></span>

            <div id="stock-details" >
              <div>
                <p>Market Cap:</p><p>{ mktCap }B</p>
              </div>
              <div>
                <p>Prev Close:</p><p>{ prevClose }</p>
              </div>
              <div>
                <p>PE (ttm):</p><p>{ pe }</p>
              </div>
              <div>
                <p>Open:</p><p>{ open }</p>
              </div>
              <div>
                <p>High:</p><p>{ high }</p>
              </div>
              <div>
                <p>Low:</p><p>{ low }</p>
              </div>
              <div>
                <p>Volume:</p><p>{ volume }</p>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default StockShow
