import React from 'react';
import Header from "./Components/Header/Header";
import style from './App.module.scss'
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import { ToastContainer} from 'react-toastify';

const App = () => {
    const {token, login, logout, userId} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <ToastContainer/>
                <div className={style.back}>
                    <div className={style.wrapper}>
                        <Header isAuth={isAuthenticated}/>
                    </div>
                        {routes}
                </div>
        </AuthContext.Provider>
    )
}

export default App;
