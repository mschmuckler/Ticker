import * as APIUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_HOLDINGS = 'RECEIVE_HOLDINGS';

export const login = (user) => dispatch => {
  return APIUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors, "auth"))
  );
};

export const signup = (user) => dispatch => {
  return APIUtil.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors, "auth"))
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors, "logout"))
  );
};

export const receiveCurrentUser = (currentUser) => {
  if (currentUser.holdings === undefined) {
    currentUser.holdings = {};
  }

  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser,
  };
};
