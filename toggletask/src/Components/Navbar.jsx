import { Box,Text,Highlight, Button } from "@chakra-ui/react"
import {IoMdArrowDropdown} from "react-icons/io"
import { Link } from "react-router-dom"
import styles from "../Styles/navbar.module.css"
const Navbar=()=>{
    return(
        <>
         <Box className={styles.topnav}>
            <Box display={"flex"} gap="20px">
            <Text fontSize='xs'>Back to Toggl Global</Text>
            <Text fontSize='xs'>Products</Text>
            <Text fontSize='xs'>Blog</Text>
            <Text fontSize='xs'>Our mission</Text>
            <Text fontSize='xs'>Working at Toggl</Text>
            </Box>
         </Box>
         <Box className={styles.bottomnav}>
            <Box display={"flex"} justifyContent="space-between" alignItems={"center"}>
            <Link to="/"><Text fontSize='4xl' color={"rgb(229,124,216)"}><Highlight query='toggle' styles={{fontWeight:"1000",color:"rgb(229,124,216)"}}>toggle track</Highlight></Text></Link>
            <Button color={"white"} gap={"5px"} display={"flex"} alignItems="center"  _hover={{color:"rgb(229,124,216)"}} _active={"none"} backgroundColor={"transparent"}>Product <IoMdArrowDropdown/> </Button>
            <Button color={"white"} gap={"5px"} display={"flex"} alignItems="center" _hover={{color:"rgb(229,124,216)"}} _active={"none"} backgroundColor={"transparent"}>Pricing</Button>
            <Button color={"white"} gap={"5px"} display={"flex"} alignItems="center" _hover={{color:"rgb(229,124,216)"}} _active={"none"} backgroundColor={"transparent"}>Why Track? <IoMdArrowDropdown/> </Button>
            <Button color={"white"} gap={"5px"} display={"flex"} alignItems="center" _hover={{color:"rgb(229,124,216)"}} _active={"none"} backgroundColor={"transparent"}>careers <IoMdArrowDropdown/> </Button>
            </Box>
            <Box display={"flex"} justifyContent="space-between" alignItems={"center"}>
            <Button borderRadius={"none"} borderRight={"2px solid white"} color={"white"} gap={"5px"} display={"flex"} alignItems="center" _hover={{color:"rgb(229,124,216)"}} _active={"none"} backgroundColor={"transparent"}>Book a demo</Button>  
            <Link to="/login"><Button color={"white"} gap={"5px"} display={"flex"} alignItems="center" _hover={{color:"rgb(229,124,216)"}} _active={"none"} backgroundColor={"transparent"}>Log in</Button></Link> 
            <Link to="/timer"><Button color={"rgb(229,124,216)"} size={"lg"} bg="brand.100" _hover={{backgroundColor:"transparent"}} borderRadius="22px">Try for free</Button></Link>
            </Box>
         </Box>
        </>
    )
}
export default Navbar