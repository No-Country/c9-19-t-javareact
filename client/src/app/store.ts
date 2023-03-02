import { configureStore } from '@reduxjs/toolkit';
import personsliceReducer from './states/Persons';
import commissionsSlice from './states/Commissions';
import reportSlice from './states/Report';
import studentsSlice from './states/Students';
import teacherCommissionsSlice from './states/TeacherCommissions';
import userSliceReducer from './states/user';
import selectedPersonSliceReducer from './states/SelectedPerson';
import uiSliceReducer from './states/ui'
import relationsSlice from './states/Relation'

import storage from 'redux-persist/lib/storage';
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
  storage,
  blacklist:[ 'persons', 'selectedPerson', 'ui', 'commissions', 'report', 'students', 'teacherCommissions']
}

const persistedReducer = persistCombineReducers(persistConfig, {
  user:userSliceReducer,
  ui:uiSliceReducer,
  persons: personsliceReducer,
  report: reportSlice,
  students: studentsSlice,
  teacherCommissions: teacherCommissionsSlice,
  commissions: commissionsSlice,
  relation: relationsSlice,
  selectedPerson: selectedPersonSliceReducer
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