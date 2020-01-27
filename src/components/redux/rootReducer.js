import { combineReducers } from 'redux';
import Type from './types';
import uuid from 'uuid';

const records = (state = [], action) => {
  switch (action.type) {

    case Type.ADD_RECORD:
      const newState = [...state, { ...action.payload, id: uuid() }];
      localStorage.setItem('records', JSON.stringify(newState));
      return newState;
    
    case Type.DELETE_RECORD:
      const filteredState = state.filter(record => record.id !== action.payload);
      localStorage.setItem('records', JSON.stringify(filteredState));
      return filteredState;
    
    case Type.SORT_RECORDS:
      const { colName, sortType } = action.payload;
      const sortedState = sortType === 'z-a'
        ? state.sort((a, b) => a[colName] < b[colName] ? 1 : -1)
        : state.sort((a, b) => a[colName] > b[colName] ? 1 : -1)
      return sortedState;
    
    case Type.GET_RECORDS:
      const parsedState = JSON.parse(localStorage.getItem('records'));
      return parsedState;
    
    default: return state;
  }
}

const loader = (state = true, action) => {
  switch (action.type) {
    case Type.LOADER_ON:
      return true;
    case Type.LOADER_OFF:
      return false;
    default: return state;
  }
}

export default combineReducers({
  records,
  loader,
})