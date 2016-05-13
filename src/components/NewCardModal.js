import {connect} from 'react-redux';
import CardModal from './CardModal.js';
import {addCard} from '../actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    card: ownProps.params.deckId
  }
};

const mapDispatchToProps = dispatch => ({
  saveCard: card => dispatch(addCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);