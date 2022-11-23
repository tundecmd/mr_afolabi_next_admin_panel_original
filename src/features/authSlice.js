import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/auth";
import axiosInstance from "../utils/axios";

const user = null;

// export const login = createAsyncThunk("admin/signin", async ({ user }, thunkAPI) => {
//   try {
//     const res = await axiosInstance.post(`/admin/signin`, {
//       ...user,
//     });
//     console.log("res :>> ", res);
//     return { user: data };
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     thunkAPI.dispatch(setMessage(message));
//     return thunkAPI.rejectWithValue();
//   }
// });

// export const login = createAsyncThunk("admin/signin", async (thunkAPI) => {
//   try {
//     const res = await axiosInstance.get("http://localhost:2500/api").then((data) => data.json());
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

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   extraReducers: {
//     // [register.fulfilled]: (state, action) => {
//     //   state.isLoggedIn = false;
//     // },
//     // [register.rejected]: (state, action) => {
//     //   state.isLoggedIn = false;
//     // },
//     [login.fulfilled]: (state, action) => {
//       state.isLoggedIn = true;
//       state.user = action.payload.user;
//     },
//     [login.rejected]: (state, action) => {
//       state.isLoggedIn = false;
//       state.user = null;
//     },
//     // [logout.fulfilled]: (state, action) => {
//     //   state.isLoggedIn = false;
//     //   state.user = null;
//     // },
//   },
// });

// const { reducer } = authSlice;
// export default reducer;

export const login = createAsyncThunk("/login", async ({ email, password }, thunkAPI) => {
  console.log("aaaaaa");
  try {
    const data = await authService.login(email, password);
    console.log("data :>> ", data);
    return { user: data };
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

const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // [register.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    // [register.rejected]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    // [logout.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    //   state.user = null;
    // },
  },
});

const { reducer } = authSlice;
export default reducer;
