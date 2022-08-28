import {Box} from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import LoaderPage from "../Components/loaderPage"
import SideNav from "../Components/SideNav"
import DefaultContainer from "../Components/TimerComponents/DefaultContainer"
import ProjectContainer from "../Components/TimerComponents/ProjectContainer"
import TopNav from "../Components/TopNav"
import { AppContext } from "../Context/AppContext"
import styles from "../Styles/timer.module.css"
const TimerPage=()=>{
    const [loading,setLoading]=useState(true)
    const {showProject}=useContext(AppContext)
    useEffect(()=>{
       setTimeout(()=>{
         setLoading(false)
       },2000)
    },[])
    if(loading)
    {
        return <LoaderPage/>
    }
    return(
        <Box className={styles.main}>
            <Box>
            <SideNav/>
            </Box>
            <Box>
            <TopNav/> 
            {showProject? <ProjectContainer/>:<DefaultContainer/>}
            </Box>      
        </Box>
    )
}
export default TimerPage