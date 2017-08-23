import React from 'react';

class NavbarIndices extends React.Component {
  constructor(props) {
    super(props);

    this.renderSparklines = this.renderSparklines.bind(this);
  }

  componentDidMount() {
    this.props.fetchIntraday('AMZN');
    this.props.fetchIntraday('MSFT');
    this.props.fetchIntraday('AAPL');
  }

  componentDidUpdate() {
    this.renderSparklines();
  }

  renderSparklines() {
    $(`#sparkline-amzn`).sparkline(this.props.stocks["AMZN"].intraday, {
      width: 80,
      spotColor: '',
      minSpotColor: '',
      maxSpotColor: '',
      lineColor: `green`,
      fillColor: `lightgreen`,
      tooltipChartTitle: 'AMZN',
    });

    $(`#sparkline-msft`).sparkline(this.props.stocks["MSFT"].intraday, {
      width: 80,
      spotColor: '',
      minSpotColor: '',
      maxSpotColor: '',
      lineColor: `green`,
      fillColor: `lightgreen`,
      tooltipChartTitle: 'MSFT',
    });

    $(`#sparkline-aapl`).sparkline(this.props.stocks["AAPL"].intraday, {
      width: 80,
      spotColor: '',
      minSpotColor: '',
      maxSpotColor: '',
      lineColor: `green`,
      fillColor: `lightgreen`,
      tooltipChartTitle: 'AAPL',
    });
  }

  render() {

    return (
      <div id="navbar-indices" >
        <span id="sparkline-amzn" ></span>
        <span id="sparkline-msft" ></span>
        <span id="sparkline-aapl" ></span>
      </div>
    );
  }
};

export default NavbarIndices;
