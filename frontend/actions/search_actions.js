import * as APIUtil from '../util/stock_api_util';

export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES';

export const fetchCompanies = (searchInput, searchType) => dispatch => {
  // sync action changing search bar in search slice
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

export const switchSearch = () => {
  return {

  }
}
