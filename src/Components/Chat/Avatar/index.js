import React from "react"
import generateAvatarFromHash from "../utils/generateAvatarFromHash.js"


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
        alt={`Avatar ${user.fullname}`}
      />
    );
  } else {
    const revers = reverseString(user.id)
    const { color, colorLighten } = generateAvatarFromHash(revers)
    const firstChar = user.fullname[0].toUpperCase()
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