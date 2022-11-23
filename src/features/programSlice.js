import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/auth";
import ProgramService from "../services/programService";
// import axiosInstance from "../utils/axios";

export const getPrograms = createAsyncThunk("/programs", async (thunkAPI) => {
  console.log("aaaaaa");
  try {
    const data = await ProgramService.getPrograms();
    console.log("data :>> ", data);
    const { programs } = data;
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
  console.log("aaaaaa");
  try {
    const res = await ProgramService.addProgram(newProgram);
    // console.log("data :>> ", data);
    // const { programs } = data;
    return res;
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

export const editProgram = createAsyncThunk("/programs", async ({ ...program }, thunkAPI) => {
  console.log("aaaaaa");
  try {
    const res = await ProgramService.editProgram(program);
    // console.log("data :>> ", data);
    // const { programs } = data;
    return res;
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

export const deleteProgram = createAsyncThunk("/programs", async (_id, thunkAPI) => {
  console.log("_id >>", _id);
  try {
    const res = await ProgramService.deleteProgram(_id);
    console.log("res :>> ", res);
    // console.log("data :>> ", data);
    // const { programs } = data;
    return res;
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

// const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };
const initialState = {
  programs: [],
  success: false,
};

const programSlice = createSlice({
  name: "program",
  initialState,
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
    // [deleteProgram.fulfilled]: (state, action) => {
    //   state = [...state];
    // },
    // [logout.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    //   state.user = null;
    // },
  },
});

const { reducer } = programSlice;
export default reducer;
