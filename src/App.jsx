// packages
import React from 'react';
import {useRoutes} from "./routes";
import {ToastContainer} from 'react-toastify';
// components
import NavBar from "./Components/Navbar/NavBar";
import Header from "./Components/Header/Header";
// hooks
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
// styles
import style from './App.module.scss'
import {connect} from "react-redux";


const App = props => {
  const { isAuth } = props;
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = isAuth
  const routes = useRoutes(isAuthenticated)


  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <div className={style.main}>
        <ToastContainer/>
        <div className={style.header}>
          <Header isAuth={isAuthenticated}/>
        </div>
        <div className={style.navContent}>
          {isAuthenticated && <NavBar/>}
          {routes}
        </div>
      </div>
    </AuthContext.Provider>
  )
}

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);