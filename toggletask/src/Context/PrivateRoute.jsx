import { useContext } from "react"
import { AppContext } from "./AppContext"
import {Navigate} from "react-router-dom"
const PrivatRoutes=({children})=>{
    const {isAuth}=useContext(AppContext)
    if(!isAuth)
    {
        return <Navigate to="/login"/>
    }
    return children
}
export default PrivatRoutes