import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import * as reducers from './reducers.js';
import App from './components/App.js';
import Sidebar from './components/Sidebar.js';

const store = createStore(combineReducers(reducers));

function run() {
  ReactDOM.render(
    <Provider store={store}>
      <App>
        <Sidebar />
      </App>
    </Provider>,
    document.getElementById('root')
  );
}
run();

store.subscribe(run);