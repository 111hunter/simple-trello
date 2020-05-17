import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addCard } from '../redux/actions';
import CardForm from './CardForm';

const AddCard = ({ listId }) => {
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const createCard = () => {
    if (text.length > 0) {
      dispatch(addCard(listId, text));
      setText('');
    }
  };

  const handleInputChange = ev => {
    setText(ev.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Tab') {
      e.stopPropagation();
      e.preventDefault();
      createCard();
    }
  };

  const toggleForm = () => {
    setFormOpen(prev => !prev);
    setText('');
  };
  const renderForm = () => (
    <CardForm
      text={text}
      buttonText='Add Card'
      toggleForm={toggleForm}
      handleInputChange={handleInputChange}
      handleKeyDown={handleKeyDown}
      onSubmit={createCard}
    />
  );

  const renderButton = () => (
    <AddAnotherCard
      onClick={() => {
        setFormOpen(prev => !prev);
      }}
    >
      <i className='fas fa-plus'> </i> &nbsp; Add another card
    </AddAnotherCard>
  );
  return (
    <AddCardContainer>
      {formOpen ? renderForm() : renderButton()}
    </AddCardContainer>
  );
}

export default AddCard;

const AddAnotherCard = styled.p`
  text-align: center;
  margin: 0;
  padding: 5px 0;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    background: rgba(9,30,66,0.08);
  }
`;

const AddCardContainer = styled.div`
    margin: 0 0.5rem 0.5rem 0.5rem;
    color: #5e6c84;
`;
