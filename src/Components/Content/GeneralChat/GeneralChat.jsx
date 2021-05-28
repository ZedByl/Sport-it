/* eslint-disable */
// hooks
import React from 'react'
import {useLocalStorage} from './hooks/useLocalStorage'
import {useChat} from './hooks/useChat'
// components
import MessageForm from './components/ChatRoom/MessageForm/MessageForm'
import MessageList from './components/ChatRoom/MessageList/MessageList'
import {UserList} from './components/ChatRoom/UserList/UserList'
// styles
import './GeneralChat.scss'

const GeneralChat = () => {
  const roomId = 'chat'
  const [username] = useLocalStorage('username')
  const {messages, sendMessage, removeMessage} = useChat(roomId)

  return (
    <div className="generalChat">
      <div className="generalChat-Field">
        <div className="generalChat-Field__header">
          <b className="generalChat-Field__header-name">Общий чат</b>
        </div>
        <div className="generalChat-Field__messages">
        <MessageList username={username} messages={messages} removeMessage={removeMessage}/>
        </div>
        <div className="generalChat-Field__inputForm">
        <MessageForm username={username} sendMessage={sendMessage}/>
        </div>

      </div>
    </div>
  )
}
export default GeneralChat
