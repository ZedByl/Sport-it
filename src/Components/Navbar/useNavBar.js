import React, {useState} from 'react'
import chat from "../Content/img/chat.svg"
import group from "../Content/img/chat-group.svg"
import user from "../Content/img/user.svg"
import notebook from "../Content/img/notebook.svg"
import Nav from "./NavBar.module.scss";


const useNavBar = () => {


    const routesNavBar = [
        {
            id: 1,
            name: "Профиль",
            to: "/profile",
            img: <img className={Nav.img} src={user} alt="user"/>,
        },
        {
            id: 2,
            name: "Дневник питания",
            to: "/fit",
            img: <img className={Nav.img} src={notebook} alt="notebook"/>,
        },
        {
            id: 3,
            name: "Чат с тренером",
            to: "/chat",
            img: <img className={Nav.img} src={chat} alt="chat"/>,
        },
        {
            id: 4,
            name: "Груповой чат",
            to: "/generalChat",
            img: <img className={Nav.img} src={group} alt="generalChat"/>,
        }
    ]
    return {
        routesNavBar,

    }
}

export default useNavBar
