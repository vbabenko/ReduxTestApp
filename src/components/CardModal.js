import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

const CardModal = React.createClass({
  saveCard(event) {
    let front = ReactDOM.findDOMNode(this.refs.front);
    let back = ReactDOM.findDOMNode(this.refs.back);

    this.props.saveCard(Object.assign({}, this.props.card, {
      front: front.value,
      back: back.value
    }));
    browserHistory.push(`/deck/${this.props.card.deckId}`);
  },
  deleteCard(event) {
    this.props.deleteCard(this.props.card.id);
    browserHistory.push(`/deck/${this.props.card.deckId}`);
  },
  componentDidUpdate() {
    ReactDOM.findDOMNode(this.refs.front).focus();
  },
  render() {
    let {card, deleteCard} = this.props;
    return (
      <div className='modal'>
        <h1>{deleteCard ? 'Edit': 'New'} Card</h1>
        <label> Card Front: </label>
        <textarea ref='front' defaultValue={card.front}></textarea>
        <label> Card Back: </label>
        <textarea ref='back' defaultValue={card.back}></textarea>
        <p>
          <button onClick={this.saveCard}>Save</button>
          <Link to={`/deck/${card.deckId}`} className='btn'>Cancel</Link>
        </p>
        {deleteCard
          ? <button onClick={this.deleteCard}>Delete</button>
          : null
        }
      </div>
    )
  }
});

export default CardModal;