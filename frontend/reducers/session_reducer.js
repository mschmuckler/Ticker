import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, RECEIVE_HOLDINGS } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    case RECEIVE_HOLDINGS:
      return merge({}, state, { holdings: action.holdings })
    default:
      return state;
  }
};
