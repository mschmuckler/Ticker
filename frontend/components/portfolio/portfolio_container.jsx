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
import { clearError } from '../../actions/error_actions';
import Portfolio from './portfolio';

const mapStateToProps = (state) => {
  return {
    holdings: state.session.holdings,
    stocks: state.entities.stocks,
    companies: state.search.companies,
    errors: state.errors.addStock,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuote: (symbol) => dispatch(fetchQuote(symbol)),
    deleteHolding: (holdingId) => dispatch(deleteHolding(holdingId)),
    addHolding: (holding) => dispatch(addHolding(holding)),
    fetchCompanies: (searchInput) => dispatch(fetchCompanies(searchInput)),
    clearCompanies: () => dispatch(clearCompanies()),
    clearError: (errorType) => dispatch(clearError(errorType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
