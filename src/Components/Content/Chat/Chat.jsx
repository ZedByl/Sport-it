import React, {useEffect} from "react";
import MessagesBased from "../../Chat/containers/Messages";
import DialogsBased from "../../Chat/containers/Dialogs";
import ChatInputBased from "../../Chat/containers/ChatInput";
import StatusBased from "../../Chat/containers/Status";
import SidebarBased from "../../Chat/containers/Sidebar";

import "./Chat.scss"
import teamSvg from '../img/team.svg'
import editSvg from '../img/edit.svg'
import ellipsisSvg from '../img/ellipsis.svg'


const Chat = props => {

  // const { setCurrentDialogId, user } = props;
  // useEffect(() => {
  //   const { pathname } = props.location;
  //   const dialogId = pathname.split('/').pop();
  //   setCurrentDialogId(dialogId);
  // }, [props.location.pathname]);

  return (
    <>
      <section className="home">
        <div className="chat">
          <SidebarBased />
          <div className="chat__dialog">
            <div className="chat__dialog-header">
              <div/>
              <StatusBased />
              <button><img className="chat__image" src={ellipsisSvg} alt="ellipsis"/></button>
            </div>
            <div className="chat__dialog-messages">
              <MessagesBased/>
            </div>
            <div className="chat__dialog-input">
              <ChatInputBased/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Chat