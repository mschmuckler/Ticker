import React from 'react';

class NavbarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "" }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchInput: e.currentTarget.value });
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.fetchCompanies(this.state.searchInput, "nav");
    this.props.searchArticles(this.state.searchInput);
    this.props.history.push(`/search`);
  }

  render() {
    return (
      <div id="navbar-search" >
        <input
          type="text"
          placeholder="Search..."
          onChange={ this.handleChange }
        />
        <span className="search-icon-box" >
          <img
            src={ window.staticImages.searchIcon }
            className="search-icon"
            onClick={ this.handleSearch }
          />
        </span>
      </div>
    );
  }
}

export default NavbarSearch;
