import React, {useEffect, } from 'react';
import {NavLink, useLocation} from "react-router-dom";
import cn from 'classnames'
import Nav from "./NavBar.scss";
import notebook from "../Content/img/notebook.svg";
import chat from "../Content/img/chat.svg";
import group from "../Content/img/chat-group.svg";
import user from "../Content/img/user.svg";
import {connect} from "react-redux";
import {dialogsActions} from "../Chat/redux/actions";
import Loader from "../Loader";
import socket from "../Chat/core/socket";

const NavBar = (props) => {
  const path = useLocation().pathname

  window.fetchDialogs = props.fetchDialogs

  useEffect(() => {
    props.fetchDialogs()
    socket.on("SERVER:DIALOG_CREATED", props.fetchDialogs)
    socket.on("SERVER:NEW_MESSAGE", props.fetchDialogs)
    return () => {
      socket.removeListener("SERVER:DIALOG_CREATED", props.fetchDialogs)
      socket.removeListener("SERVER:NEW_MESSAGE", props.fetchDialogs)
    }
  }, [])

  if (!props.user) {
    return <div className="loading"><Loader/></div>
  }

  // var oldScrollY = 0;
  // var div = document.getElementById("showScroll");
  //
  // window.onscroll = function() {
  //   let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  //   let dY = scrolled - oldScrollY;
  //
  //   if ( dY < 0 ){
  //     div.className = "navBar navBar-bottom";
  //   } else {
  //     div.className = "navBar navBar-top";
  //   }
  //
  //   oldScrollY = scrolled;
  // }

  return (
    <div id="showScroll" className="navBar">
    <div className="nav">
      <NavLink
        to="/fit"
        className={cn("test", path === "/fit" && "activeLink")}
      >
        <img className="img" src={notebook} alt="notebook"/>
        Дневник питания
      </NavLink>
      {!props.dialogId ?
      (<NavLink
        to="/chat"
        className={cn("test", path === "/chat" && "activeLink")}
      >
        <img className="img" src={chat} alt="chat"/>
        Чат с тренером
      </NavLink>)
        :
        (<NavLink
        to={`/chat/${props.dialogId._id}`}
        onClick={props.setCurrentDialogId.bind(this, props.dialogId._id)}
        className={cn("test", path === `/chat/${props.dialogId._id}` && "activeLink")}
      >
        <img className="img" src={chat} alt="chat"/>
        Чат с тренером
        </NavLink>)
      }

      <NavLink
        to="/generalChat"
        className={cn("test", path === "/generalChat" && "activeLink")}
      >
        <img className="img" src={group} alt="generalChat"/>
        Общий чат
      </NavLink>
      <NavLink
        to="/profile"
        className={cn("test", path === "/profile" && "activeLink")}
      >
        <img className="img" src={user} alt="user"/>
        Профиль
      </NavLink>
    </div>
    </div>
  )
}

export default connect(({dialogs,  user}) => ({
  dialogId: dialogs.items[0],
  user: user.data
}), dialogsActions)(NavBar)
