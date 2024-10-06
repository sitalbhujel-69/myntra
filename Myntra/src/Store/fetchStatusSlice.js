import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone:false,  //pending and done
    CurrentlyFetching:false,
  } ,
  reducers: {
    markFetchDone:(state)=>{
      return state.fetchDone = true;
    },
    markFetchingStarted:(state)=>{
      return state.CurrentlyFetching = true;
    },
    markFetchingEnd:(state)=>{
      return state.CurrentlyFetching = false;
    },
  }
})
export const fetchStatusActions =fetchStatusSlice.actions
export default fetchStatusSlice;
