import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const initialState = {
  currentUser: null,
  errors: [],
};

export default (state = initialState, action) => {
  Object.freeze(state);

  let currentUser;
  let errors;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      currentUser = action.currentUser;
      errors = action.errors;
      return merge({}, state, { currentUser }, { errors });
    case RECEIVE_ERRORS:
      currentUser = action.currentUser;
      errors = action.errors.responseJSON;
      return merge({}, state, { currentUser }, { errors });
    default:
      return state;
  }
};
