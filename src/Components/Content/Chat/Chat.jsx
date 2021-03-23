import React from "react";
import style from "./Chat.module.scss"
import NavBar from "../../Navbar/NavBar";

 const Chat = () => {

    return (
        <>
            <div className={style.main}>
            <div className={style.Nav}>
                <NavBar/>
            </div>

            <div className={style.Content}>
            </div>

            </div>
        </>
    )
}
export default Chat
