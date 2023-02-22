import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './states/user';
import uiSliceReducer from './states/ui'
import storage from 'redux-persist/lib/storage';
import usersSliceReducer from './states/users';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';

const persistConfig = {
  key:"root",
  version: 1,
  storage
}

const persistedReducer = persistCombineReducers(persistConfig, {
  user:userSliceReducer,
  ui:uiSliceReducer,
  users: usersSliceReducer
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;