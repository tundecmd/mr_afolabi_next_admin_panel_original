import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import aboutService from "../services/auth";
import AboutService from "../services/aboutService";
// import axiosInstance from "../utils/axios";

export const getAbout = createAsyncThunk("/about", async (thunkAPI) => {
  try {
    const data = await AboutService.getAbout();
    const { about } = data;
    console.log("about :>> ", about);
    return { about };
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

// export const addProgram = createAsyncThunk("/programs", async ({ ...newProgram }, thunkAPI) => {
//   try {
//     const res = await ProgramService.addProgram(newProgram);
//     return res;
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     thunkAPI.dispatch(setMessage(message));
//     return thunkAPI.rejectWithValue();
//   }
// });

export const editAbout = createAsyncThunk("/about", async ({ ...about }, thunkAPI) => {
  try {
    const res = await AboutService.editAbout(about);
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

// export const deleteProgram = createAsyncThunk("/programs", async (_id, thunkAPI) => {
//   try {
//     const res = await ProgramService.deleteProgram(_id);
//     return res;
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     thunkAPI.dispatch(setMessage(message));
//     return thunkAPI.rejectWithValue();
//   }
// });

// const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };
const initialState = {
  about: [],
  success: false,
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  extraReducers: {
    // [register.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    // [register.rejected]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    [getAbout.fulfilled]: (state, action) => {
      state.about = action.payload.about;
    },
    [getAbout.rejected]: (state, action) => {
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

const { reducer } = aboutSlice;
export default reducer;
