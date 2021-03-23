import React from "react"
import {useHooks} from "../../Hooks/useHooks";
import styles from "../modal.module.scss";

const ProfileModal = () => {

    const {profile: {setUserData}} = useHooks() || {}



    const profileHandler = async() =>{
        try {

        }catch (e){

        }
    }
    const inputs = [
        {
            id: 1,
            type: "text",
            placeholder: "Изменение имени пользователя",
            onChange: setUserData.name
        },
        {
            id: 2,
            type: "text",
            placeholder: "Изменение E-mail",
            onChange: setUserData.email
        },
        {
            id: 3,
            type: "number",
            placeholder: "Изменение номера телефона",
            onChange: setUserData.phone
        },
        {
            id: 4,
            type: "number",
            placeholder: "Изменение роста",
            onChange: setUserData.height
        },
        {
            id: 5,
            type: "number",
            placeholder: "Изменение веса",
            onChange: setUserData.weight
        },
        {
            id: 6,
            type: "number",
            placeholder: "Изменение возраста",
            onChange: setUserData.age
        }
    ]
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
                        onChange={}/>
                    <label htmlFor="name">Фамилия и имя</label>
                </div>

                <div className={styles.card}>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        required="off"
                        onChange={}/>
                    <label htmlFor="email">E-mail</label>
                </div>

                <div className={styles.card}>
                    <input
                        id="phone"
                        type="text"
                        name="phone"
                        required="off"
                        onChange={}/>
                    <label htmlFor="phone">Номер телефона</label>
                </div>

                <div className={styles.card}>
                    <input
                        id="height"
                        type="text"
                        name="height"
                        required="off"
                        onChange={}/>
                    <label htmlFor="height">Рост</label>
                </div>

                <div className={styles.card}>
                    <input
                        id="weight"
                        type="text"
                        name="weight"
                        required="off"
                        onChange={}/>
                    <label htmlFor="weight">Вес</label>
                </div>

                <div className={styles.card}>
                    <input
                        id="age"
                        type="text"
                        name="age"
                        required="off"
                        onChange={}/>
                    <label htmlFor="age">Возраст</label>
                </div>


                <p>
                    <button
                        className={styles.btn}
                        style={{marginRight: 10}}
                        disabled={}
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