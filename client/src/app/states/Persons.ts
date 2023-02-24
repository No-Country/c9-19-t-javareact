import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { apiProps, useApi } from '../../hooks/useApi';
import { Person } from '../../models/Person';
import { RootState } from '../store';

export interface State {
  status: string;
  error: string | undefined | null;
}

const personsAdapter = createEntityAdapter<Person>({
});

export const initialPersonsState: EntityState<Person> & State = personsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

export const fetchPersons: any = createAsyncThunk('admin/persons', async () => {
  const apiPropertyes: apiProps = {
    path: 'admin/person',
    method: 'get',
  };
  const response = await useApi(apiPropertyes);
  return response.data;
});
export const fetchTutor: any = createAsyncThunk('admin/tutor', async () => {
  const apiPropertyes: apiProps = {
    path: 'admin/tutor',
    method: 'get',
  };
  const response = await useApi(apiPropertyes);
  return response.data;
});
export const fetchTeachers: any = createAsyncThunk('admin/teacher', async () => {
  const apiPropertyes: apiProps = {
    path: 'admin/teacher',
    method: 'get',
  };
  const response = await useApi(apiPropertyes);
  
  return response.data;
});
export const fetchStundents: any = createAsyncThunk('admin/student', async () => {
  const apiPropertyes: apiProps = {
    path: 'admin/student',
    method: 'get',
  };
  const response = await useApi(apiPropertyes);
  return response.data;
});

export const fetchPersonData: any = createAsyncThunk('admin/get/personsData', async (id: number) => {
  const userId = id;
  const apiPropertyes: apiProps = {
    path: `admin/person/${userId}`,
    method: 'get',
  };
  const response = await useApi(apiPropertyes);
  return response.data;
});

export const createPerson: any = createAsyncThunk(
  'admin/person/register',
  async (person: Person) => {
    const apiPropertyes: apiProps = {
      path: 'admin/register',
      method: 'post',
      body: person,
    };
    const response = await useApi(apiPropertyes);
    return response.data;
  }
);

export const updatePerson: any = createAsyncThunk(
  'admin/person/update',
  async (person: Person) => {
    const { id } = person;
    const apiPropertyes: apiProps = {
      path: `admin/person/${id}`,
      method: 'put',
      body: person,
    };
    const response = await useApi(apiPropertyes);
    return response.data;
  }
);

export const deletePerson: any = createAsyncThunk(
  'admin/person/id',
  async (person: Person) => {
    const { id } = person;
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

export const personsSlice = createSlice({
  name: 'persons',
  initialState: initialPersonsState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPersons.pending, (state, _action) => {
        state.status = 'loading';
      })
      .addCase(fetchPersons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(action.payload)
        personsAdapter.setAll(state,action.payload);
      })
      .addCase(fetchPersons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      //Fetch teacher
      .addCase(fetchTeachers.pending, (state, _action) => {
        state.status = 'loading';
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(action.payload)
        personsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      
            //Fetch student
      .addCase(fetchStundents.pending, (state, _action) => {
        state.status = 'loading';
      })
      .addCase(fetchStundents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(action.payload)
        personsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchStundents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
                  //Fetch tutor
      .addCase(fetchTutor.pending, (state, _action) => {
        state.status = 'loading';
      })
      .addCase(fetchTutor.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(action.payload)
        personsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchTutor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createPerson.fulfilled, (state, action: PayloadAction<Person>) => {
        const {idPerson, firstName, lastName} = action.payload;
        const newPerson = {id: idPerson, fullName: `${firstName} ${lastName}}`}
        personsAdapter.addOne(state, newPerson);
      })
      .addCase(deletePerson.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Delete could not complete');
          return;
        }
        const { id } = action.payload;
        personsAdapter.removeOne(state, id);
      })
      .addCase(updatePerson.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log(`Update could not complete`);
          console.log(action.payload);
          return;
        }
        
        personsAdapter.upsertOne(state, action.payload);
      })
      .addDefaultCase((state, action) => {});
  },
});

export const {
  selectAll: selectAllPersons,
} = personsAdapter.getSelectors((state: RootState) => state.persons);

export const getPersonsStatus = (state: RootState) => state.persons.status;
export const getPersonsError = (state: RootState) => state.persons.error;


export default personsSlice.reducer;