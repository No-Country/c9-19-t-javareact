import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { apiProps, useApi } from '../../hooks/useApi';
import { User } from '../../models';
import { useAppSelector } from '../hooks';
import { RootState } from '../store';
import { selectToken } from './user';


type State = {
  teachers: User[];
  status: string;
  error: string | undefined | null;
};

const initialState: State = {
  teachers: [],
  status: 'idle',
  error: null,
};

export const fetchTeachers:any = createAsyncThunk('admin/teacher', async () => {
  const apiPropertyes: apiProps = {
    path:'admin/teacher',
    method:'get',
  };
  const response = await useApi(apiPropertyes)
  return response
})

const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    createUser: (state, action) => {
      return action.payload;
    },
  },
  extraReducers(builder) {
    builder
    .addCase(fetchTeachers.pending, (state, _action) => {
      state.status = 'loading';
    })
    .addCase(fetchTeachers.fulfilled, (state, action) => {
      state.status = 'succeeded';
      console.log(action)
      state.teachers = state.teachers.concat(action.payload.data);
    })
    .addCase(fetchTeachers.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const selectAllTeachers = (state: RootState) => state.teachers.teachers;
export const getTeachersStatus = (state: RootState) => state.teachers.status;
export const getTeachersErrors = (state: RootState) => state.teachers.error;

export const { createUser} = teachersSlice.actions;

export default teachersSlice.reducer;
