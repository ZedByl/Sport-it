import React, {useEffect, useContext, useState} from 'react'
import {AuthContext} from "../../../context/AuthContext";
import {useMessage} from "../../../hooks/message.hook";
import {useHttp} from "../../../hooks/http.hook";
import {useHooks} from "../../Hooks/useHooks";
import store from "./../../Chat/redux/store"
import styles from '../modal.module.scss'
import userActions from "../../Chat/redux/actions/user";


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
  const {loading, error, clearError} = useHttp()
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
      setUserData({})
      setIsModalEntry(false)
      const data = await store.dispatch(userActions.fetchUserLogin(form)).then()
      auth.login(data.token, data.userId)
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
