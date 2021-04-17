import React from "react";
import {useHooks} from "../../Hooks/useHooks";
import {Modal} from "../../Modal/Modal";
import useProfile from './useProfile';
import _ from 'lodash';
import ProfileModal from "../../Modal/ProfileModal/ProfileModal";
import style from './Profile.module.scss';
import profile from './../img/profile.svg';
import pen from './../img/pen.svg';

const Profile = () => {
    const {profile: { isModalProfile, setIsModalProfile}} = useHooks()
    const {
        fields, userDataProfile
    } = useProfile() || {}

    return (
        <>
                <div className={style.Content}>
                    <div className={style.profileHead}>
                        <div className={style.profileLogo}>
                            <img className={style.profileImg} src={profile} alt="profile"/>
                            <p className={style.profileTyp}>{userDataProfile.name}</p>
                            <button className={style.profileBtn} onClick={() => {setIsModalProfile(true)}}>
                                Редактировать
                                <img className={style.profileImgBtn} src={pen} alt="pen"/>
                            </button>
                        </div>
                    </div>


                    <div className={style.profileContent}>
                        {_.map(fields, (field) =>
                            <div key={field.id} className={style.content}>
                                {field.img}
                                {field.textField}
                            </div>
                        )}
                    </div>
                </div>
                {isModalProfile && <Modal isOpen={isModalProfile} isClose={setIsModalProfile}>
                    <ProfileModal/>
                </Modal>}
        </>
    )
}
export default Profile
