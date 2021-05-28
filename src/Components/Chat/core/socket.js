import io from "socket.io-client";

//https://sport-it-club.web.app
//https://server-sport-it.herokuapp.com
const socket = io(window.location.origin.replace("https://sport-it-club.web.app", "https://server-sport-it.herokuapp.com"));

export default socket;