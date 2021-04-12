import React, {useEffect, useContext, useState} from 'react'
import {AuthContext} from "../../../context/AuthContext";
import {useMessage} from "../../../hooks/message.hook";
import {useHttp} from "../../../hooks/http.hook";
import {useHooks} from "../../Hooks/useHooks";
import styles from '../modal.module.scss'


const LoginModal = () => {
    const {
        values: {
            setIsModalEntry
        },
        profile: {
            setUserData
        }
    } = useHooks() || {}
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            setUserData({})
            const profileData = {
                email: data.email,
                name: data.name,
                phone: data.phone,
                height: data.height,
                weight: data.weight,
                age: data.age
            }
            auth.login(data.token, data.userId)
            setIsModalEntry(false)
        } catch (e) {
        }
    }


    return (
        <>
            <h2>Вход</h2>
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
                        id="password"
                        type="password"
                        name="password"
                        required="off"
                        onChange={changeHandler}/>
                    <label htmlFor="password">Введите пароль</label>
                </div>


                <p>
                    <button
                        className={styles.btn}
                        style={{marginRight: 10}}
                        disabled={loading}
                        onClick={loginHandler}
                    >
                        Войти
                    </button>
                </p>

            </div>
        </>
    )
}

export default LoginModal;