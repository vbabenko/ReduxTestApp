import {editCard, deleteCard} from '../actions';
import {connect} from 'react-redux';
import CardModal from './CardModal';

const mapStateToProps = ({cards}, {params: {cardId}}) => ({
  card: cards.filter(c => c.id === parseInt(cardId, 10))[0]
  
});

const mapDispatchToProps = dispatch => ({
  saveCard: card => dispatch(editCard(card)),
  deleteCard: cardId => dispatch(deleteCard(cardId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);