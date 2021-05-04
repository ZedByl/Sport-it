// packages
import React, {useContext} from "react";
import {NavLink, useHistory} from "react-router-dom";
// components
import Modal from "../Modal/Modal";
import LoginModal from '../Modal/LoginModal/LoginModal'
import RegModal from "../Modal/RegModal/RegModal";
// hooks
import {useHooks} from "../Hooks/useHooks";
import {AuthContext} from "../../context/AuthContext";
// styles
import style from '../Header/Header.module.scss';
// images
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
        <div className={style.header}>
            <img className={style.logo} src={logo} alt={'logo'}/>
            <img className={style.textLogo} alt={'logoTxt'} src={img}/>
            <div className={style.sign}>
                {!props.isAuth ?
                    <div>
                        <NavLink className={style.link} to={"/"} onClick={() => setIsModalEntry(true)}>
                            Вход
                        </NavLink>
                        <NavLink className={style.link} to={"/"} onClick={() => setIsModalReg(true)}>
                            Регистрация
                        </NavLink>
                    </div> :
                    <div>
                        <NavLink className={style.link} to={"/"} onClick={logoutHandler}>Выход</NavLink>
                    </div>
                }
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
