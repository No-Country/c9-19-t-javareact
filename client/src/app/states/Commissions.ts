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
    studentsStatus: string;
    error: string | undefined | null;
    studentsError: string | undefined | null;
  }
  
  const commissionsAdapter = createEntityAdapter<Commission>({
    selectId: (commission) => commission.commissionId || 0,
  });
  
  export const initialCommissionsState: EntityState<Commission> & State = commissionsAdapter.getInitialState({
    status: 'idle',
    studentsStatus: 'idle',
    error: null,
    studentsError: null,
  });

  export const fetchCommissions: any = createAsyncThunk('commissions', async () => {
    const apiPropertyes: apiProps = {
      path: 'commissions',
      method: 'get',
    };
    const response = await useApi(apiPropertyes);
    return response.data
  });

  
  export const fetchCommissionStudents: any = createAsyncThunk('admin/commission/id', async (id) => {
    const apiPropertyes: apiProps = {
      path: `admin/commission/${id}`,
      method: 'get',
    };
    const response = await useApi(apiPropertyes);
    return response.data;
  });

  
  export const updateTeacher: any = createAsyncThunk('commissions/teacher/update',
    async (body:any) => {
      const apiPropertyes: apiProps = {
        path: `commissions/teacher/update`,
        method: 'put',
        body: body,
      };
      const response = await useApi(apiPropertyes);
      return response.data;
    }
  );
  
  
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
        // .addCase(fetchCommissionStudents.pending, (state, action) => {
        //   state.studentsStatus = 'loading';
        // })
        // .addCase(fetchCommissionStudents.fulfilled, (state, action) => {
        //   state.studentsStatus = 'succeeded';
        //   const {idCommission, students} = action.payload;
        //   const updatedCommission = {idCommission: idCommission, students: students}
        //   console.log(updatedCommission);
        //   commissionsAdapter.getSelectors((state: RootState) => { })
        //   commissionsAdapter.upsertOne(state, updatedCommission);
        //   console.log(commissionsAdapter);
        // })
        .addCase(fetchCommissionStudents.rejected, (state, action) => {
          state.studentsStatus = 'failed';
          state.studentsError = action.error.message;
        })
        .addCase(updateTeacher.fulfilled, (state, action) => {
          if (!action.payload) {
            console.log(`Update could not complete`);
            return;
          }
          // const {commissionId, firstName, lastName, roleName} = action.payload;
          // const updatedCommission = {commissionId: commissionId, fullName: `${firstName} ${lastName}`, roleName: roleName}
          // commissionsAdapter.upsertOne(state.entities, updatedPerson);
        });
    },
  });
  
  export const {
    selectAll: selectAllCommissions,
  } = commissionsAdapter.getSelectors((state: RootState) => state.commissions);
  
  export const getCommissionsStatus = (state: RootState) => state.commissions.status;
  export const getCommissionsError = (state: RootState) => state.commissions.error;
  export const getStudentsCommissionStatus = (state: RootState) => state.commissions.studentsStatus;
  export const getStudentsCommissionError = (state: RootState) => state.commissions.studentsError;
  
  export const getAllCommissions = createSelector(
    [selectAllCommissions ],
    (data) => data
  );
 
  
  export default commissionsSlice.reducer;