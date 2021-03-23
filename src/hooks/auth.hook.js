import {useCallback, useState, useEffect} from 'react'
import {useHooks} from "../Components/Hooks/useHooks";

const storageName = 'userData'

export const useAuth = () => {
    const {profile: {setUserData}} = useHooks()
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

    const login = useCallback((jwtToken, id, profileData) => {
        setToken(jwtToken);
        setUserId(id)
        setUserData({
            email: profileData.email,
            name: profileData.name,
            phone: profileData.phone,
            height: profileData.height,
            weight: profileData.weight,
            age: profileData.age
        })
        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken, profileData: profileData}))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.token) {
            login(data.token, data.userId, data.profileData)

        }
    }, [login])

    return { login, logout, token, userId }
}