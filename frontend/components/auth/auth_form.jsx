import React from 'react';
import Dropzone from 'react-dropzone';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      imageFile: null,
      imageUrl: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.location.pathname === '/login') {
      const user = Object.assign({}, this.state);
      this.props.processForm(user)
      .then(
        () => {
          this.props.history.push('/portfolio');
        }
      );
    } else {
      let formData = new FormData();
      formData.append("user[username]", this.state.username);
      formData.append("user[password]", this.state.password);
      formData.append("user[avatar]", this.state.imageFile);
      this.props.processForm(formData)
    }
  }

  onDrop(acceptedFiles, rejectedFiles) {
    const file = acceptedFiles.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  guestLogin(e) {
    e.preventDefault();
    this.props.login({ username: "GordonGekko", password: "greedisgood" })
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

    let imageUploadVisibility = "hidden";
    if (this.props.location.pathname === '/signup') {
      imageUploadVisibility = "visible";
    }

    return (
      <div id="auth-comp" >

        <div id="auth-form" >
          <form>
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

            <label className={ imageUploadVisibility }>
              <Dropzone onDrop={ this.onDrop } className="image-drop" ></Dropzone>
            </label>

            <input onClick={ this.handleSubmit }
              type="submit"
              value={ this.props.formType }
            />
            <input
              onClick={ this.guestLogin }
              type="submit"
              value="Guest"
              id="auth-guest-btn"
            />
          </form>
        </div>

        <ul id="auth-errors" >{ allErrors }</ul>
      </div>
    );
  }
}

export default AuthForm;
