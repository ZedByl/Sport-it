import React from "react";
import style from './Profile.module.scss';
import profile from './../img/profile.svg';
import pen from './../img/pen.svg';
import useProfile from './useProfile';
import _ from 'lodash';
import Modal from './../../Modal/Modal';
import './../../Modal/Modal.css'

const Profile = () => {
    const {
        editProfile,
        setEditProfile,
        fields,
        inputs,
        editProfileName
    } = useProfile() || {}
    return (
        <>
            <div className={style.profileHead}>
                <div className={style.profileLogo}>
                    <img className={style.profileImg} src={profile} alt="profile"/>
                    <p className={style.profileTyp}>{editProfileName}</p>
                    <button className={style.profileBtn} onClick={() => setEditProfile({
                        ...editProfile, modal1: true
                    })}>
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


            <Modal
                title={'Заполните все поля это важно для нас 🙃'}
                isOpened={editProfile.modal1}
                onModalClose={() => setEditProfile({...editProfile, modal1: false})}
            >
                <div className={style.inputs}>
                    {_.map(inputs, (input) =>
                        <input
                            key={input.id}
                            type={input.type}
                            placeholder={input.placeholder}
                            onChange={(e) => input.onChange(e.target.value)}/>
                    )}
                    <button className={style.btnInputs} onClick={() => setEditProfile(false)}>Сохранить изменения</button>
                </div>
            </Modal>
        </>
    )
}
export default Profile
