import React from 'react';

class PortfolioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const searchInput = e.target.value.toUpperCase();
    this.setState({ searchInput });
    this.props.fetchCompanies(searchInput);
  }

  handleSubmit(e) {
    e.preventDefault();
    const ticker = e.currentTarget.title;
    this.props.addHolding({
      holding: {
        ticker: ticker,
      },
    }).then(() => this.props.fetchQuote(ticker));
    this.props.clearCompanies();
  }

  render() {
    const allCompanies = this.props.companies.map((company, idx) => {
      return <li
        key={ idx }
        title={ company.ticker }
        onClick={ this.handleSubmit } >
        <div className="auto-list-ticker" >{ company.ticker }</div>
        <div className="auto-list-name" >{ company.name }</div>
      </li>
    });
    let dropdownVisibility = "revealed";
    if (allCompanies[0] === undefined) {
      dropdownVisibility = "hidden";
    }

    return (
      <div id="aside-form" >
        <form>
          <div id="aside-input" >
            <input
              onChange={ this.handleChange }
              type="text"
              placeholder="Add symbol..."
              value={ this.state.searchInput }
            />
            <div id="aside-plus-box" ><img src={ window.staticImages.plusIcon } /></div>
          </div>
          <ul id="aside-autocomplete-list" className={ dropdownVisibility } >{ allCompanies }</ul>
        </form>
      </div>
    );
  }
}

export default PortfolioForm;
