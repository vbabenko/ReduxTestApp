import React from 'react';
import Sidebar from './Sidebar.js';
import {connect} from 'react-redux';

import Toolbar from './Toolbar.js';

const mapStateToProps = (state, ownProps) => {
  return {
    deckId: ownProps.params.deckId
  };
};

const App = ({ deckId, children }) => {
  return (
    <div className='app'>
      <Toolbar deckId={deckId} />
      <Sidebar />
      {children}
    </div>
  )
};

export default connect(mapStateToProps)(App);