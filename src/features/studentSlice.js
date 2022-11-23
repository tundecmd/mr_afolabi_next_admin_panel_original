import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/auth";
// import ProgramService from "../services/programService";
import StudentService from "../services/studentService";
// import axiosInstance from "../utils/axios";

export const getStudents = createAsyncThunk("/students", async (thunkAPI) => {
  try {
    const data = await StudentService.getStudents();
    const { students } = data;
    return { students };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const addStudent = createAsyncThunk("/students", async ({ ...newStudent }, thunkAPI) => {
  try {
    const res = await StudentService.addStudent(newStudent);
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

export const editStudent = createAsyncThunk("/students", async ({ ...student }, thunkAPI) => {
  try {
    const res = await StudentService.editStudent(student);
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

export const deleteStudent = createAsyncThunk("/students", async (_id, thunkAPI) => {
  try {
    const res = await StudentService.deleteStudent(_id);
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
  students: [],
  success: false,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  extraReducers: {
    // [register.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    // [register.rejected]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    [getStudents.fulfilled]: (state, action) => {
      state.students = action.payload.students;
    },
    [getStudents.rejected]: (state, action) => {
      // state.isLoggedIn = false;
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

const { reducer } = studentSlice;
export default reducer;
