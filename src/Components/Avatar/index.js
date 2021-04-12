import React from "react"
import PropTypes from "prop-types"
import generateAvatarFromHash from "../../utils/generateAvatarFromHash.js"


import "./Avatar.scss"



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
    const { color, colorLighten } = generateAvatarFromHash(user._id)
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



Avatar.propTypes = {

};

export default Avatar;