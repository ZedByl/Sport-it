import React from "react"
import "./Avatar.scss"
import generateAvatarFromHash from "../../../../../Chat/utils/generateAvatarFromHash";

function reverseString (str) {
  return str.split("").reverse().join("")
}

if (reverseString === null && undefined){

}

const Avatar = ({ msg }) => {



    const revers = reverseString(msg.userId)
    const { color, colorLighten } = generateAvatarFromHash(revers)
    const firstChar = msg.senderName[0].toUpperCase()
    return <div
      style={{
      background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`
    }}
      className="avatar avatar--symbol"
    >
      {firstChar}
    </div>

}




export default Avatar;