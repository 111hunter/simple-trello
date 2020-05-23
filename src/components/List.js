import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from './Card';
import AddCard from './AddCard';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { styles, ListContainer, EditButton, CardListContainer, ArchiveButton } from '../styles/List.styles';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import ListForm from './ListForm';
import { editList, archiveList } from '../redux/actions';

const List = ({ id, title, cards = [], index, searchText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setTitle] = useState(title);
  const dispatch = useDispatch();

  const saveList = e => {
    e.preventDefault();
    if (listTitle.length > 0) {
      dispatch(editList(id, listTitle));
      setIsEditing(false);
    }
  };

  const handleInputChange = ev => {
    setTitle(ev.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.stopPropagation();
      e.preventDefault();
      saveList(e);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const archive = () => {
    dispatch(archiveList({ id, title }, cards));
    setIsEditing(false);
  };

  const getFilteredCards = (cards, searchText) => {
    if (searchText) {
      console.log(searchText);
      return cards.filter(card => card.text.toLowerCase().includes(searchText.toLowerCase()));
    }
    return cards;
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <ListContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {isEditing ? (
            <ListForm
              listTitle={listTitle}
              buttonText='Save'
              toggleForm={toggleEdit}
              handleInputChange={handleInputChange}
              handleKeyDown={handleKeyDown}
              onSubmit={saveList}
            />
          ) : (
              <div style={{ position: 'relative' }}>
                <h2 style={styles.title}>{title}</h2>
                <OverlayTrigger
                  placement='top'
                  overlay={<Tooltip>Edit List title</Tooltip>}
                >
                  <EditButton onClick={toggleEdit}>
                    <span>
                      &nbsp;
                    <i className='fas fa-pen'></i>
                    </span>
                  </EditButton>
                </OverlayTrigger>

                <OverlayTrigger
                  placement='top'
                  overlay={<Tooltip>Archive List</Tooltip>}
                >
                  <ArchiveButton onClick={archive}>
                    <span>
                      &nbsp;
                    <i className='fas fa-archive'></i>
                    </span>
                  </ArchiveButton>
                </OverlayTrigger>
              </div>
            )}
          <Droppable droppableId={String(id)} type="card">
            {(provided, snapshot) => (
              <CardListContainer ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
                {...provided.droppableProps}>
                {getFilteredCards(cards, searchText).map((card, index) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    text={card.text}
                    listId={id}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </CardListContainer>
            )}
          </Droppable>
          <AddCard listId={id} />
        </ListContainer>
      )}
    </Draggable>
  );
};

export default List;