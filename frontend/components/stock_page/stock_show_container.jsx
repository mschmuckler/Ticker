import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchQuote,
  addHolding,
} from '../../actions/stock_actions';
import StockShow from './stock_show';

const mapStateToProps = (state) => {
  return {
    stocks: state.entities.stocks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuote: (symbol) => dispatch(fetchQuote(symbol)),
    deleteHolding: (holdingId) => dispatch(deleteHolding(holdingId)),
    addHolding: (holding) => dispatch(addHolding(holding)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StockShow));
