import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { User } from '../../models';
import { RootState } from '../store';

const initialState: User[] = [
  { id: 1, rol_id: '1', name: 'Juan', last_name: 'Guzmán', dni: 12341456 },
  { id: 2, rol_id: '2', name: 'Marcos', last_name: 'Díaz', dni: 12341456 },
  {
    id: 3,
    rol_id: '2',
    name: 'Luciana',
    last_name: 'Acosta',
    dni: 12341456,
  },
  {
    id: 4,
    rol_id: '2',
    name: 'Abigail',
    last_name: 'Ávila',
    dni: 12341456,
  },
  { id: 5, rol_id: '3', name: 'Romina', last_name: 'Pérez', dni: 12341456 },
  { id: 6, rol_id: '3', name: 'Esteban', last_name: 'Díaz', dni: 12341456 },
  { id: 7, rol_id: '3', name: 'Mariel', last_name: 'Caro', dni: 12341456 },
  {
    id: 8,
    rol_id: '3',
    name: 'Virginia',
    last_name: 'Sanchez',
    dni: 12341456,
  },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createUser: (state, action) => {
      return action.payload;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const { id } = action.payload;
      if (!id) {
        action.payload.id = nanoid();
        return [...state, action.payload];
      }
      state = state.filter((user: User) => user.id !== id);
      return [...state, action.payload];
    },
    deleteUser: (state, action: PayloadAction<string | number>) => {
      const id = action.payload;
      return state.filter((user: User) => user.id !== id);
    },
  },
});

export const selectAllUsers = (state: RootState) => state.users;

export const selectTeachers = (state: RootState) =>
  state.users.filter((user) => user.rol_id === '1');

export const selectTutors = (state: RootState) =>
  state.users.filter((user) => user.rol_id === '2');

export const selectStudents = (state: RootState) =>
  state.users.filter((user) => user.rol_id === '3');

export const { createUser, updateUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
