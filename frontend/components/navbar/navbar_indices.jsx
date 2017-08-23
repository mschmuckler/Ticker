import React from 'react';

class NavbarIndices extends React.Component {
  constructor(props) {
    super(props);

    this.renderSparklines = this.renderSparklines.bind(this);
  }

  componentDidMount() {
    this.props.fetchIntraday('NDAQ')
      .then(() => this.renderSparklines())
    this.props.fetchIntraday('DOW')
      .then(() => this.renderSparklines())
    this.props.fetchIntraday('SPY')
      .then(() => this.renderSparklines())
  }

  renderSparklines() {
    $(`#sparkline-amzn`).sparkline(this.props.stocks["NDAQ"].intraday, {
      width: 70,
      height: 25,
      spotColor: '',
      minSpotColor: '',
      maxSpotColor: '',
      lineColor: `green`,
      fillColor: `lightgreen`,
      tooltipChartTitle: 'NDAQ',
    });

    $(`#sparkline-msft`).sparkline(this.props.stocks["DOW"].intraday, {
      width: 70,
      height: 25,
      spotColor: '',
      minSpotColor: '',
      maxSpotColor: '',
      lineColor: `green`,
      fillColor: `lightgreen`,
      tooltipChartTitle: 'DOW',
    });

    $(`#sparkline-aapl`).sparkline(this.props.stocks["SPY"].intraday, {
      width: 70,
      height: 25,
      spotColor: '',
      minSpotColor: '',
      maxSpotColor: '',
      lineColor: `green`,
      fillColor: `lightgreen`,
      tooltipChartTitle: 'SPY',
    });
  }

  render() {

    return (
      <div id="navbar-indices" >
        <div className="navbar-spark" >
          <span>NDAQ</span>
          <span id="sparkline-amzn" ></span>
        </div>
        <div className="navbar-spark" >
          <span>DOW</span>
          <span id="sparkline-msft" ></span>
        </div>
        <div className="navbar-spark" >
          <span>SPY</span>
          <span id="sparkline-aapl" ></span>
        </div>
      </div>
    );
  }
};

export default NavbarIndices;
