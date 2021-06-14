import React, {useContext} from 'react'
import {useFormik} from 'formik';
import {Form, Input} from "antd";
import * as Yup from 'yup';

import {AuthContext} from "../../../context/AuthContext";
import {useHooks} from "../../Hooks/useHooks";
import store from "./../../Chat/redux/store"
import userActions from "../../Chat/redux/actions/user";
import validateFields from "../validateFields"

import styles from '../modal.module.scss'


const LoginModal = () => {

  const {values: {setIsModalEntry}} = useHooks() || {}
  const auth = useContext(AuthContext)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Неверный e-mail адрес').required('Введите e-mail'),
      password: Yup.string()
        .required('Введите пароль')
        .min(10, 'Короткий пароль, минимум 10 символов.')
        .matches(/[a-zA-Z]/, 'Недопустимые символы.')
    }),
    onSubmit: async () => {
      try {
        if (formik.values.email === '') {
          setIsModalEntry(false)
          const data = await store.dispatch(userActions.fetchUserLogin({email: 'test@test.ru', password: 'Ybrbnf543216'})).then()
          auth.login(data.token, data.userId)
        }
        setIsModalEntry(false)
        const data = await store.dispatch(userActions.fetchUserLogin(formik.values)).then()
        auth.login(data.token, data.userId)
      } catch (e) {
      }
    },
  });

  const login = async ()  => {
    setIsModalEntry(false)
    const data = await store.dispatch(userActions.fetchUserLogin({email: 'test@test.ru', password: 'Ybrbnf543216'})).then()
    auth.login(data.token, data.userId)
  }


  return (
    <div>
      <h2>Вход</h2>
      <hr/>
      <div
        className={styles.components}
        onSubmit={formik.handleSubmit}>
        <div className={styles.int} id="formID">
        <Form.Item
          className={styles.card}
          validateStatus={validateFields(formik.errors.email)}
          help={formik.errors.email ? <div>{formik.errors.email}</div> : null}
          hasFeedback
        >
          <Input
            id="email"
            size="large"
            name="email"
            type="email"
            placeholder="E-Mail"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            defaultValue='test@test.ru'
          />
        </Form.Item>

        <Form.Item
          validateStatus={validateFields(formik.errors.password)}
          help={formik.errors.password ? <div>{formik.errors.password}</div> : null}
          hasFeedback

        >
          <Input.Password
            id="password"
            size="large"
            name="password"
            type="password"
            placeholder="Пароль"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            defaultValue='Ybrbnf543216'
          />
        </Form.Item>
        </div>

        <Form.Item>
          {formik.isSubmitting && !formik.isValid && <span>Ошибка!</span>}
          <p>
            <button
              className={styles.btn}
              style={{marginRight: 10}}
              disabled={formik.isSubmitting}
              onClick={formik.handleSubmit}
            >
              Войти
            </button>
          </p>
        </Form.Item>
        <button
          className={styles.btn}
          style={{marginRight: 10}}
          onClick={login}>
          Вход для ВКР
        </button>
      </div>
    </div>
  )
}

export default LoginModal;
