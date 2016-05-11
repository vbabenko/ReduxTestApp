import React from 'react';
import ReactDOM from 'react-dom';

const Sidebar = React.createClass({
  componentDidUpdate() {
    let elem = ReactDOM.findDOMNode(this.refs.add);
    if (elem) elem.focus();
  },
  createNewDeck(event) {
    if (event.which !== 13) return;
    let elem = ReactDOM.findDOMNode(this.refs.add);
    this.props.addDeck(elem.value);
    this.props.hideDeck();

  },
  render() {
    let props = this.props;
    return (
      <div className="sidebar">
        <h2>All Decks</h2>
        <button onClick={ e => {this.props.showDeck()} }>
          New Deck
        </button>
        <ul>
          {
            props.decks.map((deck, index) => {
              return <li key={index}> {deck.name} </li>
            })
          }
        </ul>
        {props.addingDeck && <input ref='add' onKeyPress={this.createNewDeck} />}
      </div>
    )
  }
});

export default Sidebar;