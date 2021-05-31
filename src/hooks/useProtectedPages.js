import { useLayoutEffect } from "react"
import { useHistory } from "react-router"
import { goToLoginPage } from "../routes/Coordinator"

const useProtectedPages = () => {
    const history = useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            goToLoginPage(history)
        }
    },[history])
}

export default useProtectedPages