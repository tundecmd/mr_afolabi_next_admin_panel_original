import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import programReducer from "../features/programSlice";
// import messageReducer from "./slices/message";

const reducer = combineReducers({
  auth: authReducer,
  program: programReducer,
  //   message: messageReducer,
});

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
