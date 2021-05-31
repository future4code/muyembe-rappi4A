import { useLayoutEffect } from "react"
import { useHistory } from "react-router"
import { goToRestaurantListPage } from "../routes/Coordinator"

const useUnProtectedPages = () => {
    const history = useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            goToRestaurantListPage(history)
        }
    },[history])
}

export default useUnProtectedPages