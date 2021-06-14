// packages
import React from 'react'
import cn from 'classnames'
// components
import { NavLink, Link } from 'react-router-dom'
// hooks
import useHamburger from './useHamburger'

// styles
import style from './hamburger.module.css'
import {connect} from "react-redux";
import {dialogsActions} from "../Chat/redux/actions";
// pictures


const Hamburger = (props) => {
  const {
    openedBurgerMenu,
    setOpenedBurgerMenu
  } = useHamburger()


  return (
      <>
          <div className={ style.main }>
              <div className={ style.buttonWrapper }>
                  <div
                      className={ cn(style.navIcon4, openedBurgerMenu && style.open) }
                      onClick={ () => setOpenedBurgerMenu(!openedBurgerMenu) }
                  >
                      <span/>
                      <span/>
                      <span/>
                  </div>
              </div>
          </div>
          { openedBurgerMenu &&
          <div className={ style.hamburger }>
            <NavLink
              to="/fit"
              className={ style.navLink }
            >
              Дневник питания
            </NavLink>
            {!props.dialogId ?
              (<NavLink
                to="/chat"
                className={ style.navLink }
              >
                Чат с тренером
              </NavLink>)
              :
              (<NavLink
                to={`/chat/${props.dialogId._id}`}
                onClick={props.setCurrentDialogId.bind(this, props.dialogId._id)}
                className={ style.navLink }
              >
                Чат с тренером
              </NavLink>)
            }

            <NavLink
              to="/generalChat"
              className={ style.navLink }
            >
              Общий чат
            </NavLink>
            <NavLink
              to="/profile"
              className={ style.navLink }
            >
              Профиль
            </NavLink>
          </div> }
      </>
  )
}
export default connect(({dialogs,  user}) => ({
  dialogId: dialogs.items[0],
  user: user.data
}), dialogsActions)(Hamburger)
