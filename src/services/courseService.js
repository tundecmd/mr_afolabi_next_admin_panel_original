import axios from "axios";
// import axiosInstance, { AxiosInstance } from "../utils/axios";

const API_URL = "http://localhost:2500/api/";

const getCourses = () => {
  return axios.get(API_URL + "admin/courses").then((response) => {
    console.log("response :>> ", response);
    if (response.data.token) {
      localStorage.setItem("data", JSON.stringify(response.data));
    }

    return response.data;
  });
};

const addCourse = (newCourse) => {
  return axios.post(API_URL + "admin/courses", { newCourse }).then((res) => {
    console.log("res :>> ", res);
    if (res.status === 201) {
      return res;
    }
    return res.data;
  });
};

const editCourse = (course) => {
  return axios.put(API_URL + "admin/courses/" + course._id, { course }).then((res) => {
    console.log("res :>> ", res);
    if (res.status === 200) {
      return res;
    }
    return res.data;
  });
};

const deleteCourse = (_id) => {
  return axios.delete(API_URL + "admin/courses/" + _id).then((response) => {
    console.log("response :>> ", response);

    return response;
  });
};

const CourseService = {
  getCourses,
  addCourse,
  editCourse,
  deleteCourse,
};

export default CourseService;
