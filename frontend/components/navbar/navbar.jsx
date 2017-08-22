import React from 'react';
import { Link } from 'react-router-dom';

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
        <nav id="navbar" >
          <img id="navbar-logo" src="http://www.lcdbuyer.com/images/money-icon.png" />

          <div id="navbar-auth-btns" >
            <h2>{ `Hello, ${ this.props.currentUser.username }` }</h2>
            <button onClick={ this.handleLogout } class="navbar-tab" >Logout</button>
          </div>
        </nav>
      );
    } else {
      return (
        <nav id="navbar" >
          <img id="navbar-logo" src="http://www.lcdbuyer.com/images/money-icon.png" />

          <div id="navbar-auth-btns" >
            <Link to="/login" ><button className="navbar-tab" >Login</button></Link>
            <Link to="/signup" ><button className="navbar-tab" >Signup</button></Link>
          </div>
        </nav>
      );
    }
  }
}

export default Navbar;


// <img id="navbar-logo" src="http://logok.org/wp-content/uploads/2014/04/Orange-logo.png"/>
