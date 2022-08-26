import {Box, Input,Button,Text} from "@chakra-ui/react"
import styles from "../Styles/topNav.module.css"
import {AiOutlinePlus,AiFillPlayCircle} from "react-icons/ai"
import {BsFillTagFill,BsCurrencyDollar,BsFillStopCircleFill} from "react-icons/bs"
import {IoMdAddCircle} from "react-icons/io"
import CreateProject from "./TimerComponents/CreateProject"
const TopNav=()=>{
    return(
        <Box className={styles.topNav}>
            <Box>
              <Input _placeholder="What are you working on?"/>
            </Box>
            <Box>
                {/* <Button fontSize={"sm"} _active={"none"} bg="none" _hover={{bg:"rgb(241,240,242)"}} gap={"10px"}><AiOutlinePlus  color="rgb(217,129,208)"/>Create a project</Button> */}
                <CreateProject/>
                <BsFillTagFill color="rgb(126,110,133)"/>
                <BsCurrencyDollar color="rgb(126,110,133)"/>
                <Box>
                    <Text>0:00:00</Text>
                    <AiFillPlayCircle/>
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