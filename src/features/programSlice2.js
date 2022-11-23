import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/auth";
import ProgramService from "../services/programService";
import axiosInstance from "../utils/axios";
// import { initialState } from "../store/index";

export const getPrograms = createAsyncThunk("/programs", async (thunkAPI) => {
  console.log("aaaaaa");
  try {
    const data = await ProgramService.getPrograms();
    console.log("data get :>> ", data);
    const { programs } = data;
    console.log("programs :>> ", programs);
    return { programs };
  } catch (error) {
    console.log("error :>> ", error);
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const addProgram = createAsyncThunk("/programs", async ({ ...newProgram }, thunkAPI) => {
  // console.log("object :>> ", newProgram);
  try {
    const data = await ProgramService.addProgram(newProgram);
    console.log("data post :>> ", data);
    return data;
  } catch (error) {}
});

// export const login = createAsyncThunk("/programs", async ({}, thunkAPI) => {
//   console.log("aaaaaa");
//   try {
//     const data = await authService.login(email, password);
//     console.log("data :>> ", data);
//     return { user: data };
//   } catch (error) {
//     console.log("error :>> ", error);
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     thunkAPI.dispatch(setMessage(message));
//     return thunkAPI.rejectWithValue();
//   }
// });

const initialState = { programs: [] };

// const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

const programSlice = createSlice({
  name: "program",
  initialState: initialState,
  // reducers: {
  //   getPrograms: (state, action) => {
  //     console.log("action.payload :>> ", action.payload);

  //     return [...state, action.payload.programs];
  //   },
  // },
  extraReducers: {
    // [register.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    // [register.rejected]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    [getPrograms.fulfilled]: (state, action) => {
      state.programs = action.payload.programs;
    },
    [getPrograms.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [addProgram.fulfilled]: (state, action) => {
      state = action.payload;
    },
    // [logout.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    //   state.user = null;
    // },
  },
});

console.log("programSlice :>> ", programSlice);
const { reducer } = programSlice;
export default reducer;

// const initialState = {
//   programs: ["3", "e"],
// };

// const programSlice = createSlice({
//   name: "program",
//   initialState,
// });

// export default programSlice.reducer;
