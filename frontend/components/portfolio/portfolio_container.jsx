import { connect } from 'react-redux';
import {
  fetchQuote,
  deleteHolding,
  addHolding,
  fetchCompanies,
} from '../../actions/stock_actions';
import Portfolio from './portfolio';

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
    deleteHolding: (holdingId) => dispatch(deleteHolding(holdingId)),
    addHolding: (holding) => dispatch(addHolding(holding)),
    fetchCompanies: (companies) => dispatch(fetchCompanies(companies)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
