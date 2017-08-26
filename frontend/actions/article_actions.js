import * as APIUtil from '../util/article_api_util';

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

export const fetchArticles = (ticker) => dispatch => {
  return APIUtil.requestArticles(ticker).then(
    (articles) => dispatch(receiveArticles(articles))
  );
};

export const receiveArticles = (articles) => {
  return {
    type: RECEIVE_ARTICLES,
    articles,
  };
};
