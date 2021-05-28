import React, {useEffect, } from 'react';
import {NavLink, useLocation} from "react-router-dom";
import style from '../Navbar/NavBar.module.scss'
import cn from 'classnames'
import Nav from "./NavBar.module.scss";
import notebook from "../Content/img/notebook.svg";
import chat from "../Content/img/chat.svg";
import group from "../Content/img/chat-group.svg";
import user from "../Content/img/user.svg";
import arrow from "../Content/img/arrow.svg"
import cancel from "../Content/img/cancel.svg"
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
    return <div className={style.loading}><Loader/></div>
  }

  function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

  return (
    <div className={style.navBar}>
      <button className={style.openBtn} onClick={openNav}><img src={arrow} alt=""/></button>
    <div id="mySidebar" className={style.nav}>

      <a href="#" className={style.closeBtn} onClick={closeNav}>×</a>
      <NavLink
        to="/fit"
        className={cn(style.test, path === "/fit" && style.activeLink)}
      >
        <img className={Nav.img} src={notebook} alt="notebook"/>
        Дневник питания
      </NavLink>
      {!props.dialogId ?
      (<NavLink
        to="/chat"
        className={cn(style.test, path === "/chat" && style.activeLink)}
      >
        <img className={Nav.img} src={chat} alt="chat"/>
        Чат с тренером
      </NavLink>)
        :
        (<NavLink
        to={`/chat/${props.dialogId._id}`}
        onClick={props.setCurrentDialogId.bind(this, props.dialogId._id)}
        className={cn(style.test, path === `/chat/${props.dialogId._id}` && style.activeLink)}
      >
        <img className={Nav.img} src={chat} alt="chat"/>
        Чат с тренером
        </NavLink>)
      }

      <NavLink
        to="/generalChat"
        className={cn(style.test, path === "/generalChat" && style.activeLink)}
      >
        <img className={Nav.img} src={group} alt="generalChat"/>
        Групповой чат
      </NavLink>
      <NavLink
        to="/profile"
        className={cn(style.test, path === "/profile" && style.activeLink)}
      >
        <img className={Nav.img} src={user} alt="user"/>
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
