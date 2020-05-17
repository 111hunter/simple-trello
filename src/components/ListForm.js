import React from 'react';
import { styles, FormContainer, FormInput, AddBtn } from '../styles/ListForm.styles';

const ListForm = ({
  listTitle,
  toggleForm,
  handleInputChange,
  buttonText,
  handleKeyDown,
  onSubmit
}) => {
  return (
    <FormContainer>
      <FormInput
        autoFocus
        placeholder='Enter list title...'
        onBlur={toggleForm}
        value={listTitle}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
      />
      <div style={styles.actionContainer}>
        <AddBtn className='btn'
          disabled={listTitle.length === 0}
          onMouseDown={onSubmit}>
          {buttonText}
        </AddBtn>
        <span onClick={toggleForm}>
          &nbsp;
          <i className='fas fa-times fa-lg' style={styles.icon}></i>
        </span>
      </div>
    </FormContainer>
  );
}

export default ListForm;