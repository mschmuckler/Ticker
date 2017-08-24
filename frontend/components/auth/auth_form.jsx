import React from 'react';
import FontAwesome from 'react-fontawesome';

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
          this.props.history.push('/portfolio');
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

        <div id="auth-form" >
          <form onSubmit={ this.handleSubmit } >
            <label>
              <span className="auth-icon-box" >
                <img src={ window.staticImages.authUserIcon } className="auth-icon" />
              </span>
              <input
                placeholder="Username"
                value={ this.state.username }
                onChange={ this.handleChange('username') }
                type="text"
              />
            </label>
            <br />

            <label>
              <span className="auth-icon-box" >
                <img src={ window.staticImages.authKeyIcon } className="auth-icon" />
              </span>
              <input
                placeholder="Password"
                value={ this.state.password }
                onChange={ this.handleChange('password') }
                type="password"
              />
            </label>
            <br />

            <input type="submit" value={ this.props.formType } />
          </form>
        </div>

        <ul id="auth-errors" >{ allErrors }</ul>
      </div>
    );
  }
}

export default AuthForm;
