import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../redux/actions';
import styled from 'styled-components';
import ListForm from './ListForm';

const AddList = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [listTitle, setListTitle] = useState('');
  const dispatch = useDispatch();

  const createList = () => {
    if (listTitle.length > 0) {
      dispatch(addList(listTitle));
      setListTitle('');
    }
  };

  const handleInputChange = ev => {
    setListTitle(ev.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.stopPropagation();
      e.preventDefault();
      createList();
    }
  };

  const toggleForm = () => {
    setFormOpen(prev => !prev);
    setListTitle('');
  };

  const renderForm = () => (
    <ListForm
      listTitle={listTitle}
      buttonText='Add List'
      toggleForm={toggleForm}
      handleInputChange={handleInputChange}
      handleKeyDown={handleKeyDown}
      onSubmit={createList}
    />
  );

  const renderButton = () => (
    <AddAnotherList
      onClick={() => {
        setFormOpen(prev => !prev);
      }}
    >
      <i className='fas fa-plus'> </i> &nbsp; Add another list
    </AddAnotherList>
  );
  return (
    <AddListContainer>
      {formOpen ? renderForm() : renderButton()}
    </AddListContainer>
  );
};

export default AddList;

const AddListContainer = styled.div`
  width: 272px;
  margin-left: 0.6rem;
  color: #fff;
`;

const AddAnotherList = styled.p`
  background-color: rgba(255,255,255,0.24);
  padding: 10px;
  font-size: 1.1em;
  color: white;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    background: rgba(255,255,255,0.32);
  }
`;
