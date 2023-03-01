import {
    createAsyncThunk,
    createEntityAdapter,
    createSelector,
    createSlice,
    EntityState,
    PayloadAction,
  } from '@reduxjs/toolkit';
  import { apiProps, useApi } from '../../hooks/useApi';
  import { Student } from '../../models/Student';
  import { RootState } from '../store';


  export interface State {
    status: string;
    error: string | undefined | null;
  }
  

  const studentsAdapter = createEntityAdapter<Student>({
    selectId: (student) => student.idPerson || 0,

  });

  
  export const initialStudentsState: EntityState<Student> & State = studentsAdapter.getInitialState({
    status: 'idle',
    error: null,
  });
  
  export const fetchStudents: any = createAsyncThunk('tutor/students/id', async (id) => {
    const apiPropertyes: apiProps = {
      path: `tutor/students/${id}`,
      method: 'get',
    };
    const response = await useApi(apiPropertyes);
    return (response.data);
  });



  const studentsSlice = createSlice({
    name: 'students',
    initialState: initialStudentsState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(fetchStudents.pending, (state, _action) => {
          state.status = 'loading';
        })
        .addCase(fetchStudents.fulfilled, (state, action) => {
          state.status = 'succeeded';
          studentsAdapter.upsertMany(state, action.payload);
        })
        .addCase(fetchStudents.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
    },
  });
  
  export const {
    selectAll: selectStudents,
  } = studentsAdapter.getSelectors((state: RootState) => state.students);
  
  export const getStudentsStatus = (state: RootState) => state.students.status;
  export const getStudentsError = (state: RootState) => state.students.error;
  
  
  export const getStudents = createSelector(
    [selectStudents ],
    (data) => data
  );
 
  
  export default studentsSlice.reducer;