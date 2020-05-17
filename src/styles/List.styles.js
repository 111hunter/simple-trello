import styled from 'styled-components';

export const ListContainer = styled.div`
  background-color: #ebecf0;
  margin-left: 0.6rem;
  border-radius: 3px;
  width: 272px;
`;

export const EditButton = styled.div`
  position: absolute;
  right: 30px;
  top: 9px;
  opacity: 0.5;
  ${ListContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const CardListContainer = styled.div`
background: ${props => (props.isDraggingOver ? '#dfe6ff' : '#ebecf0')};
`;

export const ArchiveButton = styled.div`
  position: absolute;
  right: 10px;
  top: 9px;
  opacity: 0.5;
  ${ListContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const styles = {
  actionContainer: {
    position: 'relative'
  },
  title: {
    padding: '7px 38px 7px 9px',
    margin: '0 0 3px 0',
    fontSize: '1.2em',
    color: '#172b4d',
    fontWeight: 600,
  }
};
