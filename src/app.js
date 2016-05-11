import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {addDeck, showAddDeck, hideAddDeck} from './actions.js';
import * as reducers from './reducers.js';
import App from './components/App.js';
import Sidebar from './components/Sidebar.js';

const store = createStore(combineReducers(reducers));

function run() {
  let state = store.getState();
  ReactDOM.render(
    <App>
      <Sidebar
        decks={state.decks}
        addingDeck={state.addingDeck}
        addDeck={name => store.dispatch(addDeck(name))}
        showDeck={() => store.dispatch(showAddDeck())}
        hideDeck={() => store.dispatch(hideAddDeck())}
        />
    </App>,
    document.getElementById('root')
  );
}
run();

store.subscribe(run);