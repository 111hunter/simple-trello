import { CONSTANTS } from '../actions';

const initialState = {
  lists: [],
  cards: []
};

const archiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ARCHIVE_CARD: {
      const { id, text } = action.payload;
      const card = { id, text };
      const newState = { ...state };
      newState.cards = [...newState.cards, card];
      console.log('Archive card', newState);
      return newState;
    }

    case CONSTANTS.ARCHIVE_LIST: {
      const { list, cards } = action.payload;
      const newState = { ...state };
      newState.cards = [...newState.cards, ...cards];
      newState.lists = [...newState.lists, list];
      console.log('Archive list', newState);
      return newState;
    }

    default:
      return state;
  }
};

export default archiveReducer;
