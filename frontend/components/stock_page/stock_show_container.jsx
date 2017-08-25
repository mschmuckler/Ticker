import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchQuote,
  fetchCompany,
  addHolding,
  deleteHolding,
} from '../../actions/stock_actions';
import StockShow from './stock_show';

const mapStateToProps = (state) => {
  return {
    stocks: state.entities.stocks,
    holdings: state.session.holdings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuote: (symbol) => dispatch(fetchQuote(symbol)),
    fetchCompany: (symbol) => dispatch(fetchCompany(symbol)),
    addHolding: (holding) => dispatch(addHolding(holding)),
    deleteHolding: (holdingId) => dispatch(deleteHolding(holdingId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StockShow));
