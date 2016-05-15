import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {setShowBack, editCard} from '../actions';

const MS_IN_DAY = 86400000;

const mapStateToProps = ({cards, showBack}, {params: {deckId}}) => {
  return {
    card: cards.filter(card => card.deckId === deckId &&
      (!card.lastStudiedOn || (new Date - card.lastStudiedOn) / MS_IN_DAY >= card.score))[0],
    deckId,
    showBack
  }
};

const mapDispatchToProps = dispatch => ({
  onFlip: () => dispatch(setShowBack(true)),
  onStudied: (cardId, score) => {
    var now = new Date();
    now.setHours(0, 0, 0, 0);
    dispatch(editCard({ id: cardId, score, lastStudiedOn: +now }));
    dispatch(setShowBack());
  },
});

const StudyModal = ({card, showBack, onFlip, deckId, onStudied}) => {
  let body = (
    <div className="no-cards">
      <p>You have no card to study! Good Job!</p>
    </div>
  );
  if (card) {
    body = (
      <div className="study-card">
        <div className={showBack ? 'front hide' : 'front'}>
          <p> {card.front} </p>
          <button onClick={onFlip}>Flip</button>
        </div>
        <div className={showBack ? 'back' : 'back hide'}>
          <div> {card.back} </div>
          <p>How did you do?</p>
          <p>
            <button onClick={e => onStudied(card.id, Math.max(card.score - 1, 1))}>Great</button>
            <button onClick={e => onStudied(card.id, card.score)}>Poorly</button>
            <button onClick={e => onStudied(card.id, Math.min(card.score + 1, 3))}>Okay</button>
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className="modal study-modal">
      <Link to={`/deck/${deckId}`} className="btn close">x</Link>
      {body}
    </div>
  )

};

export default connect(mapStateToProps, mapDispatchToProps)(StudyModal);