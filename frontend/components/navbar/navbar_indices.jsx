import React from 'react';

class NavbarIndices extends React.Component {
  constructor(props) {
    super(props);

    this.renderSparkline = this.renderSparkline.bind(this);
  }

  componentDidMount() {
    this.props.fetchIntraday('AMZN');
  }

  renderSparkline() {
    $(`#sparkline-amzn`).sparkline([1,4,7,3,8,9,4,2,5], {
      spotColor: '',
      minSpotColor: '',
      maxSpotColor: '',
      lineColor: `green`,
      fillColor: `lightgreen`,
    });
  }

  render() {
    this.renderSparkline();

    return (
      <div id="navbar-indices" >
        <span id="sparkline-amzn" ></span>
      </div>
    );
  }
};

export default NavbarIndices;
