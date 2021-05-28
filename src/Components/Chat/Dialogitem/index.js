import React from "react"
import Avatar from "../Avatar";
import MessageStatus from "../MessageStatus";
import classnames from "classnames"
import {format, isToday} from "date-fns"
import parseISO from 'date-fns/parseISO'
import {NavLink} from "react-router-dom"
import "./Dialogitem.scss"
import reactStringReplace from "react-string-replace";
import {Emoji} from "emoji-mart";




const getMessageTime = created_at => {
  const newDate = parseISO(created_at)
  if (isToday(newDate)) {
    return format(newDate, "HH:mm")
  } else {
    return format(newDate, "dd.MM.yyyy")
  }
}


const DialogItem = ({_id, isMe, currentDialogId, lastMessage, onSelect, partner, item}) => {

  return (
    <NavLink style={{textDecoration: 'none', color: 'black'}}
             to={`/chat/${_id}`}
             onClick={onSelect.bind(this, _id)}
    >

      <div className={classnames("dialogs__item", {
        "dialogs__item--online": partner.isOnline,
        "dialogs__item--selected": currentDialogId === _id
      })}
      >

        <div className="dialogs__item-avatar">
          {isMe ? <Avatar user={item.partner}/> : <Avatar user={item.author}/>}
        </div>
        <div className="dialogs__item-info">
          <div className="dialogs__item-info-top">
            {isMe ? <b>{item.partner.fullname}</b> : <b>{item.author.fullname}</b>}
            <span>{getMessageTime(lastMessage.createdAt)}</span>
          </div>
          <div className="dialogs__item-info-bottom">
            <p>{reactStringReplace(lastMessage.text, /:(.+?):/g, (match, i) => (
              <Emoji emoji={match} set="apple" size={20}/>
            ))}</p>
            {isMe && <MessageStatus /*isMe={true} isRead={true}*/ />}
            {lastMessage.unRead > 0 && (
              <div className="dialogs__item-info-bottom-count">{lastMessage.unRead > 9 ? '+9' : lastMessage.unRead}</div>
            )}
          </div>
        </div>
      </div>
    </NavLink>
  );
}


export default DialogItem;