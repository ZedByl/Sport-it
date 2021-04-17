import React, {useContext, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {useHooks} from "../Hooks/useHooks";
import {AuthContext} from "../../context/AuthContext";
import {Modal} from "../Modal/Modal";
import LoginModal from '../Modal/LoginModal/LoginModal'
import RegModal from "../Modal/RegModal/RegModal";

import Head from '../Header/Header.module.scss';
import logo from './../Content/img/logo.svg';
import img from '../Content/img/Sport-IT Club.svg';


const Header = (props) => {
    const auth = useContext(AuthContext)
    const history = useHistory()

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    const {values} = useHooks()
    const {
        isModalEntry,
        setIsModalReg,
        setIsModalEntry,
        isModalReg
    } = values || {}

    return (

        <div className={Head.header}>
            <div className={Head.gridLogo}>
               <img className={Head.logo} src={logo} alt={'logo'}/>
            </div>
            <div className={Head.gridTextLogo}>
                <img className={Head.gridImg} alt={'logoTxt'} src={img} />
            </div>
            <div className={Head.sign}>
            {!props.isAuth ?
                <div>
                    <NavLink className={Head.link} to={"/"} onClick={() => setIsModalEntry(true)}>Вход</NavLink>
                    <NavLink className={Head.link} to={"/"} onClick={() => setIsModalReg(true)}>Регистрация</NavLink>
                </div> :
                <div >
                    <NavLink className={Head.link} to={"/"} onClick={logoutHandler}>Выход</NavLink>
                </div>}
            </div>
            {isModalEntry && <Modal isOpen={isModalEntry} isClose={setIsModalEntry}>
                <div>
                    <LoginModal/>
                </div>
            </Modal>}
            {isModalReg && <Modal isOpen={isModalReg} isClose={setIsModalReg}>
                <div>
                    <RegModal/>
                </div>
            </Modal>}
        </div>

    )
}

export default Header
