import { createSlice } from "@reduxjs/toolkit";
import { Ui } from "../../models/Ui";
import { RootState } from "../store";

export const EmptyUiState: Ui = {
    sidebarHidden:false,
    showUserInfoModal: false
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
      },
      handleShowInfoModal: (state) => {
        return {...state,
        showUserInfoModal: !state.showUserInfoModal}
      }
  }});
  export const selectNavState = (state: RootState) => state.ui.sidebarHidden;
  export const getUserInfoModalState = (state: RootState) => state.ui.showUserInfoModal;

  export const { sidebarStatus, handleShowInfoModal } = uiSlice.actions;
  
  export default uiSlice.reducer;
  