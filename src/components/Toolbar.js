import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {showAddDeck, filterCard} from '../actions.js';

const mapDispatchToProps = dispatch => ({
  showAddDeck: () => dispatch(showAddDeck()),
  onFilter: query => dispatch(filterCard(query))
});

const Toolbar = ({deckId, showAddDeck, onFilter}) => {
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
      <input type="search"
             onChange={e => onFilter(e.target.value)}
             className="search"
             placeholder="Search Cards.."
      />
    </div>
  )
};

export default connect(null, mapDispatchToProps)(Toolbar);