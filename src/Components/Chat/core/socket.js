import io from "socket.io-client";

const socket = io(window.location.origin.replace("https://sport-it-club.web.app", "https://server-sport-it.herokuapp.com"));

export default socket;