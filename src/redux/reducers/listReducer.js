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
      const newState = state.map((list) => {
        if (list.id !== listID) {
          return list;
        }
        return {
          ...list,
          cards: list.cards.filter(card => card.id !== id),
        }
      })
      return newState;
    }

    case CONSTANTS.DRAGGED: {  // 当完成拖放动作时
      const {
        droppableIdStart, //开始时所在的 container id
        droppableIdEnd,   //结束时所在的 container id
        droppableIndexStart, //开始所在 container 里的索引
        droppableIndexEnd,  //结束时所在的 container 里的索引
        type
      } = action.payload;

      const newState = [...state];                  //深拷贝不改变原列表
      if (type === 'list') {
        const moveList = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...moveList);
        console.log('Drag list', newState);
        return newState;
      }

      const sourceListIndex = newState.findIndex(list => droppableIdStart === list.id);
      const sourceList = newState[sourceListIndex];
      const sourceCards = [...sourceList.cards];    //深拷贝不改变原数组
      const moveCard = sourceCards.splice(droppableIndexStart, 1);

      if (droppableIdStart !== droppableIdEnd) {    //不同列之间移动卡片
        const destinationListIndex = newState.findIndex(list => droppableIdEnd === list.id);
        const destinationList = newState[destinationListIndex];
        const destinationCards = [...destinationList.cards];
        destinationCards.splice(droppableIndexEnd, 0, ...moveCard);
        newState[destinationListIndex] = {
          ...newState[destinationListIndex],
          cards: destinationCards
        };
      } else {                                      //同列中改变卡片次序
        sourceCards.splice(droppableIndexEnd, 0, ...moveCard);
      }
      newState[sourceListIndex] = {
        ...newState[sourceListIndex],
        cards: sourceCards
      };
      console.log('Drag card', newState);
      return newState;
    }

    default:
      return state;
  }
};

export default listReducer;