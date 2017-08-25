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
    $(`#sparkline-NDAQ`).sparkline(this.props.stocks["NDAQ"].intraday, {
      width: 130,
      height: 25,
      spotColor: '',
      minSpotColor: '',
      maxSpotColor: '',
      lineColor: `green`,
      fillColor: `lightgreen`,
      tooltipChartTitle: 'NDAQ',
    });

    $(`#sparkline-DOW`).sparkline(this.props.stocks["DOW"].intraday, {
      width: 130,
      height: 25,
      spotColor: '',
      minSpotColor: '',
      maxSpotColor: '',
      lineColor: `green`,
      fillColor: `lightgreen`,
      tooltipChartTitle: 'DOW',
    });

    $(`#sparkline-SPY`).sparkline(this.props.stocks["SPY"].intraday, {
      width: 130,
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
