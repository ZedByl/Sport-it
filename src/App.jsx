import React from 'react';
import NavBar from "./Components/Navbar/NavBar";
import Header from "./Components/Header/Header";
import RoutePage from "./Components/RoutePage/RoutePage";
import {UseHooks} from "./Components/Hooks/useHooks";
import NotAuthUsersPage from "./Components/Content/NotAuthPage/NotAuthUsersPage"
import style from './App.module.scss'

const App = () => {
    const {values} = UseHooks()
    const {isAuthNavBar} = values

    return (
        <>
            <div className={style.back}>
                <div className={style.wrapper}>
                    <Header/>
                </div>

                {!isAuthNavBar && <NotAuthUsersPage/>}

                <div className={style.NavContent}>
                    <div className={style.Nav}>
                        {isAuthNavBar && <> <NavBar/> </>}
                    </div>
                    <div className={style.Content}>
                        {isAuthNavBar && <> <RoutePage/> </>}
                    </div>
                </div>

            </div>
        </>
    )
}

export default App;
