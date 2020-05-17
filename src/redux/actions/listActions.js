import { CONSTANTS } from '.';
import { uuid } from 'uuidv4';

export const addList = title => {
  const id = uuid();
  return {
    type: CONSTANTS.ADD_LIST,
    payload: { id, title }
  };
};

export const editList = (id, title) => {
  return {
    type: CONSTANTS.EDIT_LIST,
    payload: { title, id }
  };
};

export const archiveList = (list, cards) => {
  return {
    type: CONSTANTS.ARCHIVE_LIST,
    payload: { list, cards }
  };
};

export const addCard = (listID, text) => {
  const id = uuid();
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID, id }
  };
};

export const editCard = (id, cardText, listID) => {
  return {
    type: CONSTANTS.EDIT_CARD,
    payload: { id, cardText, listID }
  };
};

export const archiveCard = (id, text, listID) => {
  return {
    type: CONSTANTS.ARCHIVE_CARD,
    payload: { id, text, listID }
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: CONSTANTS.DRAGGED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type
    }
  };
};
