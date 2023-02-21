import { createAsyncThunk, createEntityAdapter, createSlice, EntityState } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { apiProps, useApi } from '../../hooks/useApi';
import { User } from '../../models';
import { RootState } from '../store';

export interface State {
  status: string;
  error: string | undefined | null;
};

const usersAdapter = createEntityAdapter<User>()

const initialState: EntityState<User> & State = usersAdapter.getInitialState({
  status: 'idle',
  error: null,
});


export const fetchUsers: any = createAsyncThunk('admin/teacher', async () => {
  const apiPropertyes: apiProps = {
    path:'admin/teacher',
    method:'get',
  }
  const response = await useApi(apiPropertyes)
  return response.data
})

export const deleteUser: any = createAsyncThunk(
  'admin/person/id',
  async (userId: any) => {
    const {id} = userId;
    const apiPropertyes: apiProps = {
      path:`admin/person/${id}`,
      method:'delete',
    }
    try {
      const response = await useApi(apiPropertyes);
      if (response?.status === 200) return userId;
      return `${response?.status}: ${response?.message}`;
    } catch (err: any) {
      return err.message;
    }
  })


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state,action) => {
      state.status = "loading"
    })
    .addCase(fetchUsers.fulfilled, (state,action) => {
      state.status = 'succeeded';
      usersAdapter.upsertMany(state, action.payload)
    })
    .addCase(fetchUsers.rejected, (state,action) => {
      state.status = "failed"
      state.error = action.error.message
    })
    .addCase(deleteUser.fulfilled, (state, action) => {
      console.log(action.payload);
      if (!action.payload?.id) {
        console.log('Delete could not complete');
        return;
      }
      const { id } = action.payload;
      usersAdapter.removeOne(state, id);
    });
  }
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUsersByIds,
} = usersAdapter.getSelectors((state:RootState) => state.users)

export const getUsersStatus = (state:RootState) => state.users.status;
export const getUsersError = (state:RootState) => state.users.error;

export const selectTutors = (state: RootState) =>
  state.users;

export const selectStudents = (state: RootState) =>
  state.users;

export const { createUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
