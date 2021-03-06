/*
 * @Author: btbrad
 * @LastEditors: btbrad
 * @Description: 
 * @Date: 2019-04-03 23:51:38
 * @LastEditTime: 2019-04-04 00:57:33
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import reducers from './reducer'
import './config'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension():f=>f
))

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
    </BrowserRouter>
  </Provider>), 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
