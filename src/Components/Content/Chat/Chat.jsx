import React from "react";

import MessagesBased from "../../Chat/containers/Messages";
import ChatInputBased from "../../Chat/containers/ChatInput";
import StatusBased from "../../Chat/containers/Status";

import "./Chat.scss"

const Chat = () => {

  return (
    <>
      <section className="home">
        <div className="chat">
          <div className="chat__dialog">
              <StatusBased />
              <MessagesBased/>
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