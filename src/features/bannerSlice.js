import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BannerService from "../services/bannerService";
// import aboutService from "../services/auth";
// import settingsService from "../services/bannerService";
// import axiosInstance from "../utils/axios";

export const getBanner = createAsyncThunk("/banner", async (thunkAPI) => {
  try {
    const data = await BannerService.getBanner();
    const { banner } = data;
    return { banner };
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

export const editBanner = createAsyncThunk("/banner", async ({ ...banner }, thunkAPI) => {
  try {
    const res = await BannerService.editBanner(banner);
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
  banner: [],
  success: false,
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  extraReducers: {
    // [register.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    // [register.rejected]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    [getBanner.fulfilled]: (state, action) => {
      state.banner = action.payload.banner;
    },
    [getBanner.rejected]: (state, action) => {
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

const { reducer } = bannerSlice;
export default reducer;
