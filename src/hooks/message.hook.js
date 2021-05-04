import {useCallback} from 'react'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
export const useMessage = () => {

    return useCallback(text => {
        if (text) {
            const notify = () => toast.error(text, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return notify()
        }
    }, [])
}
