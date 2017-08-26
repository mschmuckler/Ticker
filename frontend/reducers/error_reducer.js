import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ERRORS, CLEAR_ERROR } from '../actions/error_actions';
import { ADD_HOLDING } from '../actions/stock_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { auth: null });
    case RECEIVE_ERRORS:
      return { [action.errorType]: action.errors.responseJSON };
    case CLEAR_ERROR:
      return merge({}, state, { [action.errorType]: null });
    case ADD_HOLDING:
      return {};
    default:
      return state;
  }
};
