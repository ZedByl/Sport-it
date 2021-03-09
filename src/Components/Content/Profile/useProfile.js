import React, {useState} from 'react'
import style from "./Profile.module.scss";
import emailImg from './../img/dog.svg'
import callImg from './../img/call.svg'
import heightImg from './../img/height.svg'
import weightImg from './../img/weight.svg'
import ageImg from './../img/age.svg'
const useProfile = () => {
    const [emailProfile, setEmailProfile] = useState('nik.cet@mail.ru');
    const [phone, setPhone] = useState('+7(921)-125-40-94');
    const [height, setHeight] = useState('181');
    const [weight, setWeight] = useState('120кг');
    const [age, setAge] = useState('23');
    const [editProfile, setEditProfile] = useState(false);
    const [editProfileName, setEditProfileName] = useState('Андрей Андреев');

    const fields = [
        {
            id: 1,
            img: <img className={style.image} src={emailImg} alt=""/>,
            textField: emailProfile,
        },
        {
            id: 2,
            img: <img className={style.image} src={callImg} alt=""/>,
            textField: phone,
        },
        {
            id: 3,
            img: <img className={style.image} src={heightImg} alt=""/>,
            textField: height,
        },
        {
            id: 4,
            img: <img className={style.image} src={weightImg} alt=""/>,
            textField: weight,
        },
        {
            id: 5,
            className: style.content,
            img: <img className={style.image} src={ageImg} alt=""/>,
            textField: age,
        }
    ]
    const inputs = [
        {
            id: 1,
            type: "text",
            placeholder: "Изменение имени пользователя",
            onChange: setEditProfileName
        },
        {
            id: 2,
            type: "text",
            placeholder: "Изменение E-mail",
            onChange: setEmailProfile
        },
        {
            id: 3,
            type: "number",
            placeholder: "Изменение номера телефона",
            onChange: setPhone
        },
        {
            id: 4,
            type: "number",
            placeholder: "Изменение роста",
            onChange: setHeight
        },
        {
            id: 5,
            type: "number",
            placeholder: "Изменение веса",
            onChange: setWeight
        },
        {
            id: 6,
            type: "number",
            placeholder: "Изменение возраста",
            onChange: setAge
        }
    ]
    return {
        editProfile,
        setEditProfile,
        fields,
        inputs,
        editProfileName
    }

}

export default useProfile
