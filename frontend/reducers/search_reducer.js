import { merge } from 'lodash';
import { RECEIVE_COMPANIES } from '../actions/search_actions';

export default (state = { companies: [], articleIds: [] }, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_COMPANIES:
      newState.companies = action.companies
      return newState;
    default:
      return state;
  }
};
