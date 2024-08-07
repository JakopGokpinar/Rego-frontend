import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import App from './App.js';
import store from './config/store-config.js';

import process from 'process';
window.process = process;

ReactDOM.render(
  <Provider store={store}>
     <App></App>
  </Provider>
  ,document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
