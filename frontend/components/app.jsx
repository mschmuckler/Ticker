import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AuthFormContainer from './auth/auth_form_container';
import NavbarContainer from './navbar/navbar_container';
import PortfolioAsideContainer from './portfolio_aside/portfolio_aside_container';
import PortfolioContainer from './portfolio/portfolio_container';
import StockPage from './stock_page/stock_page';
import ArticleShowContainer from './article/article_show_container';
import ArticleFormContainer from './article/article_form_container';

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
        <ProtectedRoute exact path="/articles/:articleId" component={ PortfolioAsideContainer } />
        <ProtectedRoute exact path="/articles/:articleId" component={ ArticleShowContainer } />
        <ProtectedRoute exact path="/article/new/:ticker" component={ PortfolioAsideContainer } />
        <ProtectedRoute exact path="/article/new/:ticker" component={ ArticleFormContainer } />
      </main>
    </div>
  );
};

export default App;
