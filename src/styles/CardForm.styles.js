import styled from 'styled-components';

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
  icon: {
    color: '#6b778c',
    fontSize: '1.5em',
    cursor: 'pointer'
  },
  textArea: {
    resize: 'none',
    width: '100%',
    padding: '9px 7px',
    border: 'none',
    outline: 'none',
    borderRadius: '3px',
    boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 0px',
  },
  actionContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '0.5em'
  },
};