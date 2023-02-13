import { configureStore } from '@reduxjs/toolkit';
import {User as UserInfo} from '../models';
import { Ui } from '../models/Ui';
import userSliceReducer from './states/user';
import uiSliceReducer from './states/ui'
export interface GoodLearner {
  user: UserInfo;
  ui: Ui
}

export const store = configureStore<GoodLearner>({
  reducer: {
    user:userSliceReducer,
    ui:uiSliceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
