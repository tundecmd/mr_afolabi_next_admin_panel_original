import axios from "axios";
// import axiosInstance, { AxiosInstance } from "../utils/axios";

const API_URL = "http://localhost:2500/api/";

const getPrograms = () => {
  return axios.get(API_URL + "admin/programs").then((response) => {
    console.log("response :>> ", response);
    if (response.data.token) {
      localStorage.setItem("data", JSON.stringify(response.data));
    }

    return response.data;
  });
};

const addProgram = (newProgram) => {
  // console.log("newProgram :>> ", newProgram);
  return axios.post(API_URL + "admin/programs", { newProgram }).then((res) => {
    console.log("res :>> ", res);
    if (res.status === 201) {
      return res;
    }
    return res.data;
  });
};

const editProgram = (program) => {
  // console.log("newProgram :>> ", newProgram);
  return axios.put(API_URL + "admin/programs/" + program._id, { program }).then((res) => {
    console.log("res :>> ", res);
    if (res.status === 200) {
      return res;
    }
    return res.data;
  });
};

const deleteProgram = (_id) => {
  return axios.delete(API_URL + "admin/programs/" + _id).then((response) => {
    console.log("response :>> ", response);

    return response;
  });
};

const ProgramService = {
  getPrograms,
  addProgram,
  editProgram,
  deleteProgram,
};

export default ProgramService;
