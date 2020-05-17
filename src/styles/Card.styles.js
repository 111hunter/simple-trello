import styled from 'styled-components';

export const CardContainer = styled.div`
  margin: 0 0.5rem 0.5rem 0.5rem;
  border: none;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 0px;
  background: ${props => (props.isDragging ? 'lightgreen' : '#fff')};
  &:hover {
    background: #f5f5f5;
  }
`;

export const EditButton = styled.div`
  position: absolute;
  display: none;
  right: 30px;
  top: 0px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const ArchiveButton = styled.div`
  position: absolute;
  display: none;
  right: 10px;
  top: 0px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const styles = {
  container: {
    margin: '0.5rem',
  },
  card: {
    margin: '20px',
    borderRadius: '3px',
    height: 'auto',
    wordWrap: 'break-word'
  },
  cardBody: {
    padding: '9px 7px',
    color: '#172b4d',
  }
};
