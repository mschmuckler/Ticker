import React from 'react';

class NavbarIndices extends React.Component {
  constructor(props) {
    super(props);

    this.renderNdaqSparkline = this.renderNdaqSparkline.bind(this);
    this.renderDowSparkline = this.renderDowSparkline.bind(this);
    this.renderSpySparkline = this.renderSpySparkline.bind(this);
  }

  componentDidMount() {
    this.props.fetchIntraday('NDAQ')
      .then(() => this.renderNdaqSparkline())
    this.props.fetchIntraday('DOW')
      .then(() => this.renderDowSparkline())
    this.props.fetchIntraday('SPY')
      .then(() => this.renderSpySparkline())
  }

  renderNdaqSparkline() {
    $(`#sparkline-NDAQ`).sparkline(this.props.stocks["NDAQ"].intraday, {
      width: 130,
      height: 35,
      spotColor: '',
      minSpotColor: `#FF7200`,
      maxSpotColor: `#FF7200`,
      lineColor: `#6f6f6f`,
      fillColor: false,
      highlightLineColor: `#FF7200`,
      highlightSpotColor: `black`,
      tooltipChartTitle: 'NDAQ',
    });
  }

  renderDowSparkline() {
    $(`#sparkline-DOW`).sparkline(this.props.stocks["DOW"].intraday, {
      width: 130,
      height: 35,
      spotColor: '',
      minSpotColor: `#FF7200`,
      maxSpotColor: `#FF7200`,
      lineColor: `#6f6f6f`,
      fillColor: false,
      highlightLineColor: `#FF7200`,
      highlightSpotColor: `black`,
      tooltipChartTitle: 'DOW',
    });
  }

  renderSpySparkline() {
    $(`#sparkline-SPY`).sparkline(this.props.stocks["SPY"].intraday, {
      width: 130,
      height: 35,
      spotColor: '',
      minSpotColor: `#FF7200`,
      maxSpotColor: `#FF7200`,
      lineColor: `#6f6f6f`,
      fillColor: false,
      highlightLineColor: `#FF7200`,
      highlightSpotColor: `black`,
      tooltipChartTitle: 'SPY',
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
