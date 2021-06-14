// packages
import { useState } from 'react'
import { useAuth } from '../../hooks/auth.hook'


const useHamburger = () => {

  const { logout } = useAuth()
  // это тело хука, тут можно писать его логику, получение даных, хранить информацию и все что угодно
  const [openedBurgerMenu, setOpenedBurgerMenu] = useState(false)

  const logoutHandler = (e) => {
    e.preventDefault()
    logout()
  }

  const handleClick = (e) => {
    localStorage.setItem('lvl', e.target.id)
  }

  return {
    handleClick,
    logoutHandler,
    openedBurgerMenu,
    setOpenedBurgerMenu
  }
}

export default useHamburger
