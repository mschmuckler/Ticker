import React from 'react';

class PortfolioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stockInput: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ stockInput: e.target.value.toUpperCase() });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addHolding({
      holding: {
        ticker: this.state.stockInput ,
      },
    }).then(() => this.props.fetchQuote(this.state.stockInput));
    this.setState({ searchInput: "" });
  }

  render() {
    return (
      <div id="portfolio-form" >
        <form>
          <input
            onChange={ this.handleChange }
            type="text"
            placeholder="Find stock"
          />

          <button onClick={ this.handleSubmit } type="submit" >
            Add Stock
          </button>
        </form>
      </div>
    );
  }
}

export default PortfolioForm;
