import { connect } from 'react-redux';
import { fetchQuote } from '../../actions/stock_actions';
import Portfolio from './portfolio';

const mapStateToProps = (state) => {
  return {
    holdings: state.session.holdings,
    stocks: state.entities.stocks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuote: (symbol) => dispatch(fetchQuote(symbol)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
