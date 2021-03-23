import React from "react";
import style from './Profile.module.scss';
import profile from './../img/profile.svg';
import pen from './../img/pen.svg';
import useProfile from './useProfile';
import _ from 'lodash';
import NavBar from "../../Navbar/NavBar";
import {useHooks} from "../../Hooks/useHooks";

const Profile = () => {
    const {profile: {userData}} = useHooks()
    const {
        fields,
    } = useProfile() || {}
    return (
        <>
            <div className={style.main}>
                <div className={style.Nav}>
                    <NavBar/>
                </div>
                <div className={style.Content}>
                    <div className={style.profileHead}>
                        <div className={style.profileLogo}>
                            <img className={style.profileImg} src={profile} alt="profile"/>
                            <p className={style.profileTyp}>{userData.name}</p>
                            <button className={style.profileBtn}>
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
            </div>
        </>
    )
}
export default Profile
