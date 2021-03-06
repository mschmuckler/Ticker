import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AuthFormContainer from './auth/auth_form_container';
import NavbarContainer from './navbar/navbar_container';
import PortfolioAsideContainer from './portfolio_aside/portfolio_aside_container';
import PortfolioContainer from './portfolio/portfolio_container';
import StockPage from './stock_page/stock_page';
import ArticleShowContainer from './article/article_show_container';
import ArticleFormContainer from './article/article_form_container';
import SearchLandingContainer from './search_landing/search_landing_container';

const App = (props) => {
  return (
    <div id="app" >
      <NavbarContainer />
      <div id="navbar-filler" ></div>

      <main>
        <AuthRoute exact path="/signup" component={ AuthFormContainer } />
        <AuthRoute exact path="/login" component={ AuthFormContainer } />
        <ProtectedRoute exact path="/portfolio" component={ PortfolioContainer } />
        <ProtectedRoute exact path="/stock/:ticker" component={ PortfolioAsideContainer } />
        <ProtectedRoute exact path="/stock/:ticker" component={ StockPage } />
        <ProtectedRoute exact path="/articles/:articleId" component={ PortfolioAsideContainer } />
        <ProtectedRoute exact path="/articles/:articleId" component={ ArticleShowContainer } />
        <ProtectedRoute exact path="/article/new/:ticker" component={ PortfolioAsideContainer } />
        <ProtectedRoute exact path="/article/new/:ticker" component={ ArticleFormContainer } />
        <ProtectedRoute exact path="/search/q=:searchInput" component={ PortfolioAsideContainer } />
        <ProtectedRoute exact path="/search/q=:searchInput" component={ SearchLandingContainer } />
        <Route exact path="/" render={ () => <Redirect to="/portfolio" /> } />
      </main>
    </div>
  );
};

export default App;
