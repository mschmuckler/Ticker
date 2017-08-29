import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchIntraday } from '../../actions/stock_actions';
import { fetchCompanies, searchArticles } from '../../actions/search_actions';
import Navbar from './navbar';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session,
    stocks: state.entities.stocks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchIntraday: (symbol) => dispatch(fetchIntraday(symbol)),
    fetchCompanies: (searchInput, searchType) => dispatch(fetchCompanies(searchInput, searchType)),
    searchArticles: (searchInput) => dispatch(searchArticles(searchInput)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
