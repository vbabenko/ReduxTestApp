import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {showAddDeck} from '../actions.js';

const mapDispatchToProps = dispatch => ({
  showAddDeck: () => dispatch(showAddDeck())
});

const Toolbar = ({showAddDeck}) => {
  return (
    <div className='toolbar'>
      <button onClick={showAddDeck}>+ New deck</button>
    </div>
  )
};

export default connect(null, mapDispatchToProps)(Toolbar);