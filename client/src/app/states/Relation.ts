import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { apiProps, useApi } from "../../hooks/useApi";
import { Relations } from "../../models/Relations";

import { RootState } from "../store";
import { FormData } from '../../components/LoginForm';

export interface State {
  status: string;
  error: string | undefined | null;
}
export interface bondProps {
  idStudent: string | number | undefined;
  idTutor: string | number | undefined;
  relation: string | undefined;
}
const relationsAdapter = createEntityAdapter<Relations>({ });

export const initialRelationsState: EntityState<Relations> & State =
  relationsAdapter.getInitialState({
    status: "idle",
    error: null,
  });

export const setRelation: any = createAsyncThunk(
  "person/relationship",
  async (data : any) => {
    console.log(data)
    const { idStudent, idTutor, relation } = data;
    const apiPropertyes: apiProps = {
      path: `admin/relationship`,
      method: "post",
      body: {
        idStudent: idStudent,
        idTutor: idTutor,
        relation: relation,
      },
    };
    const response = await useApi(apiPropertyes);
    console.log(response)
    return response.data;
  }
);
export const deleteRelation: any = createAsyncThunk(
  "admin/relationship/",
  async (id) => {
    console.log(id)
    const apiPropertyes: apiProps = {
      path: `admin/relationship/${id}`,
      method: `delete`,
    };
    const response = await useApi(apiPropertyes);
    const responseId = {...response,data:{idRelation:id,id:id}}
    return responseId;
  }
);
export const fetchRelation: any = createAsyncThunk(
  "admin/relationship/path/id",
  async ({ id, path }: any) => {
    const apiPropertyes: apiProps = {
      path: `admin/relationship/${path}/${id}`,
      method: "get",
    };
    const response = await useApi(apiPropertyes);
    return response.data;
  }
);

const relationsSlice = createSlice({
  name: "relation",
  initialState: initialRelationsState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRelation.pending, (state, _action) => {
        state.status = "loading";
      })
      .addCase(fetchRelation.fulfilled, (state, action) => {
        state.status = "succeeded";
        let fetchedData = []
        if(action.payload) 
        fetchedData = action.payload.map((relation: any) => ({
          ...relation,
          id: relation.idRelation
        }))
        relationsAdapter.upsertMany(state, fetchedData);
      })
      .addCase(fetchRelation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
       .addCase(setRelation.fulfilled, (state, action) => {
        console.log('setrelation:', action.payload)
        state.status="succeeded"
        const newRelation = {...action.payload, id: action.payload.idRelation}
        relationsAdapter.addOne(state, newRelation);
      }) 
      .addCase(deleteRelation.fulfilled, (state, action) => {
         if (!action.payload?.status) {
          return;
        } 
        const { idRelation } = action.payload.data;
        relationsAdapter.removeOne(state, idRelation);
      }) 
      
  },
});

export const { selectAll: selectRelations } = relationsAdapter.getSelectors(
  (state: RootState) => state.relation
);

export const getRelationsStatus = (state: RootState) => state.relation.status;
export const getRelationsError = (state: RootState) => state.relation.error;

export default relationsSlice.reducer;
