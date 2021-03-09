import React from 'react'
import {TextField, PrimaryButton} from '@fluentui/react'
import {UseHooks} from "../Hooks/useHooks";
import {useHistory} from "react-router-dom";
import {useFormik} from "formik";
import style from "./Forms.module.scss";

const validate = valuesFormik => {
    const errors = {}
    if (!valuesFormik.login) {
        errors.login = 'Обязательное поле'
    } else if (valuesFormik.login.length > 20) {
        errors.login = "Не больше 10 символов в поле логин"
    }
    if (!valuesFormik.password) {
        errors.password = 'Обязательно'
    } else if (valuesFormik.password.length > 20 ) {
        errors.password = 'Не больше 10 символов в пароле'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valuesFormik.password)) {
        errors.password = 'некоректный пароль'
    }
    return errors
}

const FormLogin = () => {
    const {values, formLogin} = UseHooks()
    const {setAuthNavBar,setIsModalEntry} = values
    const {setLoginEntry,setPasswordEntry} = formLogin
    let history = useHistory()
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validate,
        onSubmit: valuesFormik => {
            history.push('/profile')
            setAuthNavBar(true)
            setIsModalEntry(false)
            setLoginEntry(valuesFormik.login)
            setPasswordEntry(valuesFormik.password)
        },
    })



    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={style.forms}>
                <div className={style.formFlu}>
                    <TextField
                        id='login'
                        name='login'
                        type='text'
                        label="Логин:"
                        onBlur={formik.handleBlur}
                        value={formik.values.login}
                        onChange={formik.handleChange}/> <br/>

                    {formik.touched.login && formik.errors.login ? (
                        <div>{formik.errors.login}</div>
                    ) : null}

                    <TextField
                        id='password'
                        name='password'
                        type='text'
                        label="Пароль:"
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        onChange={formik.handleChange}/>

                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}

                    <br/>
                    <PrimaryButton type="submit">Вход</PrimaryButton>

                </div>

            </div>
        </form>
    )
}
export default FormLogin