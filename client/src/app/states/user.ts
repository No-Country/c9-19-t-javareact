import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User as UserInfo } from '../../models/User';
import { clearLocalStorage, persistLocalStorage } from '../../helpers';


export interface userState{
  id:number,
  nombreUsuario: string | undefined,
  rol?: "ADMINISTRATOR" | "TEACHER" | "STUDENT" | "TUTOR" | undefined,
  token?:string
}

export const EmptyUserState: userState = {
  id:0,
  nombreUsuario: undefined,
  rol:undefined,
  token:undefined
};
export interface User{
  nombreUsuario?:string,
  clave?:string
}
export const UserKey = 'user';
const initialState = EmptyUserState
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action:PayloadAction<userState>) => {
      return action.payload;
    },
    resetUser: () => {
      return initialState;
    }
  }
});

export const { createUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
