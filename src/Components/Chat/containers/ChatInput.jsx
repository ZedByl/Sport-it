import React from 'react';
import ChatInput from '../ChatInput/index'
import { connect } from 'react-redux'
import { messagesActions } from '../redux/actions'

const ChatInputBased = ({ fetchSendMessage, currentDialogId }) => {
  if (!currentDialogId) {
    return null;
  }
  return <ChatInput
    onSendMessage={fetchSendMessage}
    currentDialogId={currentDialogId}
  />
}

export default connect(({dialogs}) =>  dialogs, messagesActions)(ChatInputBased)