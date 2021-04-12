import React, {useState, useContext} from "react"
import {useHooks} from "../../Hooks/useHooks";
import {useHttp} from "../../../hooks/http.hook";
import {AuthContext} from "../../../context/AuthContext";
import styles from "../modal.module.scss";


const ProfileModal = () => {

    const {profile: {userData, setUserData,isModalProfile, setIsModalProfile}} = useHooks() || {}

    const {request, loading} = useHttp()

    const [form, setForm] = useState({
        _id: '',
        name: '',
        email: '',
        phone: '',
        height: '',
        weight: '',
        age: ''
    })

    const userDataLS = JSON.parse(localStorage.getItem('userData'))
    const id = userDataLS.userId

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value, _id: id})
    }
    const profileHandler = async() =>{
        try {
            console.log(form)
            console.log(id)
            const data = await request('api/data/update', 'POST', {...form})
            console.log(data.message)
            // data.status === 202 && setUserData({
            //         name: form.name,
            //         phone: form.phone,
            //         height: form.height,
            //         weight: form.weight,
            //         age: form.age
            //     })

            setIsModalProfile(false)
        } catch (e){

        }
    }

    return(
        <>
            <h2>Редактировать профиль</h2>
            <hr/>
            <div className={styles.components}>
                <div className={styles.card}>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        required="off"
                        onChange={changeHandler}/>
                    <label htmlFor="name">Фамилия и имя</label>
                </div>

                <div className={styles.card}>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        required="off"
                        onChange={changeHandler}/>
                    <label htmlFor="email">E-mail</label>
                </div>

                <div className={styles.card}>
                    <input
                        id="phone"
                        type="text"
                        name="phone"
                        required="off"
                        onChange={changeHandler}/>
                    <label htmlFor="phone">Номер телефона</label>
                </div>

                <div className={styles.card}>
                    <input
                        id="height"
                        type="text"
                        name="height"
                        required="off"
                        onChange={changeHandler}/>
                    <label htmlFor="height">Рост</label>
                </div>

                <div className={styles.card}>
                    <input
                        id="weight"
                        type="text"
                        name="weight"
                        required="off"
                        onChange={changeHandler}/>
                    <label htmlFor="weight">Вес</label>
                </div>

                <div className={styles.card}>
                    <input
                        id="age"
                        type="text"
                        name="age"
                        required="off"
                        onChange={changeHandler}/>
                    <label htmlFor="age">Возраст</label>
                </div>


                <p>
                    <button
                        className={styles.btn}
                        style={{marginRight: 10}}
                        disabled={loading}
                        onClick={profileHandler}
                    >
                        Сохранить изменения
                    </button>
                </p>

            </div>
        </>
    )

}

export default ProfileModal