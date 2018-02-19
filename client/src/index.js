// when you import css, it doesn't actually assign it to a variable
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Args to createStore: 1) 2) initial state 3) middleware (redux thunk)
// const store = createStore(reducers, {}, applyMiddleware(reduxThunk))
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

console.log('stripe key is', process.env.REACT_APP_STRIPE_KEY);
console.log('environment is', process.env.NODE_ENV);
