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
        <div>
          <h1>Ticker logo</h1>
          <h2>{ `Hello, ${ this.props.currentUser.username }` }</h2>
          <button onClick={ this.handleLogout } >Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Ticker logo</h1>
          <Link to="/login" >Login</Link>
          <Link to="/signup" >Signup</Link>
        </div>
      );
    }
  }
}

export default Navbar;
