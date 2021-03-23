import React, {useState, useContext, createContext, useEffect} from "react";

export const Context = createContext(null)
export const useHooks = () => useContext(Context)

export const ContextProvider = (props) => {
    const [isModalEntry, setIsModalEntry] = useState(false)
    const [isModalReg, setIsModalReg] = useState(false)
    const [emailProfile, setEmailProfile] = useState('');
    const [phone, setPhone] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [editProfileName, setEditProfileName] = useState('');

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
            emailProfile, setEmailProfile,
            phone, setPhone,
            height, setHeight,
            weight, setWeight,
            age, setAge,
            editProfileName, setEditProfileName,
            userData, setUserData
        }
    }

    return (
        <Context.Provider value={constance}>
            {props.children}
        </Context.Provider>
    )
}
