import { merge } from 'lodash';
import { RECEIVE_INTRADAY } from '../actions/stock_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_INTRADAY:
      return merge({}, state, action.stock);
    default:
      return state;
  }
};
