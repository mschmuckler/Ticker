import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = (state, ownProps) => {
  let formType = ownProps.location.pathname.slice(1)
  formType = formType.charAt(0).toUpperCase() + formType.slice(1);

  return {
    errors: state.errors,
    formType: formType,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = signup;
  if (ownProps.location.pathname === '/login') { processForm = login; }

  return {
    processForm: (user) => dispatch(processForm(user)),
    login: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
