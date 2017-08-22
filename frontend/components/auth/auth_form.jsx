import React from 'react';

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
    return (
      <div>
        <h2>{ this.props.formType }</h2>
        <p>{ this.props.errors }</p>
        <form onSubmit={ this.handleSubmit } >
          <label>Username:
            <input value={ this.state.username }
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
    );
  }
}

export default AuthForm;
