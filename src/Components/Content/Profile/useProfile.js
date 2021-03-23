import React, {useState} from 'react'
import style from "./Profile.module.scss";
import emailImg from './../img/dog.svg'
import callImg from './../img/call.svg'
import heightImg from './../img/height.svg'
import weightImg from './../img/weight.svg'
import ageImg from './../img/age.svg'
import {useHooks} from "../../Hooks/useHooks";


const useProfile = () => {

    const {profile: {userData}} = useHooks() || {}

    const fields = [
        {
            id: 1,
            img: <img className={style.image} src={emailImg} alt=""/>,
            textField: userData.email,
        },
        {
            id: 2,
            img: <img className={style.image} src={callImg} alt=""/>,
            textField: userData.phone,
        },
        {
            id: 3,
            img: <img className={style.image} src={heightImg} alt=""/>,
            textField: userData.height,
        },
        {
            id: 4,
            img: <img className={style.image} src={weightImg} alt=""/>,
            textField: userData.weight,
        },
        {
            id: 5,
            className: style.content,
            img: <img className={style.image} src={ageImg} alt=""/>,
            textField: userData.age,
        }
    ]

    return {
        fields
    }

}

export default useProfile
