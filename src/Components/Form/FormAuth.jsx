import React from 'react'
import style from './Forms.module.scss'
import {TextField, PrimaryButton} from '@fluentui/react'
import {UseHooks} from "../Hooks/useHooks";
import {useHistory} from 'react-router-dom'
import {useFormik} from "formik";

const validate = valuesFormik => {
    const errors = {}
    if (!valuesFormik.login) {
        errors.login = 'обязательно'
    } else if (valuesFormik.login.length > 10) {
        errors.login = "Не больше 10 символов в поле логин"
    }
    if (!valuesFormik.email) {
        errors.email = 'обязательно'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valuesFormik.email)) {
        errors.email = 'неверный E-mail адрес'
    }
    if (!valuesFormik.password) {
        errors.password = 'обязательно'
    } else if (valuesFormik.password.length > 10) {
        errors.password = 'Не больше 10 символов в пароле'
    } else if (!/^[._%+/?,'"}{-]+]]/i.test(valuesFormik.password)){
        errors.password = 'Некорректный пароль'
    }
}

const FormAuth = () => {
    const {values, formAuth} = UseHooks()
    const {setAuthNavBar,setIsModalReg} = values || {}
    const {setLoginReg,setEmailReg,setPasswordReg} = formAuth || {}
    let history = useHistory()
    const formik = useFormik({
        initialValues: {
            login: '',
            email: '',
            password: '',
        },
        validate,
        onSubmit: valuesFormik => {
            history.push('/profile')
            setAuthNavBar(true)
            setIsModalReg(false)
            setLoginReg(valuesFormik.login)
            setEmailReg(valuesFormik.email)
            setPasswordReg(valuesFormik.password)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
        <div className={style.forms}>
            <div className={style.formFlu}>
                <TextField
                    id = 'login'
                    name = 'login'
                    type='text'
                    label="Логин:"
                    onBlur={formik.handleBlur}
                    value={formik.values.login}
                    onChange={formik.handleChange}/> <br/>

                {formik.touched.login && formik.errors.login ? (
                <div>{formik.errors.login}</div>
                ) : null}

                <TextField
                    id = 'email'
                    name = 'email'
                    type='text'
                    label="Почта:"
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    onChange={formik.handleChange}/> <br/>

                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}

                <TextField
                    id = 'password'
                    name = 'password'
                    type='text'
                    label="Пароль:"
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    onChange={formik.handleChange}/> <br/>

                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}

                <PrimaryButton type="submit">Регистрация</PrimaryButton>
            </div>
        </div>
        </form>
    )
}
export default FormAuth
