import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import {User as UserInfo} from '../models';
import { Ui } from '../models/Ui';
import userSliceReducer, { userState } from './states/user';
import uiSliceReducer from './states/ui'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

export interface GoodLearner {
  user: userState;
  ui: Ui
}

const persistConfig = {
  key:"root",
  storage
}
const reducer = combineReducers({
  user:userSliceReducer,
  ui:uiSliceReducer
})
const persistedReducer = persistReducer(persistConfig,reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
