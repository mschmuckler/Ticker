import { merge } from 'lodash';
import { RECEIVE_COMPANIES, SWITCH_SEARCH } from '../actions/search_actions';
import { RECEIVE_ARTICLES } from '../actions/article_actions';

export default (state = {
  companies: [],
  articleIds: [],
  searchType: null,
}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_COMPANIES:
      newState.companies = action.companies;
      return newState;
    case RECEIVE_ARTICLES:
      newState.articleIds = Object.values(action.articleIds).map(el => el.id);
      return newState;
    case SWITCH_SEARCH:
      newState.searchType = action.searchType;
      return newState;
    default:
      return state;
  }
};
