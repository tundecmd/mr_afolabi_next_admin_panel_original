import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import authService from "../services/auth";
import CourseService from "../services/courseService";
// import axiosInstance from "../utils/axios";

export const getCourses = createAsyncThunk("/courses", async (thunkAPI) => {
  try {
    const data = await CourseService.getCourses();
    const { courses } = data;
    return { courses };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

export const addCourse = createAsyncThunk("/courses", async ({ ...newCourse }, thunkAPI) => {
  try {
    const res = await CourseService.addCourse(newCourse);
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

export const editCourse = createAsyncThunk("/courses", async ({ ...course }, thunkAPI) => {
  try {
    const res = await CourseService.editCourse(course);
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

export const deleteCourse = createAsyncThunk("/courses", async (_id, thunkAPI) => {
  try {
    const res = await CourseService.deleteCourse(_id);
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
  courses: [],
  success: false,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  extraReducers: {
    // [register.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    // [register.rejected]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    [getCourses.fulfilled]: (state, action) => {
      state.courses = action.payload.courses;
    },
    [getCourses.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    // [deleteCourse.fulfilled]: (state, action) => {
    //   state = [...state];
    // },
    // [logout.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    //   state.user = null;
    // },
  },
});

const { reducer } = courseSlice;
export default reducer;
