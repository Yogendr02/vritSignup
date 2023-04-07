import { configureStore } from "@reduxjs/toolkit";
import { countstoreReducer, addOne } from "./countstore";


const store = configureStore({
  reducer: {
    counts: countstoreReducer
  }
});

export {store,addOne}

