import React from 'react';

class NavbarSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="navbar-search" >
        <input type="text" placeholder="Search..." />
        <span className="search-icon-box" >
          <img src={ window.staticImages.searchIcon } className="search-icon" />
        </span>
      </div>
    );
  }
}

export default NavbarSearch;
