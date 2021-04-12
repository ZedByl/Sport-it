import React from "react";
import {NavLink} from "react-router-dom";
import {useHooks} from "../../Hooks/useHooks";
import style from './NotAuthUsersPage.module.scss'
import img from "../img/Sport-IT Club.svg";
import salmon from "../img/img.png"

export const NotAuthUsersPage = () => {
    const {values: {setIsModalReg}} = useHooks()

    return (
        <div className={style.content}>
            <div className={style.gridText}>
                <div className={style.title}>
                    <p>Твой онлайн тренер</p>
                    <p>Sport-IT Club</p>
                </div>
                <div className={style.typography}>
                    <p>Здесь ты сможешь обрести тело своей мечты, найти новых друзей и узнать много нового </p>
                </div>
                <div className={style.but}>
                    <NavLink className={style.reg} to={"/"} onClick={() => setIsModalReg(true)}>Попробовать</NavLink>
                </div>

            </div>
            <img className={style.gridImg} src={salmon} alt={'salmon'}/>

        </div>


    )
}
export default NotAuthUsersPage;
