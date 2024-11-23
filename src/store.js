import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "./features/team"
export const store = configureStore({
reducer:{
team:teamReducer

}



})