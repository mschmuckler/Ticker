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
                <h1>ticker▲</h1>
              </Link>

              <NavbarIndices
                fetchIntraday={ this.props.fetchIntraday }
                stocks={ this.props.stocks }
              />
            </section>

            <section id="search-and-btns" >
              <NavbarSearch />

              <div id="navbar-auth-btns" >
                <button onClick={ this.handleLogout } className="navbar-tab" >Logout</button>
              </div>
              <img id="navbar-user-avatar" src={ this.props.currentUser.avatar } />
            </section>
          </nav>
          <NavbarTickerTape />
        </div>
      );
    } else {
      return (
        <div id="nav-and-tape" >
          <nav id="navbar" >
            <section id="logo-and-indices">
              <h1>ticker▲</h1>

              <NavbarIndices
                fetchIntraday={ this.props.fetchIntraday }
                stocks={ this.props.stocks }
              />
          </section>

            <section id="search-and-btns" >
              <NavbarSearch />

              <div id="navbar-auth-btns" >
                <Link to="/login" ><button className="navbar-tab" >Login</button></Link>
                <Link to="/signup" ><button className="navbar-tab" >Signup</button></Link>
              </div>
            </section>
          </nav>
          <NavbarTickerTape />
        </div>
      );
    }
  }
}

export default Navbar;


// <img id="navbar-logo" src="http://logok.org/wp-content/uploads/2014/04/Orange-logo.png"/>
