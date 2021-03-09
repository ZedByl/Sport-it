import React from "react";
import {NavLink} from "react-router-dom";
import {UseHooks} from "../Hooks/useHooks";
import FormLogin from "../Form/FormLogin";
import {Modal} from "office-ui-fabric-react";
import FormAuth from "../Form/FormAuth";
import Head from '../Header/Header.module.scss';
import logo from './../Content/img/logo.svg';
import img from '../Content/img/Sport-IT Club.svg';



const Header = () => {
    const {values} = UseHooks()
    const {
        isAuthNavBar,
        setIsModalEntry,
        setIsModalReg,
        setAuthNavBar,
        isModalEntry,
        isModalReg
    } = values || {}

    return (

        <div className={Head.header}>
            <div className={Head.gridLogo}>
               <img className={Head.logo} src={logo} alt={'logo'}/>
            </div>
            <div className={Head.gridTextLogo}>
                <img className={Head.gridImg} src={img} />
            </div>
            <div className={Head.sign}>
            {!isAuthNavBar ?
                <div>
                    <NavLink className={Head.link} to={"/"} onClick={() => setIsModalEntry(true)}>Вход</NavLink>
                    <NavLink className={Head.link} to={"/"} onClick={() => setIsModalReg(true)}>Регистрация</NavLink>
                </div> :
                <div >
                    <NavLink className={Head.link} to={"/"} onClick={() => setAuthNavBar(false)}>Выход</NavLink>
                </div>}
            </div>
            <div>
                {isModalEntry && <Modal
                    isOpen={isModalEntry}
                    onDismiss={() => setIsModalEntry(false)}>
                    <FormLogin/>
                </Modal>}

                {isModalReg && <Modal
                    isOpen={isModalReg}
                    onDismiss={() => setIsModalReg(false)}>
                    <FormAuth/>
                </Modal>}
            </div>
        </div>

    )
}

export default Header
