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
  

  const teacherCommissionsAdapter = createEntityAdapter<Commission>({
    selectId: (commission) => commission.commissionId || 0,

  });

  
  export const initialTeacherCommissionsState: EntityState<Commission> & State = teacherCommissionsAdapter.getInitialState({
    status: 'idle',
    error: null,
  });
  
  export const fetchTeacherCommissions: any = createAsyncThunk('teacher/commissions/id', async (id) => {
    const apiPropertyes: apiProps = {
      path: `teacher/commissions/${id}`,
      method: 'get',
    };
    const response = await useApi(apiPropertyes);
    return (response.data);
  });



  const teacherCommissionsSlice = createSlice({
    name: 'teacherCommissions',
    initialState: initialTeacherCommissionsState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(fetchTeacherCommissions.pending, (state, _action) => {
          state.status = 'loading';
        })
        .addCase(fetchTeacherCommissions.fulfilled, (state, action) => {
          state.status = 'succeeded';
          teacherCommissionsAdapter.upsertMany(state, action.payload);
        })
        .addCase(fetchTeacherCommissions.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
    },
  });
  
  export const {
    selectAll: selectTeacherCommissions,
  } = teacherCommissionsAdapter.getSelectors((state: RootState) => state.teacherCommissions);
  
  export const getTeacherCommissionsStatus = (state: RootState) => state.teacherCommissions.status;
  export const getTeacherCommissionsError = (state: RootState) => state.teacherCommissions.error;
  
  
  export const getTeacherCommissions = createSelector(
    [selectTeacherCommissions ],
    (data) => data
  );
 
  
  export default teacherCommissionsSlice.reducer;