import * as StockUtil from '../util/stock_api_util';
import * as ArticleUtil from '../util/article_api_util';
import { receiveArticles } from './article_actions';

export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES';
export const SWITCH_SEARCH = 'SWITCH_SEARCH';

export const fetchCompanies = (searchInput, searchType) => dispatch => {
  dispatch(switchSearch(searchType));
  return StockUtil.requestCompanies(searchInput).then(
    (companies) => dispatch(receiveCompanies(companies))
  );
};

export const searchArticles = (searchInput) => dispatch => {
  return ArticleUtil.searchArticles(searchInput).then(
    (articles) => dispatch(receiveArticles(articles))
  );
};

export const receiveCompanies = (companies) => {
  return {
    type: RECEIVE_COMPANIES,
    companies,
  };
}

export const clearCompanies = () => {
  return {
    type: RECEIVE_COMPANIES,
    companies: [],
  };
}

export const switchSearch = (searchType) => {
  return {
    type: SWITCH_SEARCH,
    searchType,
  };
};
