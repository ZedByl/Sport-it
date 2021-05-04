import React, {useCallback, useEffect, useState} from 'react'
import style from "./Profile.module.scss";
import emailImg from './../img/dog.svg'
import callImg from './../img/call.svg'
import heightImg from './../img/height.svg'
import weightImg from './../img/weight.svg'
import ageImg from './../img/age.svg'
import {useHttp} from "../../../hooks/http.hook";


const useProfile = () => {
  const {request} = useHttp()
  const id = "60699b970fc97e23d0f994d9"
  const [userDataProfile, setUserDataProfile] = useState({
    email: '',
    name: '',
    phone: '',
    height: '',
    weight: '',
    age: ''

  })


  const getProfileData = useCallback(async () => {
    try {
      const getDataUser = await request('/api/data/get', 'POST', {id})
      setUserDataProfile(getDataUser.data)
    } catch (e) {
    }
  }, [])

  useEffect(() => {
    getProfileData().then()
  }, [])

  const fields = [
    {
      id: 1,
      img: <img className={style.image} src={emailImg} alt=""/>,
      textField: userDataProfile.email,
    },
    {
      id: 2,
      img: <img className={style.image} src={callImg} alt=""/>,
      textField: userDataProfile.phone,
    },
    {
      id: 3,
      img: <img className={style.image} src={heightImg} alt=""/>,
      textField: userDataProfile.height,
    },
    {
      id: 4,
      img: <img className={style.image} src={weightImg} alt=""/>,
      textField: userDataProfile.weight,
    },
    {
      id: 5,
      className: style.content,
      img: <img className={style.image} src={ageImg} alt=""/>,
      textField: userDataProfile.age,
    }
  ]

  return {fields, userDataProfile}

}

export default useProfile
