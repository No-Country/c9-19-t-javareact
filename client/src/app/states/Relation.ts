import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { apiProps, useApi } from "../../hooks/useApi";
import { Commission } from "../../models/Commission";
import { RootState } from "../store";

export interface State {
  status: string;
  error: string | undefined | null;
}
export interface bondProps {
  idStudent: string | number | undefined;
  idTutor: string | number | undefined;
  relation: string | undefined;
}
const relationsAdapter = createEntityAdapter<Commission>({
  selectId: (commission) => commission.commissionId || 0,
});

export const initialRelationsState: EntityState<Commission> & State =
  relationsAdapter.getInitialState({
    status: "idle",
    error: null,
  });

export const setRelation: any = createAsyncThunk(
  "person/relationship",
  async ({ idStudent, idTutor, relation }: bondProps) => {
    console.log(idStudent, idTutor, relation);
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
    return response.data;
  }
);
export const deleteRelation: any = createAsyncThunk(
  "commissions",
  async (id) => {
    const apiPropertyes: apiProps = {
      path: `admin/relationship/${id}`,
      method: `delete`,
    };
    const response = await useApi(apiPropertyes);
    return response.data;
  }
);
export const fetchRelation: any = createAsyncThunk(
  "commissions",
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
        relationsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchRelation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
/*       .addCase(deleteRelation.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Delete could not complete');
          return;
        }
        const { id } = action.payload;
        relationsAdapter.removeOne(state, id);
      }) */
  },
});

export const { selectAll: selectRelations } = relationsAdapter.getSelectors(
  (state: RootState) => state.relation
);

export const getRelationsStatus = (state: RootState) => state.relation.status;
export const getRelationsError = (state: RootState) => state.relation.error;

export default relationsSlice.reducer;
