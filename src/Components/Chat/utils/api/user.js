import { axios } from "./../../core";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


export default {
  login: postData => axios.post("/user/signin", postData)
    .catch(error => {
      if (error.response.data.message) {
        const notify = () => toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        return notify()
      }
    }),
  getMe: () => axios.get("/user/me"),

  signUp: postData => axios.post("/user/signup", postData)
    .then(response => {
      if (response.data.message) {
        const notify = () => toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        return notify()
      }
    })
    .catch(error => {
      if (error.response.data.message) {
        const notify = () => toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        return notify()
      }
    }),
  findUser: (name) => axios.get("/user/find"),
  findUsers: query => axios.get("/user/find?query=" + query)
};