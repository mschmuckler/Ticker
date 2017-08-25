import { merge } from 'lodash';
import {
  RECEIVE_INTRADAY,
  RECEIVE_QUOTE,
  RECEIVE_FAKE_QUOTE,
  RECEIVE_COMPANY,
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
    case RECEIVE_COMPANY:
      return merge({}, state, action.company);
    default:
      return state;
  }
};
