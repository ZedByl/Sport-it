import React, {useState, useContext, createContext} from "react";

export const Context = createContext(null)
export const useHooks = () => useContext(Context)

export const ContextProvider = (props) => {
    const [isModalSidebar, setIsModalSidebar] = useState(false)
    const [isModalEntry, setIsModalEntry] = useState(false)
    const [isModalReg, setIsModalReg] = useState(false)
    const [isModalProfile, setIsModalProfile] = useState(false)
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
            isModalSidebar,
            isModalEntry,
            isModalReg,
            setIsModalEntry,
            setIsModalReg,
            setIsModalSidebar
        },
        profile: {
            userData, setUserData,
            isModalProfile, setIsModalProfile
        }
    }

    return (
        <Context.Provider value={constance}>
            {props.children}
        </Context.Provider>
    )
}
