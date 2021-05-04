import React, {useEffect, useState} from 'react'
import {useMessage} from "../../../hooks/message.hook";
import {useHttp} from "../../../hooks/http.hook";
import {useHooks} from "../../Hooks/useHooks";
import styles from '../modal.module.scss'
import store from "../../Chat/redux/store";
import userActions from "../../Chat/redux/actions/user";

const RegModal = () => {

    const {values: {setIsModalReg}} = useHooks() || {}
    const message = useMessage()
    const {loading, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', fullname: '', phone: '', height: '', weight: '', age: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const regiserHandler = async () => {
        try {
            const data = await store.dispatch(userActions.fetchUserRegister(form)).then()
            message(data.message)
            setIsModalReg(false)

        } catch (e) {
        }
    }

    return (
        <>
            <h2>Регистрация</h2>
            <hr/>
            <div className={styles.components}>
                <div className={styles.card}>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        required="off"
                        onChange={changeHandler}/>
                    <label htmlFor="email">Введите email</label>
                </div>

                <div className={styles.card}>
                    <input
                        id="fullname"
                        type="text"
                        name="fullname"
                        required="off"
                        onChange={changeHandler}/>
                    <label htmlFor="name">Введите ФИО</label>
                </div>

                <div className={styles.card}>
                    <input
                        id="phone"
                        type="number"
                        name="phone"
                        required="off"
                        onChange={changeHandler}/>
                    <label htmlFor="phone">Введите Телефон</label>
                </div>

                <div className={styles.card}>
                    <input
                        id="height"
                        type="number"
                        name="height"
                        required="off"
                        onChange={changeHandler}/>
                    <label htmlFor="height">Введите Свой рост</label>
                </div>

                <div className={styles.card}>
                    <input

                        id="weight"
                        type="number"
                        name="weight"
                        required="off"
                        onChange={changeHandler}/>
                    <label htmlFor="weight">Введите Свой вес</label>
                </div>

                <div className={styles.card}>
                    <input

                        id="age"
                        type="number"
                        name="age"
                        required="off"
                        onChange={changeHandler}/>
                    <label htmlFor="age">Введите Свой возраст</label>
                </div>

                <div className={styles.card}>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        required="off"
                        onChange={changeHandler}/>
                    <label htmlFor="password">Введите пароль</label>
                </div>

                <p><button
                    className={styles.btn}
                    style={{marginRight: 10}}
                    disabled={loading}
                    onClick={regiserHandler}
                >
                    Зарегистрироваться
                </button></p>
            </div>
        </>
    )
}

export default RegModal;
