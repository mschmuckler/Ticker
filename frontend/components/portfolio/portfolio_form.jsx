import React from 'react';

class PortfolioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAutoComplete = this.handleAutoComplete.bind(this);
  }

  handleChange(e) {
    this.setState({ searchInput: e.target.value.toUpperCase() });
    this.props.fetchCompanies(this.state.searchInput);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addHolding({
      holding: {
        ticker: this.state.searchInput ,
      },
    }).then(() => this.props.fetchQuote(this.state.searchInput));
  }

  handleAutoComplete(e) {
    this.setState({ searchInput: e.target.title })
  }

  render() {
    const allCompanies = this.props.companies.map((company, idx) => {
      return <li
        key={ idx }
        title={ company.ticker }
        onClick={ this.handleAutoComplete } >
        { company.name }
      </li>
    });

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
          <ul>{ allCompanies }</ul>
        </form>
      </div>
    );
  }
}

export default PortfolioForm;
