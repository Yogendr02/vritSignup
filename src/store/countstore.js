import { createSlice } from "@reduxjs/toolkit";

const countstore = createSlice({
    name: "counting",
    initialState: {
      fool:0
    },
    reducers: {
      addOne(state) {
        state.fool++;
      },
    },
  });
  
  export const { addOne } = countstore.actions;
  export const countstoreReducer = countstore.reducer;
  