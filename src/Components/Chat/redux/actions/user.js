import { userApi } from './../../utils/api'

const Actions = {
  setIsAuth: bool => ({
    type: 'USER:SET_IS_AUTH',
    payload: bool,
  }),
  setUserData: data => ({
    type: "USER:SET_DATA",
    payload: data
  }),
  fetchUserData: () => dispatch => {
    userApi.getMe().then(({ data }) => {
      dispatch(Actions.setUserData(data))
    })
  },
  fetchUserLogin: postData => dispatch => {
    return userApi.login(postData).then(({ data }) => {
      const {status, token} = data
      dispatch(Actions.setUserData(data))
      dispatch(Actions.setIsAuth(true))
      window.axios.defaults.headers.common["token"] = token
      window.localStorage["token"] = token
      dispatch(Actions.fetchUserData())
      return data
    })
  },
  fetchUserRegister: postData => () => {
    return userApi.signUp(postData);
  },
}

export default Actions