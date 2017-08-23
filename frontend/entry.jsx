import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Root from './components/root';

import { fetchQuote } from './actions/stock_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: window.currentUser };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.fetchQuote = fetchQuote;
  window.dispatch = store.dispatch

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store } />, root);
});
