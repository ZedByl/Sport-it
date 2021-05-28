import axios from "axios";

//https://sport-it-club.web.app
//https://server-sport-it.herokuapp.com
axios.defaults.baseURL = 'https://server-sport-it.herokuapp.com'
axios.defaults.headers.common["token"] = window.localStorage.token
axios.defaults.headers.common["Content-Type"] = "application/json"
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "https://sport-it-club.web.app"



window.axios = axios

export default axios
