import React from "react"
import PropTypes from "prop-types"
import readedSvg from "../Content/img/checked.svg";
import noReadedSvg from "../Content/img/noChecked.svg";


const MessageStatus = ({ isMe, isRead, }) =>
  (isMe &&
  (isRead ? (
    <img
      className="message__icon-readed"
      src={readedSvg}
      alt="Checked icon"
    />
  ) : (
    <img
      className="message__icon-readed message__icon-readed--no"
      src={noReadedSvg}
      alt="Checked icon"
    />
  ))) || null

MessageStatus.propTypes = {
    isMe: PropTypes.bool,
  isRead: PropTypes.bool
  };




export default MessageStatus