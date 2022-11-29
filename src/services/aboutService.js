import axios from "axios";
// import axiosInstance, { AxiosInstance } from "../utils/axios";

const API_URL = "http://localhost:2500/api/";

const getAbout = () => {
  return axios.get(API_URL + "admin/about").then((response) => {
    console.log("response :>> ", response);
    if (response.data.token) {
      localStorage.setItem("data", JSON.stringify(response.data));
    }

    return response.data;
  });
};

// const addProgram = (newProgram) => {
//   console.log("newProgram :>> ", newProgram);
//   return axios.post(API_URL + "admin/programs", { newProgram }).then((res) => {
//     console.log("res :>> ", res);
//     if (res.status === 201) {
//       return res;
//     }
//     return res.data;
//   });
// };

const editAbout = (about) => {
  // console.log("newProgram :>> ", newProgram);
  return axios.put(API_URL + "admin/about/" + about._id, { about }).then((res) => {
    console.log("res :>> ", res);
    if (res.status === 200) {
      return res;
    }
    return res.data;
  });
};

// const deleteProgram = (_id) => {
//   return axios.delete(API_URL + "admin/programs/" + _id).then((response) => {
//     console.log("response :>> ", response);

//     return response;
//   });
// };

const AboutService = {
  getAbout,
  editAbout,
};

export default AboutService;
