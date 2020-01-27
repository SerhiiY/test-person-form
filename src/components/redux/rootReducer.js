import { combineReducers } from 'redux';
import Type from './types';
import uuid from 'uuid';

const records = (state = [], action) => {
  switch (action.type) {
    case Type.ADD_RECORD:
      return [...state, {...action.payload, id: uuid()}];
    case Type.DELETE_RECORD:
      return state.filter(record => record.id !== action.payload);
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