import React, {useState, useEffect} from "react";
import {connect} from "react-redux"

import {dialogsActions} from "../redux/actions";
import Dialogs from "../Dialogs"
import socket from "../core/socket";


const DialogsBased = ({fetchDialogs, currentDialogId, setCurrentDialogId, items, userId}) => {
  const [inputValue, setValue] = useState("")
  const [filtred, setFiltredItems] = useState(Array.from(items))
  const onChangeInput = (value = '') => {
    setFiltredItems(
      items.filter(
        dialog =>
          dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
          dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    )
    setValue(value)
  }

  window.fetchDialogs = fetchDialogs

  useEffect(() => {
    if (items.length) {
      onChangeInput()
    }
  }, [items])

  useEffect(() => {
    fetchDialogs()
    socket.on("SERVER:DIALOG_CREATED", fetchDialogs)
    socket.on("SERVER:NEW_MESSAGE", fetchDialogs)
    return () => {
      socket.removeListener("SERVER:DIALOG_CREATED", fetchDialogs)
      socket.removeListener("SERVER:NEW_MESSAGE", fetchDialogs)
    }
  }, [])


  return (
    <Dialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
      сurrentDialogId={currentDialogId}
    />
  )
}
export default connect(({dialogs}) => dialogs, dialogsActions)(DialogsBased)