import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { DELETE_HOLDING } from '../actions/stock_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    case DELETE_HOLDING:
      delete newState.holdings[action.holdingId];
      return newState;
    default:
      return state;
  }
};
