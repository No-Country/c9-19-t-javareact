import { createSlice } from "@reduxjs/toolkit";
import { Ui } from "../../models/Ui";
import { RootState } from "../store";

export const EmptyUiState: Ui = {
    sidebarHidden:false
  };
  
  export const UserKey = 'user';
  
  export const uiSlice = createSlice({
    name: 'ui',
    initialState: EmptyUiState,
    reducers: {
      sidebarStatus: (state) => {
        if(state.sidebarHidden) return {...state,sidebarHidden:false}
        return {...state,sidebarHidden:true
        }
      }
      
  }});
  export const selectNavState = (state: RootState) => state.ui.sidebarHidden;
  export const { sidebarStatus } = uiSlice.actions;
  
  export default uiSlice.reducer;
  