import * as APIUtil from '../util/session_api_util';
import { receieveErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = (user) => dispatch => {
  return APIUtil.login(user).then(
    (user) => dispatch(receieveCurrentUser(user)),
    (errors) => dispatch(receieveErrors(errors, "login"))
  );
};

export const signup = (user) => dispatch => {
  return APIUtil.signup(user).then(
    (user) => dispatch(receieveCurrentUser(user)),
    (errors) => dispatch(receieveErrors(errors, "signup"))
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(
    (user) => dispatch(receieveCurrentUser(user)),
    (errors) => dispatch(receieveErrors(errors, "logout"))
  );
};

export const receieveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser,
  };
};
