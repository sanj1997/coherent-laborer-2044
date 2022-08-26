import { Box, Highlight, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import {FaStopCircle} from "react-icons/fa"
import styles from "../Styles/main.module.css"
import Tilt from 'react-tilt'
const formateZero = (time) => {
    return time < 10 ? `0` + time : time;
  };
  
  const TimeString = (time) => {
    // let mili = time % 1000;
    const seconds = time % 60;
    const minute = Math.floor(time / 60)  % 60;
    const hour=Math.floor(time/(60*60))%13
    return `${formateZero(hour)}:${formateZero(minute)}:${formateZero(seconds)}`;
  };
const HomeCounter=()=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{
        const id=setInterval(()=>{
           setCount((prev)=>prev+1)
        },1000)
    },[])
    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",margin:"auto"}}>
            <div style={{width:"50%",margin:"auto",marginTop:60}}>
            <Tilt className="Tilt" options={{ max : 25 }} style={{width:"100%"}}>
              <div className="Tilt-inner" >
                <Box className={styles.counter}>
                  <Text>Stand-up meeting</Text>
                  <Text>{TimeString(count)}</Text>
                  < FaStopCircle/>
                </Box>
               </div>
            </Tilt>
            </div>
            <div style={{width:"60%",margin:"auto",marginTop:60}}>
                <div>
                    <Text width={"100%"} fontSize={"2xl"} color={"rgb(252,229,216)"}><Highlight query={"just one click"} styles={{fontStyle:"italic",color:"rgb(229,124,216)"}}>“I love the ease of just clocking in and out with just one click!”</Highlight></Text>
                </div>
                <div>
                    <Text display={"flex"} justifyContent="flex-end" color={"rgb(252,229,216)"}>– Quelani P.</Text>
                </div>
            </div>
        </div>
        
        
    )
}
export default HomeCounter