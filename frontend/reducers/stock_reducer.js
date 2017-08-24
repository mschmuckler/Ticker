import { merge } from 'lodash';
import {
  RECEIVE_INTRADAY,
  RECEIVE_QUOTE,
  RECEIVE_FAKE_QUOTE,
} from '../actions/stock_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_INTRADAY:
      return merge({}, state, action.stock);
    case RECEIVE_QUOTE:
      return merge({}, state, action.stock);
    case RECEIVE_FAKE_QUOTE:
      return merge({}, state, action.stock);
    default:
      return state;
  }
};
