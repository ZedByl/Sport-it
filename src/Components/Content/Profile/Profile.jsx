import React, {useEffect} from "react";
import {connect} from "react-redux";

import {useHooks} from "../../Hooks/useHooks";
import Modal from "../../Modal/Modal";
import Loader from "../../Loader";
import Avatar from "../../Chat/Avatar";
import ProfileModal from "../../Modal/ProfileModal/ProfileModal";
import './Profile.scss';
import pen from './../img/pen.svg';
import emailImg from "../img/dog.svg";
import callImg from "../img/call.svg";
import heightImg from "../img/height.svg";
import weightImg from "../img/weight.svg";
import ageImg from "../img/age.svg";
import {dialogsActions} from "../../Chat/redux/actions";
import socket from "../../Chat/core/socket";


const Profile = ({user}) => {
  const {profile: {isModalProfile, setIsModalProfile}} = useHooks()



  return (
    <div className="profile">
      <div className="profileHead">
        <div className="profileHead__avatar">
          <Avatar user={user} />
        </div>
        <p className="profileName">{user.fullname}</p>
        <button className="profileEdit"
                onClick={() => setIsModalProfile(true)}>
          Редактировать
          <img className="profileImgBtn" src={pen} alt="pen"/>
        </button>
      </div>
      <div className="profileContent">
        <div className="fields">
          <img className="image" src={emailImg} alt=""/>
          <p>{user.email}</p>
        </div>
        <div className="fields">
          <img className="image" src={callImg} alt=""/>
          <p>{user.phone}</p>
        </div>
        <div className="fields">
          <img className="image" src={heightImg} alt=""/>
          <p>{user.height}</p>
        </div>
        <div className="fields">
          <img className="image" src={weightImg} alt=""/>
          <p>{user.weight}</p>
        </div>
        <div className="fields">
          <img className="image" src={ageImg} alt=""/>
          <p>{user.age}</p>
        </div>
      </div>
      {isModalProfile && <Modal isOpen={isModalProfile} isClose={setIsModalProfile}>
        <ProfileModal/>
      </Modal>}
    </div>
  )
}
export default connect(({user, dialogs}) => ({
  user: user.data,
  dialogId: dialogs.items[0]
}),  dialogsActions)(Profile)