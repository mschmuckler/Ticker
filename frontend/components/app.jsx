import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AuthFormContainer from './auth/auth_form_container';
import NavbarContainer from './navbar/navbar_container';
import PortfolioContainer from './portfolio/portfolio_container';
import StockPage from './stock_page/stock_page';
import PortfolioAsideContainer from './portfolio_aside/portfolio_aside_container';

const App = (props) => {
  return (
    <div id="app" >
      <NavbarContainer />
      <div id="navbar-filler" ></div>

      <main>

        <ProtectedRoute exact path="/portfolio" component={ PortfolioContainer } />
        <AuthRoute exact path="/signup" component={ AuthFormContainer } />
        <AuthRoute exact path="/login" component={ AuthFormContainer } />
        <ProtectedRoute exact path="/stock/:ticker" component={ PortfolioAsideContainer } />
        <ProtectedRoute exact path="/stock/:ticker" component={ StockPage } />
      </main>
    </div>
  );
};

export default App;
