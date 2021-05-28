import React from "react"
import PropTypes from "prop-types"
import Message from "../Message";
import classNames from "classnames"
import Loader from "../../Loader";
import "./Messages.scss"

const Messages = ({blockRef, isLoading, items, user}) => {

  return (
    <div className="chat__dialog-messages" style={{'height': 'calc(100% - 161px)'}}>
      <div
        ref={blockRef}
        className={classNames("messages", {"messages--loading": isLoading})}
      >
        {isLoading ? (
          <Loader/>
        ) : items && !isLoading ? (
            items.map(item =>
              <Message key={item._id} {...item} isMe={user._id === item.user._id}/>)
        ) : (
          <p className="chat__dialog-messages-history">Здесь будет выводиться история переписки.</p>)
        }
      </div>
    </div>
  )
}

Messages.propTypes = {
  items: PropTypes.array
};

export default Messages