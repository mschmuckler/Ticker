import React from 'react';
import { Link } from 'react-router-dom';
import NavbarIndices from './navbar_indices';
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
            <img id="navbar-logo" src={ window.staticImages.moneyOrangeIcon } />

            <NavbarIndices
              fetchIntraday={ this.props.fetchIntraday }
              stocks={ this.props.stocks }
            />

            <div id="navbar-auth-btns" >
              <p id="navbar-user-avatar" >{ `Hello, ${ this.props.currentUser.username }` }</p>
              <button onClick={ this.handleLogout } className="navbar-tab" >Logout</button>
            </div>
          </nav>
          <NavbarTickerTape />
        </div>
      );
    } else {
      return (
        <div id="nav-and-tape" >
          <nav id="navbar" >
            <img id="navbar-logo" src={ window.staticImages.moneyOrangeIcon } />

              <NavbarIndices
                fetchIntraday={ this.props.fetchIntraday }
                stocks={ this.props.stocks }
              />

            <div id="navbar-auth-btns" >
              <Link to="/login" ><button className="navbar-tab" >Login</button></Link>
              <Link to="/signup" ><button className="navbar-tab" >Signup</button></Link>
            </div>
          </nav>
          <NavbarTickerTape />
        </div>
      );
    }
  }
}

export default Navbar;


// <img id="navbar-logo" src="http://logok.org/wp-content/uploads/2014/04/Orange-logo.png"/>
