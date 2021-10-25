import { configureStore } from "@reduxjs/toolkit";
import  spendSlice  from "./spendSlice/spendSlice";

export const store = configureStore({
    reducer:{
    spends:spendSlice,
    },
})