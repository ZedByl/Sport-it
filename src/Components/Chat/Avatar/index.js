import React from "react"
import PropTypes from "prop-types"
import generateAvatarFromHash from "../../utils/generateAvatarFromHash.js"


import "./Avatar.scss"

function reverseString (str) {
  return str.split("").reverse().join("")
}

const Avatar = ({ user }) => {
  if (user.avatar) {
    return (
      <img
        className="avatar"
        src={user.avatar}
        alt={`Avatar ${user.fullName}`}
      />
    );
  } else {
    const revers = reverseString(user._id)
    const { color, colorLighten } = generateAvatarFromHash(revers)
    const firstChar = user.fullName[0].toUpperCase()
    return <div
      style={{
      background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`
    }}
      className="avatar avatar--symbol">
      {firstChar}
    </div>
  }
}




export default Avatar;