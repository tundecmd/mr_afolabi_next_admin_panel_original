import axiosInstance from "../utils/axios";

const login = (user) => {
  console.log(user);

  return axiosInstance
    .post("/admin/signin", {
      ...user,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
  // return async () => {
  //   // dispatch({ type: authConstants.LOGIN_REQUEST });
  //   const res = await axiosInstance.post(`/admin/signin`, {
  //     ...user,
  //   });

  //   if (res.status === 200) {
  //     const { token, user } = res.data;
  //     localStorage.setItem("token", token);
  //     localStorage.setItem("user", JSON.stringify(user));
  //     console.log("res.data :>> ", res.data);
  //     return res.data;
  //     //   dispatch({
  //     //     type: authConstants.LOGIN_SUCCESS,
  //     //     payload: {
  //     //       token,
  //     //       user,
  //     //     },
  //     //   });
  //   } else {
  //     if (res.status === 400) {
  //       dispatch({
  //         type: authConstants.LOGIN_FAILURE,
  //         payload: { error: res.data.error },
  //       });
  //     }
  //   }
  // };
};

export const AuthService = {
  login,
};
