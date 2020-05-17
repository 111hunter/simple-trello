import React from 'react';
import Board from './Board';
// import styled from 'styled-components';
import { useSelector } from 'react-redux';

const App = () => {

  const archived = useSelector(state => state.archived);

  return (
    <div>
      <div style={styles.header}>
        Simple Trello
      </div>
      <p style={styles.archived}>
        Archived Lists: {archived.lists.length} &nbsp;
        Archived Cards: {archived.cards.length}
      </p>
      <Board />
    </div>
  );
}

export default App;

export const styles = {
  header: {
    height: '40px',
    width: '100%',
    color: 'white',
    fontSize: '25px',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.15)'
  },
  archived: {
    margin: '0.5rem 0 0 0',
    color: 'white',
    textAlign: 'center'
  }
};