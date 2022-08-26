import { Routes,Route } from "react-router-dom"
import PrivatRoutes from "../Context/PrivateRoute"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import TimerPage from "./TimerPage"

const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/timer" element={<PrivatRoutes><TimerPage/></PrivatRoutes>}/>
        </Routes>
    )
}
export default AllRoutes