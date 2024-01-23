import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from './userSlice';

const reducers = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
export type RootState = ReturnType<typeof reducers>;
