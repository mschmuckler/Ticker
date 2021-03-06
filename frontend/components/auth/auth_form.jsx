import React from 'react';
import Dropzone from 'react-dropzone';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      imageFile: null,
      imageUrl: window.staticImages.blankWhite,
      sparklineValues: [-2,-3,-2,-1,1,3,2,2,1],
      sparklineInterval: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.renderSparkline = this.renderSparkline.bind(this);
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
      if (this.state.imageFile !== null) {
        formData.append("user[avatar]", this.state.imageFile);
      }
      this.props.processForm(formData)
    }
  }

  onDrop(acceptedFiles, rejectedFiles) {
    const file = acceptedFiles[0];
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

  renderSparkline() {
    $(`#auth-sparkline`).sparkline(this.state.sparklineValues, {
      width: 130,
      height: 35,
      type: 'bar',
      barColor: 'green',
      negBarColor: 'white',
      barWidth: '7',
      barSpacing: '2',
      zeroAxis: true,
    });
  }

  componentDidMount() {
    this.renderSparkline();
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
        <div id="auth-header" >
          <h1 id="fade-red-to-green" >Invest</h1><h1>wisely</h1>
          <span id="auth-sparkline" ></span>
          { this.renderSparkline() }
        </div>
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

            <label className={ `image-upload-label ${imageUploadVisibility}` }>
              <span className="auth-icon-box" >
                <img src={ window.staticImages.authCameraIcon } className="auth-icon" />
              </span>
              <Dropzone onDrop={ this.onDrop } className="image-drop" ></Dropzone>
              <img className="image-preview" src={ this.state.imageUrl } />
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
