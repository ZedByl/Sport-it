import {useCallback, useState} from "react";
import {useHttp} from "../../../hooks/http.hook";



export const useProfileModal = () =>{

    const {request} = useHttp()

    const [form, setForm] = useState({
        name: '', email: '', phone: '', height: '', weight: '', age: ''
    })

    request('api/login/update', 'POST', {...form})

    const url = ''
    const edit = useCallback()


}