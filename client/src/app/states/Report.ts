import {
    createAsyncThunk,
    createEntityAdapter,
    createSelector,
    createSlice,
    EntityState,
    PayloadAction,
  } from '@reduxjs/toolkit';
  import { apiProps, useApi } from '../../hooks/useApi';
import { Qualification } from '../../models/Qualification';
  import { Subject } from '../../models/Subject';
  import { RootState } from '../store';
  
  export interface State {
    status: string;
    error: string | undefined | null;
  }
  
  const reportAdapter = createEntityAdapter<Subject>({
    selectId: (subject) => subject.subjectId || 0,

  });

  
  export const initialReportState: EntityState<Subject> & State = reportAdapter.getInitialState({
    status: 'idle',
    error: null,
  });
  
  export const fetchReport: any = createAsyncThunk('person/report', async (year: number) => {
    const apiPropertyes: apiProps = {
      path: 'person/report',
      method: 'post',
      body: { year: year },
    };
    const response = await useApi(apiPropertyes);
    return formatData(response.data.qualifications);
  });
  
  const formatData = (data: any):Array<Subject> => {
    let subjects = new Array<Subject>()
    data.map( (elem: any) => {
      let index = subjects.findIndex(s => s.subject_name === elem.subject);
      if (index === -1) {
        let ns = new Subject();
        ns.subjectId = new Date().getTime();
        ns.subject_name = elem.subject;
        ns.qualifications = new Array();
        let q = new Qualification();
        q.qualificationId = new Date().getTime();
        q.numberQualification = elem.numberQualification;
        ns.qualifications.push(q);
        subjects.push(ns);
      } else {
        let q = new Qualification();
        q.qualificationId = new Date().getTime();
        q.numberQualification = elem.numberQualification;
        subjects[index].qualifications!.push(q)
      }
    });
    return subjects;
  } 

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