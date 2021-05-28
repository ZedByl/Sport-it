import React, {useEffect, useRef} from "react";
import { connect } from "react-redux"

import { messagesActions } from "../redux/actions";
import Messages from "../Messages/index"
import socket from "../core/socket";

const MessagesBased = ({ currentDialogId, fetchMessages, addMessage, items, isLoading, user}) => {


  const messagesRef = useRef(null)

  const onNewMessage = data => {
    addMessage(data);
  };

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId)
    }
    socket.on('SERVER:NEW_MESSAGE', onNewMessage)

    return () => socket.removeListener('SERVER:NEW_MESSAGE', onNewMessage);
  }, [currentDialogId])

  useEffect(() => {
      messagesRef.current.scrollTo(0, 99999)
  }, [items])



  return (
    <Messages
      user={user}
      blockRef={messagesRef}
      items={items}
      isLoading={isLoading}
    />
  )
}
export default connect(
  ({ dialogs, messages, user }) => ({
  currentDialogId: dialogs.currentDialogId,
  items: messages.items,
  isLoading: messages.isLoading,
  user: user.data
  }),
  messagesActions)
(MessagesBased)