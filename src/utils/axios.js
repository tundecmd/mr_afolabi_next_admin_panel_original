// import axios from "axios";
// import store from "../store";
// // import { authConstants } from "state/actions/constants";
// import { api } from "../urlConfig";
// // import { api } from './../urlConfig';

// // const token = localStorage.getItem("token");

// export const axiosI = () => {};
// if (typeof window !== "undefined") {
//   const token = localStorage.getItem("token");

//   const axiosInstance = axios.create({
//     baseURL: api,
//     headers: {
//       Authorization: token ? `Bearer ${token}` : " ",
//     },
//   });

//   axiosInstance.interceptors.request.use((req) => {
//     const { auth } = store.getState();
//     if (auth.token) {
//       req.headers.Authorization = `Bearer ${auth.token}`;
//     }
//     return req;
//   });

//   axiosInstance.interceptors.response.use(
//     (res) => {
//       return res;
//     },
//     (error) => {
//       console.log("err", error.response);
//       const status = error.response ? error.response.status : 500;
//       if (status && status === 500) {
//         localStorage.clear();
//         store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
//       }
//       return Promise.reject(error);
//     }
//   );
// }
// // function axiosInstance() {
// //   return axiosInstance;
// // }
// // export default axiosInstance;
// // export default axiosInstance;
