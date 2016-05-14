import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import * as reducers from './reducers.js';
reducers.routing = routerReducer;

import * as localStore from './localStore.js';
import App from './components/App.js';
import VisibleCard from './components/VisibleCard.js';
import NewCardModel from './components/NewCardModal.js';
import EditCardModel from './components/EditCardModal.js';

const store = createStore(combineReducers(reducers), localStore.get()); // state saved to local storage
const history = syncHistoryWithStore(browserHistory, store);

function run() {
  let state = store.getState();
  localStore.set(state, ['decks', 'cards']);
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
          <Route path='/deck/:deckId' component={VisibleCard}>
            <Route path='/deck/:deckId/new' component={NewCardModel} />
            <Route path='/deck/:deckId/edit/:cardId' component={EditCardModel} />
          </Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}
run();

store.subscribe(run);