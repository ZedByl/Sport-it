import React, { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Time from "../Time"
import MessageStatus from "../MessageStatus";
import convertCurrentTime from "../utils/convertCurrentTime.js";

import waveSVG from "../../Content/img/Combined Shape.svg"
import playSVG from "../../Content/img/play.svg"
import pauseSVG from "../../Content/img/pause.svg"

import "./Message.scss"



  const MessageAudio = ({ audioSrc }) => {
    const [isPlay, setIsPlay] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)

    const audioElem = useRef(null)

    const togglePlay = () => {
      if (!isPlay) {
        audioElem.current.play()
      } else {
        audioElem.current.pause()
      }
    }

    useEffect(() => {
      audioElem.current.addEventListener(
        'playing',
        () => {
          setIsPlay(true)
        },
        false
      )
      audioElem.current.addEventListener(
        'ended',
        () => {
          setIsPlay(false)
          setProgress(0)
          setCurrentTime(0)
        },
        false
      )
      audioElem.current.addEventListener(
        'pause',
        () => {
          setIsPlay(false)
        },
        false
      )
      audioElem.current.addEventListener('timeupdate', () => {
        const duration = (audioElem.current && audioElem.current.duration) || 0;
        setCurrentTime(audioElem.current.currentTime);
        setProgress((audioElem.current.currentTime / duration) * 100);
      })
    }, [])

    return(
      <div className="message__audio">
        <audio ref={audioElem} src={audioSrc} preload="auto" />
        <div className="message__audio-progress" style={{ width: progress +'%'}}> </div>
        <div className="message__audio-info">
          <div className="message__audio-btn">
            <button onClick={togglePlay}>
              {isPlay ? (
                <img src={pauseSVG} alt="pause svg"/>
              ) : (
                <img src={playSVG} alt="play svg"/>
              )}
            </button>
          </div>
          <div className="message__audio-wave">
            <img src={waveSVG} alt="wave svg" />
          </div>
          <span className="message__audio-duration">{convertCurrentTime(currentTime)}</span>
        </div>
      </div>
    )
  }

const Message = ({
                   avatar,
                   user,
                   text,
                   date,
                   isMe,
                   isRead,
                   attachments,
                   isTyping,
                   audio
                 }) => {

  return (
  <div
    className={classNames("message", {
      "message--isMe" : isMe,
      "message--is-typing" : isTyping,
      "message--is-audio" : audio,
      "message--image" : attachments && attachments.length === 1
    })}
  >
    <div className="message__content">
      <MessageStatus isMe={isMe} isReaded={isRead}/>
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullName}`}/>
      </div>
      <div className="message__info">
        {(audio || text || isTyping) && (
          <div className="message__bubble">
            {text && <p className="message__text">{text}</p>}
            {isTyping && (
              <div className="message__typing">
                <span/>
                <span/>
                <span/>
              </div>
            )}
            {audio && <MessageAudio audioSrc={audio} /> }
          </div>
        )}

        {attachments && (
          <div className="message__attachments">
            {attachments.map(item => (
            <div className="message__attachments-item">
              <img src={item.url} alt={item.fileName}/>
            </div>
            ))}
          </div>
        )}

        {date && (
          <span className="message__date">
          <Time date={date} />
        </span>
        )}

      </div>
    </div>
  </div>
)}


Message.defaultProps = {
  user: {}
}

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isMe: PropTypes.bool,
  isRead: PropTypes.bool,
  isTyping: PropTypes.bool,
  audio: PropTypes.string,
};

export default Message;