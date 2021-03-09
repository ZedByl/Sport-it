import React from 'react';
import {NavLink} from "react-router-dom";
import Nav from '../Navbar/NavBar.module.scss'
import useNavBar from "./useNavBar";
import _ from 'lodash'
import cn from 'classnames'

const NavBar = () => {
    const {routesNavBar,activeLink,setActiveLink} = useNavBar()
    return (
        <>
            <div className={Nav.nav}>
                    {_.map(routesNavBar, (route) =>
                        <NavLink
                            key={route.id}
                            className={cn(Nav.test, route.to === activeLink && Nav.activeLink)}
                            to={route.to}
                            onClick={() => setActiveLink(route.to)}
                        >
                            {route.img}
                            {route.name}
                        </NavLink>
                    )}
            </div>
        </>
    );
}

export default NavBar
