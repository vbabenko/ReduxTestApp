import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {showAddDeck} from '../actions.js';

const mapDispatchToProps = dispatch => ({
  showAddDeck: () => dispatch(showAddDeck())
});

const Toolbar = ({deckId, showAddDeck}) => {
  let toolBarSettings = deckId
          ? (<div>
              <Link to={`/deck/${deckId}/new`} className='btn'>+ New card</Link>
              <Link to={`/deck/${deckId}/study`} className='btn'>Study deck</Link>
            </div>)
          : null;
  return (
    <div className='toolbar'>
      <div>
        <button onClick={showAddDeck}>+ New deck</button>
      </div>
      {toolBarSettings}
    </div>
  )
};

export default connect(null, mapDispatchToProps)(Toolbar);