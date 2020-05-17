import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #ebecf0;
  padding: 0.5em 0.4em;
  border-radius: 3px;
`;

export const FormInput = styled.input`
  padding: 9px 7px;
  resize: none;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 3px;
  box-shadow: inset 0 0 0 2px #0079bf;
`;

export const AddBtn = styled.button`
  color: white;
  background-color: #5aac44;
  font-weight: bold;
  margin-right: 1rem;
  &:hover {
          color: white;
  }
`;

export const styles = {
  actionContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '0.5em'
  },
  icon: {
    color: '#42526e',
    fontSize: '1.5em',
    cursor: 'pointer'
  }
};

