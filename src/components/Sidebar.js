import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {addDeck, showAddDeck, hideAddDeck} from '../actions.js';


const mapStateToProps = state => ({
  decks: state.decks,
  addingDeck: state.addingDeck
});

const mapDispatchToProps = dispatch => ({
  addDeck: name => dispatch(addDeck(name)),
  showDeck: () => dispatch(showAddDeck()),
  hideDeck: () => dispatch(hideAddDeck())
});

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
        <ul>
          {
            props.decks.map((deck, index) => {
              return (
                <li key={index}>
                  <Link to={`/deck/${deck.id}`}>
                    {deck.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
        {props.addingDeck && <input ref='add' onKeyPress={this.createNewDeck} />}
      </div>
    )
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);