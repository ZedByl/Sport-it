import React, {useEffect, useState, Fragment} from "react"

import {Picker} from 'emoji-mart'
import {UploadField} from "@navjobs/upload"

import UploadFiles from "../UploadFiles/index";

import "./ChatInput.scss"
import SmileSvg from "../../Content/img/smile.svg"
import CameraSvg from "../../Content/img/camera.svg"
import MicrophoneSvg from "../../Content/img/microphone.svg"
import SendSvg from "../../Content/img/send.svg"


const ChatInput = props => {

  const [value, setValue] = useState("")
  const [emojiPickerVisible, setShowEmojiPicker] = useState("")
  const {onSendMessage, currentDialogId} = props


  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!emojiPickerVisible)
  }

  const handleSendMessage = (e) => {
    if (e.key === 'Enter') {
      onSendMessage(value, currentDialogId)
      setValue('')
    }
  }

  const handleClickMessageSend = () => {
    onSendMessage(value, currentDialogId)
    setValue('')
  }

  const addEmoji = ({colons}) => {
    setValue((value + " " + colons).trim())
  }

  const handleOutsideClick = (el, e) => {
    if (el && !el.contains(e.target)) {
      setShowEmojiPicker(false)
    }
  }

  useEffect(() => {
    const el = document.querySelector(".chat-input__smile-btn")
    document.addEventListener("click", handleOutsideClick.bind(this, el))

    return () => {
      document.removeEventListener("click", handleOutsideClick.bind(this, el))
    }
  }, [])

  return (
    <Fragment>
      <div className="chat-input">
        <div className="chat-input__smile-btn">
          <div className="chat-input__emoji-piker">
            {emojiPickerVisible && (
              <Picker onSelect={emojiTag => addEmoji(emojiTag)} set='apple'/>
            )}
          </div>
          <button
            onClick={toggleEmojiPicker}
          >
            <img src={SmileSvg} alt=""/></button>
        </div>
        <input
          onChange={e => setValue(e.target.value)}
          onKeyUp={handleSendMessage}
          id="name"
          type="text"
          name="name"
          placeholder={"Введите текст сообщеня"}
          value={value}
        />
        <div className="chat-input__action">
          <UploadField
            onFiles={files => console.log(files)}
            conteinerProps={{
              className: "chat-input__actions-upload-btn"
            }}
            uploadProps={{
              accept: ".jpg,.jpeg,.png,.gif,.bmp",
              multiple: "multiple"
            }}
          >
            <button><img src={CameraSvg} alt=""/></button>
          </UploadField>
          {value ?
            <button onClick={handleClickMessageSend}><img src={SendSvg} alt=""/></button>
            :
            <button><img src={MicrophoneSvg} alt=""/></button>
          }
        </div>
        <div>
          <UploadFiles/>
        </div>
      </div>
    </Fragment>
  )
};

export default ChatInput