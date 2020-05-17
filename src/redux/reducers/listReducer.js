import { CONSTANTS } from '../actions';
import { initialState } from './morkData'

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST: {
      const { id, title } = action.payload;
      const newList = { id, title, cards: [] };
      const newState = [...state, newList];
      console.log('Add list', newState);
      return newState;
    }

    case CONSTANTS.EDIT_LIST: {
      const { title, id } = action.payload;
      const newState = state.map(list => {
        if (list.id !== id) {
          return list;
        }
        return { ...list, title };
      });
      console.log('Edit list', newState);
      return newState;
    }

    case CONSTANTS.ARCHIVE_LIST: {
      const { list: archivedList } = action.payload;
      const newState = state.filter(list => list.id !== archivedList.id);
      return newState;
    }

    case CONSTANTS.ADD_CARD: {
      const { text, listID, id } = action.payload;
      const newCard = { id, text };
      const newState = state.map(list => {
        if (list.id !== listID) {
          return list;
        }
        return { ...list, cards: [...list.cards, newCard] };
      });
      console.log('Add card', newState);
      return newState;
    }

    case CONSTANTS.EDIT_CARD: {
      const { cardText, listID, id } = action.payload;
      const newState = state.map((list) => {
        if (list.id !== listID) {
          return list;
        }
        return {
          ...list,
          cards: list.cards.map((card) => {
            if (card.id !== id) {
              return card;
            }
            return { ...card, text: cardText };
          })
        };
      })
      console.log('Edit card', newState);
      return newState;
    }

    case CONSTANTS.ARCHIVE_CARD: {
      const { id, listID } = action.payload;
      const newState = [...state];
      const list = newState.find(list => list.id === listID);
      list.cards = list.cards.filter(card => card.id !== id);
      return newState;
    }

    case CONSTANTS.DRAGGED: {
      const {
        droppableIdStart, //开始时所在的 container id
        droppableIdEnd,   //结束时所在的 container id
        droppableIndexStart, //开始所在 container 里的索引
        droppableIndexEnd,  //结束时所在的 container 里的索引
        type
      } = action.payload;

      const newState = [...state];
      if (type === 'list') {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        console.log('Drag list', newState);
        return newState;
      }
      //same container
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      } else {
        const startList = state.find(list => droppableIdStart === list.id);
        const endList = state.find(list => droppableIdEnd === list.id);

        const card = startList.cards.splice(droppableIndexStart, 1);
        endList.cards.splice(droppableIndexEnd, 0, ...card);
      }
      console.log('Drag card', newState);
      return newState;
    }

    default:
      return state;
  }
};

export default listReducer;