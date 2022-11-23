// import axiosInstance from "../utils/axios";

// const login = (user) => {
//   console.log(user);

//   return axiosInstance
//     .post("/admin/signin", {
//       ...user,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }

//       return response.data;
//     });
//   // return async () => {
//   //   // dispatch({ type: authConstants.LOGIN_REQUEST });
//   //   const res = await axiosInstance.post(`/admin/signin`, {
//   //     ...user,
//   //   });

//   //   if (res.status === 200) {
//   //     const { token, user } = res.data;
//   //     localStorage.setItem("token", token);
//   //     localStorage.setItem("user", JSON.stringify(user));
//   //     console.log("res.data :>> ", res.data);
//   //     return res.data;
//   //     //   dispatch({
//   //     //     type: authConstants.LOGIN_SUCCESS,
//   //     //     payload: {
//   //     //       token,
//   //     //       user,
//   //     //     },
//   //     //   });
//   //   } else {
//   //     if (res.status === 400) {
//   //       dispatch({
//   //         type: authConstants.LOGIN_FAILURE,
//   //         payload: { error: res.data.error },
//   //       });
//   //     }
//   //   }
//   // };
// };

// export const AuthService = {
//   login,
// };

import axios from "axios";

const API_URL = "http://localhost:2500/api/";

const register = (email, password) => {
  return axios.post(API_URL + "signup", {
    email,
    password,
  });
};

const login = (email, password) => {
  // console.log("email :>> ", email);
  // console.log("password :>> ", password);
  return axios
    .post(API_URL + "admin/signin", {
      email,
      password,
    })
    .then((response) => {
      console.log("response :>> ", response);
      if (response.data.token) {
        localStorage.setItem("data", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
