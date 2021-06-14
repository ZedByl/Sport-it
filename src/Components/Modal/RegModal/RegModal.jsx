import React from 'react'
import {useFormik} from "formik";
import * as Yup from "yup";
import {Form, Input} from "antd";

import {useHooks} from "../../Hooks/useHooks";
import store from "../../Chat/redux/store";
import userActions from "../../Chat/redux/actions/user";
import validateFields from "../validateFields";

import styles from '../modal.module.scss'


const RegModal = () => {

  const {values: {setIsModalReg}} = useHooks() || {}

  const formik = useFormik({
    initialValues: {
      email: '',
      fullname: '',
      phone: '',
      password: '',
      password_2: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Неверный e-mail адрес')
        .required('Введите e-mail'),
      fullname: Yup.string()
        .max(40, 'Должно быть не более 40 символов')
        .required('Укажите свое имя и фамилию')
        .matches(/([а-яёa-z]+)\s([а-яёa-z]+)/i, 'Укажите данные через пробел'),
      phone: Yup.string()
        .max(12, 'Формат 89005553535 или +79005553535')
        .min(11, 'Укажите в номере не меньше 11 цифр')
        .required('Укажите свой номер телефона')
        .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i, 'Введите номер'),
      password: Yup.string()
        .required('Введите пароль')
        .min(10, 'Короткий пароль, минимум 10 символов.')
        .matches(/[a-zA-Z]/, 'Недопустимые символы.'),
      password_2: Yup.string()
        .oneOf([Yup.ref('password')], 'Пароли не совпадают')
        .required('Обязательно')
    }),
    onSubmit: async () => {
      try {
        const data = await store.dispatch(userActions.fetchUserRegister(formik.values)).then()
        setIsModalReg(false)
      } catch (e) {
      }
    }
  });


  return (
    <>
      <h2>Регистрация</h2>
      <hr/>
      <div
        className={styles.components}
        onSubmit={formik.handleSubmit}>

        <div className={styles.int}>
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
            />
          </Form.Item>

          <Form.Item
            validateStatus={validateFields(formik.errors.fullname)}
            help={formik.errors.fullname ? <div>{formik.errors.fullname}</div> : null}
            hasFeedback

          >
            <Input
              size="large"
              name="fullname"
              placeholder="Ваше имя и фамилия"
              onChange={formik.handleChange}
              value={formik.values.fullname}
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <Form.Item
            validateStatus={validateFields(formik.errors.phone)}
            help={formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
            hasFeedback

          >
            <Input
              size="large"
              name="phone"
              placeholder="Ваш телефон"
              onChange={formik.handleChange}
              value={formik.values.phone}
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <Form.Item
            validateStatus={validateFields(formik.errors.password)}
            help={formik.errors.password ? <div>{formik.errors.password}</div> : null}
            hasFeedback

          >
            <Input.Password
              size="large"
              name="password"
              type="password"
              placeholder="Пароль"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <Form.Item
            validateStatus={validateFields(formik.errors.password_2)}
            help={formik.errors.password_2 ? <div>{formik.errors.password_2}</div> : null}
            hasFeedback
          >
            <Input.Password
              size="large"
              name="password_2"
              type="password"
              placeholder="Повторите пароль"
              onChange={formik.handleChange}
              value={formik.values.password_2}
              onBlur={formik.handleBlur}
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
              Зарегистрироваться
            </button>
          </p>
        </Form.Item>

      </div>
    </>
  )
}

export default RegModal;
