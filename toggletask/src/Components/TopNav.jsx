import {Box, Input,Button,Text} from "@chakra-ui/react"
import styles from "../Styles/topNav.module.css"
import {AiOutlinePlus,AiFillPlayCircle} from "react-icons/ai"
import {BsFillTagFill,BsCurrencyDollar,BsFillStopCircleFill} from "react-icons/bs"
import {IoMdAddCircle} from "react-icons/io"
import CreateProject from "./TimerComponents/CreateProject"
import { useContext, useRef, useState } from "react"
import { AppContext } from "../Context/AppContext"
import ManageButton from "./TimerComponents/ManageButton"
import { getUser, postUser, updateUser } from "../Context/api"
import { getMyTime } from "../Context/getTime"
import SearchProject from "./TimerComponents/SearchProject"
const formateZero = (time) => {
    return time < 10 ? `0` + time : time;
  };
  
 export const TimeString = (time) => {
    // let mili = time % 1000;
    const seconds = time % 60;
    const minute = Math.floor(time / 60)  % 60;
    const hour=Math.floor(time/(60*60))%13
    return `${formateZero(hour)}:${formateZero(minute)}:${formateZero(seconds)}`;
  };
const TopNav=()=>{
    const {showButton,user,setUser,setShowProject}=useContext(AppContext)
    const [count,setCount]=useState(0)
    const [state,setState]=useState(true)
    const ref=useRef(null)
    const handleDuration=()=>{
        if(state)
        {
          handlePostUser()
        }
        setState(!state)
        if(!state)
        {
          clearInterval(ref.current)
          handlGetUser(count)
          setShowProject(true)
          // console.log(user)
          setCount(0)
          return
        }
       ref.current=setInterval(()=>{
          setCount((prev)=>prev+1)
       },1000)
    }
    const handlePostUser=()=>{
      console.log(user,"sanju")
       postUser(user).then((res)=>{
        console.log(res)
       }).catch((res)=>{
        // console.log(res)
       })
    }
    const handlGetUser=(count)=>{
      getUser(user.project_name).then((res)=>{
        // console.log(res,"hello")
        // console.log(res.data,"sanjay")
         let time=getMyTime()
         setUser({...res.data[0],end_duration:res.data[0].end_duration+count,end_time:time})
         updateUser({...res.data[0],end_duration:res.data[0].end_duration+count,end_time:time})
      })
    }
    // console.log(user)
    return(
        <Box className={styles.topNav}>
            <Box>
              {/* <Input fontWeight={"600"} fontSize="xl" focusBorderColor = "white" outline={"none"} border={"none"} color={"black"} placeholder="What are you working on?"/> */}
              <SearchProject/>
            </Box>
            <Box>
                {/* <Button fontSize={"sm"} _active={"none"} bg="none" _hover={{bg:"rgb(241,240,242)"}} gap={"10px"}><AiOutlinePlus  color="rgb(217,129,208)"/>Create a project</Button> */}
                {showButton ? <CreateProject/>:<ManageButton/>}
                <BsFillTagFill color="rgb(126,110,133)"/>
                <BsCurrencyDollar color="rgb(126,110,133)"/>
                <Box>
                    <Text>{TimeString(count)}</Text>
                    <button onClick={handleDuration}>{state ? <AiFillPlayCircle/>:<BsFillStopCircleFill fontSize={"35px"} color="rgb(232,113,97)"/>}</button>
                </Box>
                <Box>
                    <AiFillPlayCircle/>
                    <IoMdAddCircle/>
                </Box>
            </Box>
        </Box>
    )
}
export default TopNav