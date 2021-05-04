import {useHttp} from "../../../hooks/http.hook";
import {useEffect} from "react";

export const useChat = () => {
  const {request} = useHttp()

  const testik = async () => {
    const data = await request('/user/find', "GET")
    console.log(data)
  }
  useEffect(() => {
    testik().then()
  })
}
