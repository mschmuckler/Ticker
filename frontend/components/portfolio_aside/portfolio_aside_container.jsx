import { connect } from 'react-redux';
import {
  fetchQuote,
  deleteHolding,
  addHolding,
} from '../../actions/stock_actions';
import {
  fetchCompanies,
  clearCompanies,
} from '../../actions/search_actions';
import PortfolioAside from './portfolio_aside';

const mapStateToProps = (state) => {
  return {
    holdings: state.session.holdings,
    stocks: state.entities.stocks,
    companies: state.search.companies,
    searchType: state.search.searchType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuote: (symbol) => dispatch(fetchQuote(symbol)),
    addHolding: (holding) => dispatch(addHolding(holding)),
    fetchCompanies: (searchInput, searchType) => dispatch(fetchCompanies(searchInput, searchType)),
    clearCompanies: () => dispatch(clearCompanies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioAside);
