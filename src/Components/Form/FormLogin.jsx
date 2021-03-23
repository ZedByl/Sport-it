import React, {useState, useContext, useEffect} from 'react'
import {AuthContext} from "../../context/AuthContext";
import {useMessage} from "../../hooks/message.hook";
import {useHttp} from "../../hooks/http.hook";
import style from './Forms.module.scss'
import Modal from "../Modal/Modal";

const FormLogin = () => {

    // const auth = useContext(AuthContext)
    // const message = useMessage()
    // const {loading, request, error, clearError} = useHttp()
    // const [form, setForm] = useState({
    //     email: '', password: ''
    // })
    //
    // useEffect(() => {
    //     message(error)
    //     clearError()
    // }, [error, message, clearError])
    //
    // const changeHandler = event => {
    //     setForm({...form, [event.target.name]: event.target.value})
    // }
    //
    // const regiserHandler = async () => {
    //     try {
    //         const data = await request('/api/auth/register', 'POST', {...form})
    //         message(data.message)
    //     } catch (e) {
    //     }
    // }
    //
    // const loginHandler = async () => {
    //     try {
    //         const data = await request('/api/auth/login', 'POST', {...form})
    //         auth.login(data.token, data.userId)
    //     } catch (e) {
    //     }
    // }
    //
    // return (
    //     <>
    //         <div className={style.form}>
    //             <span className="">Авторизация</span>
    //             <div>
    //                 <div className="">
    //                     <input
    //                         placeholder="Введите email"
    //                         id="email"
    //                         type="text"
    //                         name="email"
    //                         className=""
    //                         onChange={changeHandler}/>
    //                     <label htmlFor="first_name">Email</label>
    //                 </div>
    //
    //                 <div className="">
    //                     <input
    //                         placeholder="Введите пароль"
    //                         id="password"
    //                         type="password"
    //                         name="password"
    //                         className=""
    //                         onChange={changeHandler}/>
    //
    //                     <label htmlFor="first_name">Пароль</label>
    //                 </div>
    //
    //             </div>
    //
    //
    //             <button
    //                 className=""
    //                 style={{marginRight: 10}}
    //                 disabled={loading}
    //                 onClick={loginHandler}
    //             >
    //                 Войти
    //             </button>
    //             <button
    //                 className=""
    //                 onClick={regiserHandler}
    //                 disabled={loading}
    //             >
    //                 Регистрация
    //             </button>
    //         </div>
    //     </>
    // );

}
export default FormLogin