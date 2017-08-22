import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app';

const Root = (props) => {
  return (
    <div id="comp-root" >      
      <Provider store={ props.store } >
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </div>
  );
};

export default Root;
