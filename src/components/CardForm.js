import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { styles, AddBtn } from '../styles/CardForm.styles';

const CardForm = ({
  text,
  toggleForm,
  handleInputChange,
  buttonText,
  handleKeyDown,
  onSubmit
}) => {
  return (
    <>
      <TextareaAutosize
        minRows={3}
        autoFocus
        placeholder='Enter card content...'
        onBlur={toggleForm}
        value={text}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        style={styles.textArea}
      />
      <div style={styles.actionContainer}>
        <AddBtn className='btn'
          disabled={text.length === 0}
          onMouseDown={onSubmit}>
          {buttonText}
        </AddBtn>
        <span onClick={toggleForm}>
          &nbsp;
          <i className='fas fa-times fa-lg' style={styles.icon}></i>
        </span>
      </div>
    </>
  );
}

export default CardForm;

