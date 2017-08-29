import * as APIUtil from '../util/stock_api_util';

export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES';
export const SWITCH_SEARCH = 'SWITCH_SEARCH';

export const fetchCompanies = (searchInput, searchType) => dispatch => {
  dispatch(switchSearch(searchType));
  return APIUtil.requestCompanies(searchInput).then(
    (companies) => dispatch(receiveCompanies(companies))
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
