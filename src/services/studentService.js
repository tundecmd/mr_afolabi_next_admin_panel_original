import axios from "axios";
// import axiosInstance, { AxiosInstance } from "../utils/axios";

const API_URL = "http://localhost:2500/api/";

const getStudents = () => {
  return axios.get(API_URL + "admin/students").then((response) => {
    console.log("response :>> ", response);
    if (response.data.token) {
      localStorage.setItem("data", JSON.stringify(response.data));
    }

    return response.data;
  });
};

const addStudent = (newStudent) => {
  // console.log("newProgram :>> ", newProgram);
  return axios.post(API_URL + "admin/students", { newStudent }).then((res) => {
    console.log("res :>> ", res);
    if (res.status === 201) {
      return res;
    }
    return res.data;
  });
};

const editStudent = (student) => {
  // console.log("newProgram :>> ", newProgram);
  return axios.put(API_URL + "admin/students/" + student._id, { student }).then((res) => {
    console.log("res :>> ", res);
    if (res.status === 200) {
      return res;
    }
    return res.data;
  });
};

const deleteStudent = (_id) => {
  return axios.delete(API_URL + "admin/students/" + _id).then((response) => {
    console.log("response :>> ", response);

    return response;
  });
};

const StudentService = {
  getStudents,
  addStudent,
  editStudent,
  deleteStudent,
};

export default StudentService;
