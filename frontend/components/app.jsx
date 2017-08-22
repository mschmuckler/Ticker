import React from 'react';
import { Route } from 'react-router-dom';
import AuthFormContainer from './auth/auth_form_container';

const App = (props) => {
  return (
    <div>
      <h1>still working</h1>

      <Route exact path="/signup" component={ AuthFormContainer } />
      <Route exact path="/login" component={ AuthFormContainer } />
    </div>
  );
};

export default App;
