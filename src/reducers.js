export const cardFilter = (state, action) => {
  switch (action.type) {
    case 'FILTER_CARD':
      return action.data || false;
    default:
      return state || false;
  }
};

export const showBack = (state, action) => {
  switch (action.type) {
    case 'SHOW_BACK':
      return action.data;
    default:
      return state || '';
  }
};


export const decks = (state, action) => {
  switch (action.type) {
    case 'ADD_DECK':
      let newDeck = {name: action.data, id: +new Date()};
      return state.concat([newDeck]);
    default:
      return state || [];
  }
};

export const cards = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date()
      });

      return state.concat([newCard]);
    case 'EDIT_CARD':
      let editCard = action.data;
      return state.map(card => (card.id !== editCard.id)
              ? card
              : Object.assign({}, card, editCard));
    case 'DELETE_CARD':
      return state.filter(c => c.id !== action.data);
    default:
      return state || [];
  }
};

export const addingDeck = (state, action) => {
  switch (action.type) {
    case 'SHOW_ADD_DECK': return true;
    case 'HIDE_ADD_DECK': return false;
    default:
      return state || false;
  }
};