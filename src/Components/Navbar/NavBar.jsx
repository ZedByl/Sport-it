import React from 'react';
import {NavLink} from "react-router-dom";
import style from '../Navbar/NavBar.module.scss'
import useNavBar from "./useNavBar";
import _ from 'lodash'
import cn from 'classnames'

const NavBar = () => {
    const {
        routesNavBar,
        setActiveLink,
        activeLink
    } = useNavBar()

    return (
            <div className={style.nav}>
                {_.map(routesNavBar, (route) =>
            <NavLink
                key={route.id}
                to={route.to}
                onClick={() => setActiveLink(route.to)}
                className={cn(style.test, route.to === activeLink && style.activeLink)}
            >
              {route.img}
                {route.name}
            </NavLink>
                )}
            </div>
    )
}

export default NavBar
