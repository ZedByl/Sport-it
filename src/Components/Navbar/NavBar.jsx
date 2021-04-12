// import React, {useState} from 'react';
// import {NavLink} from "react-router-dom";
// import Nav from '../Navbar/NavBar.module.scss'
// import useNavBar from "./useNavBar";
// import _ from 'lodash'
// import cn from 'classnames'
//
// const NavBar = () => {
//     const {routesNavBar,} = useNavBar()
//     const [activeLink, setActiveLink] = useState('/profile')
//     console.log(activeLink)
//     return (
//         <>
//             <div className={Nav.nav}>
//                 {_.map(routesNavBar, (route) =>
//                     <NavLink
//                         key={route.id}
//                         className={cn(Nav.test, route.to === activeLink && Nav.activeLink)}
//                         to={route.to}
//                         onClick={() => {setActiveLink(route.to)
//                             console.log(route.to)}}
//                     >
//                         {route.img}
//                         {route.name}
//                     </NavLink>
//                 )}
//             </div>
//         </>
//     );
// }
//
// export default NavBar

import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Nav from '../Navbar/NavBar.module.scss'
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
        <>
            <div className={Nav.nav}>
                {_.map(routesNavBar, (route) =>
            <NavLink
                key={route.id}
                to={route.to}
                onClick={() => setActiveLink(route.to)}
                className={cn(Nav.test, route.to === activeLink && Nav.activeLink)}
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