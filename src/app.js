import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './reducers.js';
reducers.routing = routerReducer;

import {fetchData} from './actions';
import App from './components/App.js';
import VisibleCard from './components/VisibleCard.js';
import NewCardModel from './components/NewCardModal.js';
import EditCardModel from './components/EditCardModal.js';
import StudyModal from './components/StudyModal.js';

const store = createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware)); // state saved to local storage
const history = syncHistoryWithStore(browserHistory, store);

function run() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
          <Route path='/deck/:deckId' component={VisibleCard}>
            <Route path='/deck/:deckId/new' component={NewCardModel} />
            <Route path='/deck/:deckId/edit/:cardId' component={EditCardModel} />
            <Route path='/deck/:deckId/study' component={StudyModal} />
          </Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}

function save() {
  let state = store.getState();
  fetch('/api/data', {
    method: 'POST',
    body: JSON.stringify({
      decks: state.decks,
      cards: state.cards
    }),
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

function init() {
  run();
  store.subscribe(run);
  store.subscribe(save);
  store.dispatch(fetchData());
}
init();