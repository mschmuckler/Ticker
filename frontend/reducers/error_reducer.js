import { merge } from 'lodash';
import { RECEIVE_ERRORS } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return merge({}, state, { [action.errorType]: action.errors.responseJSON });
    default:
      return state;
  }
};
