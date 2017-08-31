import React from 'react';

class NavbarIndices extends React.Component {
  constructor(props) {
    super(props);

    this.renderSparkline = this.renderSparkline.bind(this);
  }

  componentDidMount() {
    this.props.fetchIntraday('NDAQ').then(
      () => this.renderSparkline('NDAQ'),
      () => this.renderSparkline('NDAQ'),
    );
    this.props.fetchIntraday('DOW').then(
      () => this.renderSparkline('DOW'),
      () => this.renderSparkline('DOW'),
    );
    this.props.fetchIntraday('SPY').then(
      () => this.renderSparkline('SPY'),
      () => this.renderSparkline('SPY'),
    );
  }

  // componetWillReceiveProps(nextProps) {
  //   ['NDAQ', 'DOW', 'SPY'].forEach(symbol => {
  //     if (nextProps.stocks[symbol].intraday !== this.props.stocks[symbol].intraday) {
  //       this.renderSparkline(symbol);
  //     }
  //   });
  // }

  renderSparkline(symbol) {
    $(`#sparkline-${symbol}`).sparkline(this.props.stocks[symbol].intraday, {
      width: 130,
      height: 35,
      spotColor: '',
      minSpotColor: `#FF7200`,
      maxSpotColor: `#FF7200`,
      lineColor: `#6f6f6f`,
      fillColor: false,
      highlightLineColor: `#FF7200`,
      highlightSpotColor: `black`,
      tooltipChartTitle: symbol,
    });
  }

  render() {
    return (
      <div id="navbar-indices" >
        <div className="navbar-spark" >
          <p>NDAQ</p>
          <span id="sparkline-NDAQ" ></span>
        </div>
        <div className="navbar-spark" >
          <p>DOW</p>
          <span id="sparkline-DOW" ></span>
        </div>
        <div className="navbar-spark" >
          <p>SPY</p>
          <span id="sparkline-SPY" ></span>
        </div>
      </div>
    );
  }
};

export default NavbarIndices;
