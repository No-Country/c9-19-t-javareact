import { configureStore } from '@reduxjs/toolkit';
import { User, User as UserInfo } from '../models';
import { Ui } from '../models/Ui';
import userSliceReducer from './states/user';
import uiSliceReducer from './states/ui';
import usersSliceReducer from './states/users';
export interface GoodLearner {
  users: User[];
  user: UserInfo;
  ui: Ui;
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
