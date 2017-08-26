import * as APIUtil from '../util/article_api_util';

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';

export const fetchArticles = (ticker) => dispatch => {
  return APIUtil.requestArticles(ticker).then(
    (articles) => dispatch(receiveArticles(articles))
  );
};

export const fetchArticle = (articleId) => dispatch => {
  return APIUtil.requestArticle(articleId).then(
    (article) => dispatch(receiveArticle(article))
  );
};

export const receiveArticles = (articles) => {
  return {
    type: RECEIVE_ARTICLES,
    articles,
  };
};

export const receiveArticle = (article) => {
  return {
    type: RECEIVE_ARTICLE,
    article,
  };
};
