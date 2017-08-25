import React from 'react'

class StockShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleMoveHolding = this.handleMoveHolding.bind(this);
  }

  componentDidMount() {
    this.props.fetchCompany(this.props.match.params.ticker).then(() => {
      this.renderChart();
    });
    this.props.fetchQuote(this.props.match.params.ticker);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.ticker !== this.props.match.params.ticker) {
      newProps.fetchCompany(newProps.match.params.ticker).then(() => {
        this.renderChart();
      });
      newProps.fetchQuote(newProps.match.params.ticker);
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
    let fakeChartData = [];
    let startPoint = 100;
    for (var i = 0; i < 1500; i++) {
      fakeChartData.push(startPoint);
      startPoint += (Math.round(Math.random()) * 2 - 1);
    }

    $(`#stock-chart`).sparkline(fakeChartData, {
      width: 553,
      height: 200,
      spotColor: '',
      minSpotColor: false,
      maxSpotColor: false,
      lineColor: `#FF7200`,
      fillColor: `#FEB880`,
      highlightLineColor: `#FF7200`,
      highlightSpotColor: `black`,
      tooltipChartTitle: 'NDAQ',
    });
  }

  render() {
    if (this.props.stocks[this.props.match.params.ticker] === undefined ||
        this.props.stocks[this.props.match.params.ticker].name === undefined) {
      return <div>Loading...</div>
    } else {
      const self = this;
      const {
        ticker,
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
      } = {
        ticker: self.props.match.params.ticker,
        name: self.props.stocks[self.props.match.params.ticker].name,
        exchange: self.props.stocks[self.props.match.params.ticker].exchange,
        sector: self.props.stocks[self.props.match.params.ticker].sector,
        industry: self.props.stocks[self.props.match.params.ticker].industry,
        price: self.props.stocks[self.props.match.params.ticker].price,
        high: self.props.stocks[self.props.match.params.ticker].high,
        prevClose: self.props.stocks[self.props.match.params.ticker].prevClose,
        low: self.props.stocks[self.props.match.params.ticker].low,
        open: self.props.stocks[self.props.match.params.ticker].open,
        mktCap: self.props.stocks[self.props.match.params.ticker].mktCap,
        pe: self.props.stocks[self.props.match.params.ticker].pe,
        volume: self.props.stocks[self.props.match.params.ticker].volume,
        change: self.props.stocks[self.props.match.params.ticker].change,
        changeInPercent: self.props.stocks[self.props.match.params.ticker].changeInPercent,
      }

      let changeColor = "green-change";
      if (change < 0) {
        changeColor = "red-change";
      }

      let formButtonText = "Add to Portfolio";
      Object.values(this.props.holdings).forEach(holding => {
        if (this.props.match.params.ticker === holding.ticker) {
          formButtonText = "Remove from Portfolio"
        }
      });

      return (
        <section id="stock-show-section" >
          <div id="stock-header" >
            <div id="stock-header-info" >
              <div>
                <h1>{ ticker }</h1>
                <h1>{ `$${price}` }</h1>
                <h1 className={ changeColor } >
                  { `${change} (${changeInPercent})` }
                </h1>
              </div>
              <div>
                <h2>{ name.toUpperCase() }</h2>
                <h2>{ exchange }</h2>
              </div>
            </div>
            <button onClick={ this.handleMoveHolding } >
              { formButtonText }
            </button>
          </div>
          <div id="chart-and-details" >
            <span id="stock-chart" ></span>
            <div id="stock-details" >
              <div>
                <p>Market Cap:</p><p>{ mktCap }</p>
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
