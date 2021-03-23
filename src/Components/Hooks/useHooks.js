import React, {useState, useContext, createContext, useEffect} from "react";

export const Context = createContext(null)
export const useHooks = () => useContext(Context)

export const ContextProvider = (props) => {
    const [isModalEntry, setIsModalEntry] = useState(false)
    const [isModalReg, setIsModalReg] = useState(false)

    const [userData, setUserData] = useState({
        email: '',
        name: '',
        phone: '',
        height: '',
        weight: '',
        age: ''

    })
    const constance = {
        values: {
            isModalEntry,
            isModalReg,
            setIsModalEntry,
            setIsModalReg,
        },
        profile: {
            userData, setUserData
        }
    }

    return (
        <Context.Provider value={constance}>
            {props.children}
        </Context.Provider>
    )
}
