import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
