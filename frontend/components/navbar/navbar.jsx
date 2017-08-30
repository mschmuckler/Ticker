import React from 'react';
import { Link } from 'react-router-dom';
import NavbarIndices from './navbar_indices';
import NavbarSearch from './navbar_search';
import NavbarTickerTape from './navbar_ticker_tape';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout()
      .then(
        () => {
          this.props.history.push('/login');
        }
      );
  }

  render() {
    if (this.props.currentUser.id !== undefined) {
      return (
        <div id="nav-and-tape" >
          <nav id="navbar" >
            <section id="logo-and-indices">
              <Link to="/portfolio" >
                <h1>Ticker▲</h1>
              </Link>

              <NavbarIndices
                fetchIntraday={ this.props.fetchIntraday }
                stocks={ this.props.stocks }
              />
            </section>

            <section id="search-and-btns" >
              <NavbarSearch
                history={ this.props.history }
                fetchCompanies={ this.props.fetchCompanies }
                searchArticles={ this.props.searchArticles }
              />

              <div id="navbar-auth-btns" >
                <button onClick={ this.handleLogout } className="navbar-tab" >Logout</button>
              </div>
              <img id="navbar-user-avatar" src={ this.props.currentUser.avatar } />
            </section>
          </nav>
          <NavbarTickerTape
            fetchQuote={ this.props.fetchQuote }
            stocks={ this.props.stocks }
          />
        </div>
      );
    } else {
      return (
        <div id="nav-and-tape" >
          <nav id="navbar" >
            <section id="logo-and-indices">
              <h1>Ticker▲</h1>

              <NavbarIndices
                fetchIntraday={ this.props.fetchIntraday }
                stocks={ this.props.stocks }
              />
          </section>

            <section id="search-and-btns" >
              <NavbarSearch
                history={ this.props.history }
                fetchCompanies={ this.props.fetchCompanies }
                searchArticles={ this.props.searchArticles }
              />

              <div id="navbar-auth-btns" >
                <Link to="/login" ><button className="navbar-tab" >Login</button></Link>
                <Link to="/signup" ><button className="navbar-tab" >Signup</button></Link>
              </div>
            </section>
          </nav>
          <NavbarTickerTape
            fetchQuote={ this.props.fetchQuote }
            stocks={ this.props.stocks }
          />
        </div>
      );
    }
  }
}

export default Navbar;
