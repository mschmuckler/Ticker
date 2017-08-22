import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ERRORS } from '../actions/error_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { login: null }, { signup: null }, { logout: null });
    case RECEIVE_ERRORS:
      return merge({}, state, { [action.errorType]: action.errors.responseJSON });
    default:
      return state;
  }
};
