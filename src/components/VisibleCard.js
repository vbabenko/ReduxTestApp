import React from 'react';
import fuzzySearch from 'fuzzysearch';
import Card from './Card';
import {connect} from 'react-redux';

const matches = (query, card) =>
  fuzzySearch(query, card.front) ||
  fuzzySearch(query, card.back);

const mapStateToProps = ({cards, cardFilter}, {params : {deckId}}) => {
  return {
    cards: cards.filter(c => c.deckId === deckId && matches(cardFilter, c))
  }
};
const Cards = ({cards, children}) => {
  return (
    <div className="main">
      {cards.map(card => <Card card={card} key={card.id} />)}
      {children}
    </div>
  )
};

export default connect(mapStateToProps)(Cards);