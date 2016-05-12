import React from 'react';
import Sidebar from './Sidebar.js';
import {connect} from 'react-redux';

import Toolbar from './Toolbar.js';

const mapStateToProps = (props, router) => {
  return {
    deckId: router.params.deckId
  };
};

const App = ({ deckId, children }) => {
  return (
    <div className='app'>
      <Toolbar />
      <Sidebar />
      {children}
    </div>
  )
};

export default connect(mapStateToProps)(App);