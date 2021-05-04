import { axios } from "./../../core";

export default {
  login: postData => axios.post("/user/signin", postData),
  getMe: () => axios.get("/user/me"),
  signUp: postData => axios.post("/user/signup", postData),
  findUser: (name) => axios.get("/user/find"),
  findUsers: query => axios.get("/user/find?query=" + query)
};