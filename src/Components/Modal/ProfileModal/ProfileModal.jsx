import React, {useState} from "react"
import {useHooks} from "../../Hooks/useHooks";
import {useHttp} from "../../../hooks/http.hook";
import styles from "../modal.module.scss";
import {Form, Input} from "antd";
import validateFields from "../validateFields";
import {useFormik} from "formik";
import * as Yup from "yup";
import store from "../../Chat/redux/store";
import userActions from "../../Chat/redux/actions/user";


const ProfileModal = () => {

    // const {profile: {setIsModalProfile}} = useHooks() || {}
    //
    // const userDataLS = JSON.parse(localStorage.getItem('userData'))
    // const id = userDataLS.userId
    //
    // const changeHandler = event => {
    //     setForm({...form, [event.target.name]: event.target.value, _id: id})
    // }
    // const profileHandler = async() =>{
    //     try {
    //         await request('api/data/update', 'POST', {...form})
    //         setIsModalProfile(false)
    //     } catch (e){
    //
    //     }
    // }

    const {values: {setIsModalReg}} = useHooks() || {}

    return(
        <>
            <h2>Редактировать профиль</h2>
            <hr/>
            <div className={styles.components}>
                <div className={styles.int}>
                    <Form.Item>
                        <Input
                          size="large"
                          name="fullname"
                          placeholder="Ваше имя и фамилия"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Input
                          size="large"
                          name="phone"
                          placeholder="Ваш телефон"
                        />
                    </Form.Item>

                    <Form.Item
                      className={styles.card}>
                        <Input
                          size="large"
                          name="height"
                          type="height"
                          placeholder="Ваш рост"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Input
                          size="large"
                          name="weight"
                          type="weight"
                          placeholder="Ваш вес"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Input
                          size="large"
                          name="age"
                          type="age"
                          placeholder="Ваш возраст"
                        />
                    </Form.Item>

                </div>

                <Form.Item>
                    <p>
                        <button
                          className={styles.btn}
                          style={{marginRight: 10}}
                        >
                            Сохранить изменения
                        </button>
                    </p>
                </Form.Item>

            </div>
        </>
    )

}

export default ProfileModal
