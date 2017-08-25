import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AuthFormContainer from './auth/auth_form_container';
import NavbarContainer from './navbar/navbar_container';
import PortfolioContainer from './portfolio/portfolio_container';
import StockShow from './stock_show/stock_show';

const App = (props) => {
  return (
    <div id="app" >
      <NavbarContainer />

      <ProtectedRoute exact path="/portfolio" component={ PortfolioContainer } />
      <ProtectedRoute exact path="/stock/:ticker" component={ StockShow } />
      <AuthRoute exact path="/signup" component={ AuthFormContainer } />
      <AuthRoute exact path="/login" component={ AuthFormContainer } />
    </div>
  );
};

export default App;
