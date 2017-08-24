import React from 'react';

class PortfolioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ searchInput: e.target.value.toUpperCase() });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addHolding({
      holding: {
        ticker: this.state.searchInput ,
      },
    }).then(() => this.props.fetchQuote(this.state.searchInput));
  }

  render() {
    return (
      <div id="portfolio-form" >
        <p>{ this.props.errors }</p>
        <form>
          <input
            onChange={ this.handleChange }
            type="text"
            placeholder="Find stock"
            value={ this.state.searchInput }
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
