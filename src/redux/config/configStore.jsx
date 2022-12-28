import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import room from '../modules/roomSlice';
import modal from '../modules/modalSlice';
import login from '../modules/loginSlice';

const rootReducer = combineReducers({
  room,
  login,
  modal,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
