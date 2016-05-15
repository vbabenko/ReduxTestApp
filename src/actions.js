export const addDeck = name => ({type: 'ADD_DECK', data: name});
export const showAddDeck = () => ({type: 'SHOW_ADD_DECK'});
export const hideAddDeck = () => ({type: 'HIDE_ADD_DECK'});

export const addCard = card => ({type: 'ADD_CARD', data: card});
export const editCard = card => ({type: 'EDIT_CARD', data: card});
export const deleteCard = cardId => ({type: 'DELETE_CARD', data: cardId});

export const filterCard = query => ({type: 'FILTER_CARD', data: query});

export const setShowBack = back => ({type: 'SHOW_BACK', data: back});

export const receiveData = data => ({type: 'RECEIVE_DATA', data: data});

export const fetchData = () => {
  return dispatch => {
    fetch('/api/data')
      .then(res => res.json())
      .then(json => dispatch(receiveData(json)));
  };
};