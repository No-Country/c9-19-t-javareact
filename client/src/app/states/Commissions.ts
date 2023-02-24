import {
    createAsyncThunk,
    createEntityAdapter,
    createSelector,
    createSlice,
    EntityState,
    PayloadAction,
  } from '@reduxjs/toolkit';
  import { apiProps, useApi } from '../../hooks/useApi';
  import { Commission } from '../../models/Commission';
  import { RootState } from '../store';
  
  export interface State {
    status: string;
    error: string | undefined | null;
  }
  
  const commissionsAdapter = createEntityAdapter<Commission>({
    selectId: (commission) => commission.commissionId || 0,
  });
  
  export const initialCommissionsState: EntityState<Commission> & State = commissionsAdapter.getInitialState({
    status: 'idle',
    error: null,
  });
  
  export const fetchCommissions: any = createAsyncThunk('commissions', async () => {
    const apiPropertyes: apiProps = {
      path: 'commissions',
      method: 'get',
    };
    const response = await useApi(apiPropertyes);
    console.log(response.data);
    return response.data;
  });
  
  
  const commissionsSlice = createSlice({
    name: 'commissions',
    initialState: initialCommissionsState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(fetchCommissions.pending, (state, _action) => {
          state.status = 'loading';
        })
        .addCase(fetchCommissions.fulfilled, (state, action) => {
          state.status = 'succeeded';
          commissionsAdapter.upsertMany(state, action.payload);
        })
        .addCase(fetchCommissions.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
    },
  });
  
  export const {
    selectAll: selectAllCommissions,
  } = commissionsAdapter.getSelectors((state: RootState) => state.commissions);
  
  export const getCommissionsStatus = (state: RootState) => state.commissions.status;
  export const getCommissionsError = (state: RootState) => state.commissions.error;
  
  
  export const getAllCommissions = createSelector(
    [selectAllCommissions ],
    (data) => data
  );
 
  
  export default commissionsSlice.reducer;