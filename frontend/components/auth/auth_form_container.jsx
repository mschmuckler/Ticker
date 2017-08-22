import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: ownProps.location.pathname.slice(1),
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
