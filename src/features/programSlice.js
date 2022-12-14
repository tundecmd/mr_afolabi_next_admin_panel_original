import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/auth";
import ProgramService from "../services/programService";
// import axiosInstance from "../utils/axios";

export const getPrograms = createAsyncThunk("/programs", async (thunkAPI) => {
  try {
    const data = await ProgramService.getPrograms();
    const { programs } = data;
    return { programs };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const addProgram = createAsyncThunk("/programs", async ({ ...newProgram }, thunkAPI) => {
  try {
    const res = await ProgramService.addProgram(newProgram);
    return res;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const editProgram = createAsyncThunk("/programs", async ({ ...program }, thunkAPI) => {
  try {
    const res = await ProgramService.editProgram(program);
    return res;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const deleteProgram = createAsyncThunk("/programs", async (_id, thunkAPI) => {
  try {
    const res = await ProgramService.deleteProgram(_id);
    return res;
  } catch (error) {
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
