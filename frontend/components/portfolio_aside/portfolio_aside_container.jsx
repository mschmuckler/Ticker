import { connect } from 'react-redux';
import {
  fetchQuote,
  deleteHolding,
  addHolding,
  fetchCompanies,
  clearCompanies,
} from '../../actions/stock_actions';
import PortfolioAside from './portfolio_aside';

const mapStateToProps = (state) => {
  return {
    holdings: state.session.holdings,
    stocks: state.entities.stocks,
    companies: state.entities.companies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuote: (symbol) => dispatch(fetchQuote(symbol)),
    addHolding: (holding) => dispatch(addHolding(holding)),
    fetchCompanies: (searchInput) => dispatch(fetchCompanies(searchInput)),
    clearCompanies: () => dispatch(clearCompanies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioAside);
