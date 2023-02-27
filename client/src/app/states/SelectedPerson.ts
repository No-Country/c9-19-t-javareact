import {
  createSlice,
} from '@reduxjs/toolkit';
import { PersonEntity } from '../../models/PersonEntity';
import { RootState } from '../store';

export interface State {
  person: PersonEntity | undefined,
}

const initialState : State= {
  person: undefined
}

const selectedPersonSlice = createSlice({
  name: 'selectedPerson',
  initialState: initialState,
  reducers: {
    setSelectedPerson: (state, action) => {
      state.person = action.payload;
    },
  },
});

export const { setSelectedPerson } = selectedPersonSlice.actions;

export const getSelectedPerson = (state: RootState) => state.selectedPerson.person;

export default selectedPersonSlice.reducer;