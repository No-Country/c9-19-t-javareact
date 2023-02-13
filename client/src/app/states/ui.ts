import { createSlice } from "@reduxjs/toolkit";
import { Ui } from "../../models/Ui";

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
  
  export const { sidebarStatus } = uiSlice.actions;
  
  export default uiSlice.reducer;
  