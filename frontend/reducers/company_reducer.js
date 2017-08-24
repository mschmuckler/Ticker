import { merge } from 'lodash';
import { RECEIVE_COMPANIES } from '../actions/stock_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMPANIES:
      return action.companies;
    default:
      return state;
  }
};
