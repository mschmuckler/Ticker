import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = (state, ownProps) => {
  let loggedIn = false;
  let linkType = '/login';
  if (state.session.currentUser) { loggedIn = true; }
  if (ownProps.location.pathname === '/login') { linkType = '/signup'; }


  return {
    loggedIn: loggedIn,
    errors: state.session.errors,
    formType: ownProps.location.pathname.slice(1),
    linkType: linkType,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = signup;
  if (ownProps.location.pathname === '/login') { processForm = login; }

  return {
    processForm: (user) => dispatch(processForm(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
