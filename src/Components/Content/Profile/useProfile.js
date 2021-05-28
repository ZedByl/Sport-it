import React from 'react'
import style from "./Profile.scss";
import emailImg from './../img/dog.svg'
import callImg from './../img/call.svg'
import heightImg from './../img/height.svg'
import weightImg from './../img/weight.svg'
import ageImg from './../img/age.svg'
import {connect} from "react-redux";
import Loader from "../../Loader";


const useProfile = ({ user }) => {

  if(user === null) {
    return <Loader />
  }


  const fields = [
    {
      id: 1,
      img: <img className={style.image} src={emailImg} alt=""/>,
      textField: user.email,
    },
    {
      id: 2,
      img: <img className={style.image} src={callImg} alt=""/>,
      textField: user.phone,
    },
    {
      id: 3,
      img: <img className={style.image} src={heightImg} alt=""/>,
      textField: user.height,
    },
    {
      id: 4,
      img: <img className={style.image} src={weightImg} alt=""/>,
      textField: user.weight,
    },
    {
      id: 5,
      className: style.content,
      img: <img className={style.image} src={ageImg} alt=""/>,
      textField: user.age,
    }
  ]

  return {fields}

}

export default connect(({ user }) => ({
  user: user.data
}))(useProfile)