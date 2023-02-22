import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { apiProps, useApi } from '../../hooks/useApi';
import { User } from '../../models';
import { RootState } from '../store';

export interface State {
  status: string;
  error: string | undefined | null;
}

const usersAdapter = createEntityAdapter<User>({
});

export const initialUsersState: EntityState<User> & State = usersAdapter.getInitialState({
  status: 'idle',
  error: null,
});

export const fetchUsers: any = createAsyncThunk('admin/person', async () => {
  const apiPropertyes: apiProps = {
    path: 'admin/person',
    method: 'get',
  };
  const response = await useApi(apiPropertyes);
  return response.data;
});

export const createUser: any = createAsyncThunk(
  'admin/person/register',
  async (user: User) => {
    const apiPropertyes: apiProps = {
      path: 'admin/person',
      method: 'post',
      body: user,
    };
    const response = await useApi(apiPropertyes);
    return response.data;
  }
);

export const updateUser: any = createAsyncThunk(
  'admin/person/update',
  async (user: User) => {
    const { id } = user;
    const apiPropertyes: apiProps = {
      path: `admin/person/${id}`,
      method: 'put',
      body: user,
    };
    const response = await useApi(apiPropertyes);
    return response.data;
  }
);

export const deleteUser: any = createAsyncThunk(
  'admin/person/id',
  async (userId: any) => {
    const { id } = userId;
    const apiPropertyes: apiProps = {
      path: `admin/person/${id}`,
      method: 'delete',
    };
    try {
      const response = await useApi(apiPropertyes);
      if (response?.status === 200) return id;
      return `${response?.status}: ${response?.message}`;
    } catch (err: any) {
      return err.message;
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: initialUsersState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, _action) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        usersAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        action.payload.id = nanoid();
        console.log(action.payload);
        usersAdapter.addOne(state, action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Delete could not complete');
          return;
        }
        const { id } = action.payload;
        usersAdapter.removeOne(state, id);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log(`Update could not complete`);
          console.log(action.payload);
          return;
        }
        usersAdapter.upsertOne(state, action.payload);
      });
  },
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUsersByIds,
} = usersAdapter.getSelectors((state: RootState) => state.users);

export const getUsersStatus = (state: RootState) => state.users.status;
export const getUsersError = (state: RootState) => state.users.error;

export const selectTutors = (state: RootState) => state.users;

export const selectStudents = (state: RootState) => state.users;

export const selectAllTeachers = createSelector(
  [selectAllUsers],
  (users) => users.filter((user) => user.id?.toString() === "1")
);

export const selectAllTutors = createSelector(
  [selectAllUsers],
  (users) => users.filter((user) => user.id?.toString() === "2")
);

export const selectAllStudents = createSelector(
  [selectAllUsers],
  (users) => users.filter((user) => user.id?.toString() === "3")
);

export default usersSlice.reducer;
