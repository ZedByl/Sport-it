import React, {useCallback, useEffect} from 'react'
import style from "./Profile.module.scss";
import emailImg from './../img/dog.svg'
import callImg from './../img/call.svg'
import heightImg from './../img/height.svg'
import weightImg from './../img/weight.svg'
import ageImg from './../img/age.svg'
import {useHooks} from "../../Hooks/useHooks";
import {useHttp} from "../../../hooks/http.hook";
import {useAuth} from "../../../hooks/auth.hook";

const useProfile = () => {
    const {request, loading} = useHttp()
    const {profile: {userData, setUserData}} = useHooks() || {}
    const userDataLS = JSON.parse(localStorage.getItem('userData'))
    const id = userDataLS ? userDataLS.userId : ''



    const getProfileData = useCallback(async () => {
        try {
            if (id) {
                const getDataUser = await request('/api/data/get', 'POST', {id})
                console.log(getDataUser.data)
                setUserData({
                    name: getDataUser.data.name,
                    email: getDataUser.data.email,
                    phone: getDataUser.data.phone,
                    height: getDataUser.data.height,
                    weight: getDataUser.data.weight,
                    age: getDataUser.data.age
                })
            }
        } catch (e) {

        }
    }, [])

    useEffect(() => {
        if (userData) {
            getProfileData().then()
        }
    }, [])
    console.log(loading)
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
