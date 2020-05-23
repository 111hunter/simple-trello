import { CONSTANTS } from '../actions';

const stateEnhancer = reducer => {
  const initialState = {
    previousStates: [],
    currentState: reducer(undefined, {}), // currentState 取 reducer 的返回值
    futureStates: []
  };

  // 调用 reducer 时就会调用 stateEnhancer, 并返回封装后的 reducer
  return (state = initialState, action) => {
    // console.log(state.currentState);
    const { previousStates, currentState, futureStates } = state;
    switch (action.type) {
      case CONSTANTS.UNDO_ACTION:
        const previous = previousStates[previousStates.length - 1];
        const newPreviousStates = previousStates.slice(0, previousStates.length - 1);
        console.log('undo');
        return {
          previousStates: newPreviousStates,
          currentState: previous,
          futureStates: [currentState, ...futureStates]
        };
      case CONSTANTS.REDO_ACTION:
        const next = futureStates[0];
        const newFutureStates = futureStates.slice(1);
        console.log('redo');
        return {
          previousStates: [...previousStates, currentState],
          currentState: next,
          futureStates: newFutureStates
        };
      default:
        const newCurrentState = reducer(currentState, action);
        if (currentState === newCurrentState) {   //初始化列表
          console.log('init');
          return state;
        }
        if (currentState) {                      // 列表变化时
          console.log('list change');
          return {
            previousStates: [...(previousStates || []), currentState],
            currentState: newCurrentState,
            futureStates: []
          };
        }
        return {                   // 防止 currentState 为 null
          previousStates: [...(previousStates || [])],
          currentState: newCurrentState,
          futureStates: []
        };
    }
  };
};

export default stateEnhancer;
