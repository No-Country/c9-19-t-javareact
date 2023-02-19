/* import { configureStore } from '@reduxjs/toolkit';
import { User } from '../models';
import { Ui } from '../models/Ui';
import userSliceReducer, { userState } from './states/user';
import uiSliceReducer from './states/ui';
import usersSliceReducer from './states/users';

export interface GoodLearner {
  users: User[];
  user: userState;
  ui: Ui
}

export const store = configureStore<GoodLearner>({
  reducer: {
    user: userSliceReducer,
    ui: uiSliceReducer,
    users: usersSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
 */

import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import {User as UserInfo} from '../models';
import { Ui } from '../models/Ui';
import userSliceReducer, { userState } from './states/user';
import uiSliceReducer from './states/ui'
import storage from 'redux-persist/lib/storage';
import usersSliceReducer from './states/users';
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
  ui:uiSliceReducer,
  users: usersSliceReducer
})
const persistedReducer = persistReducer(persistConfig,reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;