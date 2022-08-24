import Navbar from "./Navbar"
import {Text,Highlight, Box} from "@chakra-ui/react"
import Signup from "./SignUp"
import HomeCounter from "./Home_Counter"
const Landing=()=>{
    return(
        <div>
          <Navbar/>
          <Box border={"1px solid red"} width="100%" margin={"auto"} backgroundColor="rgb(44,19,56)">
            <Box border={"1px solid teal"} width="90%" margin={"auto"}>
            <Text color={"white"} fontSize='6xl'><Highlight query='better' styles={{fontStyle:"italic",color:"rgb(229,124,216)"}}>Time tracking for better work, not overwork.</Highlight></Text>
            </Box>
            <Box  border={"1px solid teal"} display={"flex"} width="90%" margin={"auto"} marginTop="40px" justifyContent={"space-between"} alignItems="center">
                <Signup/>
                <HomeCounter/>
            </Box>
          </Box>
          
        </div>
    )
}
export default Landing