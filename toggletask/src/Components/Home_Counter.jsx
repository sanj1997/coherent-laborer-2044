import { Box, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import {FaStopCircle} from "react-icons/fa"
import styles from "../Styles/main.module.css"
import Tilt from 'react-tilt'
const HomeCounter=()=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{
        // const id=setInterval(()=>{
        //    setCount((prev)=>prev+1)
        // },1000)
    },[])
    return(
        <Tilt className="Tilt" options={{ max : 25 }} style={{width:350,marginRight:50}}>
            <div className="Tilt-inner" >
            <Box className={styles.counter}>
            <Text>Stand-up meeting</Text>
            <Text>{count}</Text>
            < FaStopCircle/>
            </Box>
            </div>
        
        </Tilt>
        
    )
}
export default HomeCounter