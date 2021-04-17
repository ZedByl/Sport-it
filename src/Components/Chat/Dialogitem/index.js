import React from "react"

import Avatar from "../Avatar/index";
import MessageStatus from "../MessageStatus/index";
import classnames from "classnames"
import {format, isToday}  from "date-fns"
import {ru} from "date-fns/locale"


import "./Dialogitem.scss"


const getMessageTime = created_at => {
  if (isToday(created_at)) {
    return format(created_at, "HH:mm")
  } else {
    return format(created_at, "dd.MM.yyyy")
  }
}


const DialogItem = ({ user, unRead, created_at, text, isMe }) => (
  <div className={classnames('dialogs__item', {
    'dialogs__item--online' : user.isOnline
  })}>
    <div className="dialogs__item-avatar">
      <Avatar user={user}/>
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullName}</b>
        <span>{getMessageTime(created_at)}</span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{text}</p>
        {isMe && <MessageStatus isMe={true} isRead={true}/>}
        {unRead > 0 && (
          <div className="dialogs__item-info-bottom-count">{unRead > 9 ? '+9' : unRead}</div>
        )}
      </div>
    </div>
  </div>
);


export default DialogItem;