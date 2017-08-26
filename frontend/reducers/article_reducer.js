import { merge } from 'lodash';
import { RECEIVE_ARTICLES } from '../actions/article_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTICLES:
      return action.articles;
    default:
      return state;
  }
};
