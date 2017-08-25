import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Root from './components/root';

import { fetchCompany } from './actions/stock_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: window.currentUser };
    if (preloadedState.session.holdings === undefined) {
      preloadedState.session.holdings = {};
    }
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    const preloadedState = { session: { holdings: {} } };
    store = configureStore(preloadedState);
  }

  window.fetchCompany = fetchCompany;
  window.dispatch = store.dispatch

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store } />, root);
});
