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
    const searchInput = e.target.value.toUpperCase();
    this.setState({ searchInput });
    this.props.fetchCompanies(searchInput, "portfolio");
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchInput = this.state.searchInput;
    this.props.addHolding({
      holding: {
        ticker: searchInput ,
      },
    }).then(() => this.props.fetchQuote(searchInput));
    this.setState({ searchInput: "" });
  }

  handleAutoComplete(e) {
    this.setState({ searchInput: e.currentTarget.title });
    this.props.clearCompanies();
  }

  render() {
    const allCompanies = this.props.companies.map((company, idx) => {
      return <li
        key={ idx }
        title={ company.ticker }
        onClick={ this.handleAutoComplete } >
        <div className="auto-list-ticker" >{ company.ticker }</div>
        <div className="auto-list-name" >{ company.name }</div>
      </li>
    });
    let dropdownVisibility = "revealed";
    if (allCompanies[0] === undefined || this.props.searchType !== "portfolio") {
      dropdownVisibility = "hidden";
    }

    return (
      <div id="portfolio-form" >
        <form>
          <div id="input-and-autocomplete" >
            <input
              onChange={ this.handleChange }
              type="text"
              placeholder="example: AAPL, JNJ"
              value={ this.state.searchInput }
            />
          <ul id="autocomplete-list" className={ dropdownVisibility } >{ allCompanies }</ul>
          </div>

          <button onClick={ this.handleSubmit } type="submit" >
            Add to Portfolio
          </button>
        </form>
        <div id="portfolio-form-errors" >
          { this.props.errors }
        </div>
      </div>
    );
  }
}

export default PortfolioForm;
