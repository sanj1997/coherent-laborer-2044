import {Box} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import LoaderPage from "../Components/loaderPage"
import SideNav from "../Components/SideNav"
import ProjectContainer from "../Components/TimerComponents/ProjectContainer"
import TopNav from "../Components/TopNav"
import styles from "../Styles/timer.module.css"
const TimerPage=()=>{
    const [loading,setLoading]=useState(true)
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
            <ProjectContainer/>
            </Box>      
        </Box>
    )
}
export default TimerPage