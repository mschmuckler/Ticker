import React from 'react';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchHoldings(this.props.userId);
  // }

  render() {
    let tempHolding;
    const portfolioStocks = this.props.holdings.map(holding => {
      tempHolding = Object.values(holding)[0]
      return <li key={ tempHolding.id } >{ tempHolding.ticker }</li>
    });

    return (
      <main>
        <h1>Portfolio</h1>
        <ul>{ portfolioStocks }</ul>
      </main>
    );
  }
}

export default Portfolio;
