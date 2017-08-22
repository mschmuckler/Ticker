import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import AuthFormContainer from './auth/auth_form_container';
import NavbarContainer from './navbar/navbar_container';

const App = (props) => {
  return (
    <div id="app" >
      <NavbarContainer />

      <Route exact path="/" />
      <AuthRoute exact path="/signup" component={ AuthFormContainer } />
      <AuthRoute exact path="/login" component={ AuthFormContainer } />
    </div>
  );
};

export default App;
