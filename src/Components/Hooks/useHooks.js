import React, {useState, useContext, createContext} from "react";

export const Context = createContext(null)
export const UseHooks = () => useContext(Context)

export const ContextProvider = (props) => {
    const [email, setEmailReg] = useState('')
    const [isModalEntry, setIsModalEntry] = useState(false)
    const [isModalReg, setIsModalReg] = useState(false)
    const [isAuthNavBar, setAuthNavBar] = useState(false)
    const [loginEntry, setLoginEntry] = useState('')
    const [loginReg, setLoginReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [passwordEntry, setPasswordEntry] = useState('')


    const constance = {

        values: {
            isModalEntry,
            isModalReg,
            isAuthNavBar,
            setIsModalEntry,
            setIsModalReg,
            setAuthNavBar,
        },
        formLogin: {
            loginEntry,
            passwordEntry,
            setLoginEntry,
            setPasswordEntry
        },
        formAuth: {
            loginReg,
            passwordReg,
            email,
            setLoginReg,
            setPasswordReg,
            setEmailReg
        }
    }

    return (
        <Context.Provider value={constance}>
            {props.children}
        </Context.Provider>
    )
}
