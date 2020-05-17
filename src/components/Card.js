import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import CardForm from './CardForm';
import { editCard, archiveCard } from '../redux/actions';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { styles, CardContainer, EditButton, ArchiveButton } from '../styles/Card.styles';

const Card = ({ id, text, index, listId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);
  const dispatch = useDispatch();

  const saveCard = e => {
    e.preventDefault();
    if (cardText.length > 0) {
      dispatch(editCard(id, cardText, listId));
      setIsEditing(false);
    }
  };

  const handleInputChange = ev => {
    setText(ev.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Tab') {
      e.stopPropagation();
      e.preventDefault();
      saveCard(e);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const archive = () => {
    dispatch(archiveCard(id, text, listId));
    setIsEditing(false);
  };

  const renderCard = () => {
    return (
      <Draggable draggableId={id} index={index}>
        {(provided, snapshot) => (
          <CardContainer
            className='card'
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <OverlayTrigger
              placement='top'
              overlay={<Tooltip>Edit Card</Tooltip>}
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
              overlay={<Tooltip>Archive Card</Tooltip>}
            >
              <ArchiveButton onClick={archive}>
                <span>
                  &nbsp;
                  <i className='fas fa-archive'></i>
                </span>
              </ArchiveButton>
            </OverlayTrigger>

            <div className='card-body' style={styles.cardBody}>
              {text}
            </div>
          </CardContainer>
        )}
      </Draggable>
    );
  };
  const renderEditForm = () => {
    return (
      <div style={styles.container}>
        <CardForm
          text={cardText}
          toggleForm={toggleEdit}
          buttonText='Save'
          handleInputChange={handleInputChange}
          handleKeyDown={handleKeyDown}
          onSubmit={saveCard}
        />
      </div>
    );
  };
  return isEditing ? renderEditForm() : renderCard();
};

export default Card;