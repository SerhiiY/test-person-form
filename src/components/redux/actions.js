import Type from './types';

export const addRecord = notice => ({
  type: Type.ADD_RECORD,
  payload: notice,
});

export const deleteRecord = id => ({
  type: Type.DELETE_RECORD,
  payload: id,
});

export const loaderOn = () => ({
  type: Type.LOADER_ON,
});

export const loaderOff = () => ({
  type: Type.LOADER_OFF,
});


