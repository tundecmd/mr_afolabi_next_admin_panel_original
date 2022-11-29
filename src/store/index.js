import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import programReducer from "../features/programSlice";
import aboutReducer from "../features/aboutSlice";
import bannerReducer from "../features/bannerSlice";
import courseReducer from "../features/courseSlice";
import studentReducer from "../features/studentSlice";
// import messageReducer from "./slices/message";

const reducer = combineReducers({
  auth: authReducer,
  program: programReducer,
  course: courseReducer,
  student: studentReducer,
  about: aboutReducer,
  banner: bannerReducer,
  //   message: messageReducer,
});

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
