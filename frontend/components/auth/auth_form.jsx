import React from 'react';
import AuthTickerTape from './auth_ticker_tape';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(
        () => {
          this.props.history.push('/');
        }
      );
  }

  render() {
    let arrayErrors = [];
    if (this.props.errors.auth) {
      arrayErrors = this.props.errors.auth;
    }

    const allErrors = arrayErrors.map((error, idx) => {
      return <li key={ idx } >{ error }</li>
    });

    return (
      <div id="auth-comp" >
        <AuthTickerTape />

        <div id="auth-form" >
          <h2>{ this.props.formType }</h2>
          <form onSubmit={ this.handleSubmit } >
            <label>Username:
              <input
                value={ this.state.username }
                onChange={ this.handleChange('username') }
                type="text"
              />
            </label>
            <br />

            <label>Password:
              <input
                value={ this.state.password }
                onChange={ this.handleChange('password') }
                type="password"
              />
            </label>
            <br />

            <input type="submit" value="Submit" />
          </form>
        </div>

        <ul id="auth-errors" >{ allErrors }</ul>
      </div>
    );
  }
}

export default AuthForm;
