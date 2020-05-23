import React, { useState } from 'react';
import Board from './Board';
import { useDispatch } from 'react-redux';
import { undoAction, redoAction } from '../redux/actions'
import { styles, SearchInput, DoBtn } from '../styles/App.styles';
import { useSelector } from 'react-redux';

const App = () => {

  const previousStates = useSelector(state => state.board.previousStates);
  const futureStates = useSelector(state => state.board.futureStates);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const undo = () => {
    dispatch(undoAction());
  };

  const redo = () => {
    dispatch(redoAction());
  };

  const handleInputChange = (ev) => {
    setSearchText(ev.target.value);
  };

  return (
    <div>
      <div style={styles.header}>
        <div style={styles.search}>
          <SearchInput
            value={searchText}
            onChange={handleInputChange}>
          </SearchInput>
          <span style={styles.searchIcon}>
            <i className="fas fa-search"></i>
          </span>
        </div>
        <div style={styles.title}>
          Simple Trello
        </div>
        <div style={styles.btnContainer}>
          <DoBtn onClick={undo} disabled={previousStates.length === 0} className='btn'>
            <i className="fas fa-undo"></i>
          </DoBtn>
          &nbsp;
          <DoBtn onClick={redo} disabled={futureStates.length === 0} className='btn' >
            <i className="fas fa-redo"></i>
          </DoBtn>
        </div>
      </div>
      <Board searchText={searchText} />
    </div>
  );
}

export default App;