import { connect } from 'react-redux';
import { fetchHoldings } from '../../actions/session_actions';
import Portfolio from './portfolio';

const mapStateToProps = (state) => {
  return {
    userId: state.session.id,
    holdings: state.session.holdings,
    stocks: state.entities.stocks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHoldings: (userId) => dispatch(fetchHoldings(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
