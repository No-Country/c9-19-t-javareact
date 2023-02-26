import {
    createAsyncThunk,
    createEntityAdapter,
    createSelector,
    createSlice,
    EntityState,
    PayloadAction,
  } from '@reduxjs/toolkit';
  import { apiProps, useApi } from '../../hooks/useApi';
  import { Subject } from '../../models/Subject';
  import { RootState } from '../store';


  export interface State {
    status: string;
    error: string | undefined | null;
  }
  

  const reportAdapter = createEntityAdapter<Subject>({
    selectId: (subject) => subject.subjectName || 0,

  });

  
  export const initialReportState: EntityState<Subject> & State = reportAdapter.getInitialState({
    status: 'idle',
    error: null,
  });
  
  export const fetchReport: any = createAsyncThunk('person/report', async (body) => {
    
    const apiPropertyes: apiProps = {
      path: 'person/report',
      method: 'post',
      body: body
    };
    const response = await useApi(apiPropertyes);
    return (response.data.subjectQualificationsList);
  });
  

  const reportSlice = createSlice({
    name: 'report',
    initialState: initialReportState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(fetchReport.pending, (state, _action) => {
          state.status = 'loading';
        })
        .addCase(fetchReport.fulfilled, (state, action) => {
          state.status = 'succeeded';
          reportAdapter.upsertMany(state, action.payload);
        })
        .addCase(fetchReport.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
    },
  });
  
  export const {
    selectAll: selectReport,
  } = reportAdapter.getSelectors((state: RootState) => state.report);
  
  export const getReportStatus = (state: RootState) => state.report.status;
  export const getReportError = (state: RootState) => state.report.error;
  
  
  export const getReport = createSelector(
    [selectReport ],
    (data) => data
  );
 
  
  export default reportSlice.reducer;