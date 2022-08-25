import {Box,Text,Button} from "@chakra-ui/react"
import styles from "../Styles/home.module.css"
import {FcGoogle} from "react-icons/fc"
import {BsApple} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
const SignUpEmail=()=>{
    return(
        <Box className={styles.signUpEmail}>
           <Text textAlign={"left"}  fontSize="4xl" fontWeight={600}>Sign up for free</Text>
           <Text>All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required. Upgrade at the end of the trial or continue using Track for free.</Text>
           <Box>
            <Button gap={"10px"} borderRadius={"22px"} color={"black"} _active="none" bg="white" _hover={{bg:"rgb(250,227,215)"}}><FcGoogle/>Sign up via Google</Button>
            <Button gap={"10px"} borderRadius={"22px"} color={"black"}  _active="none" bg="white" _hover={{bg:"rgb(250,227,215)"}}><BsApple/>Sign up via Apple</Button>
           </Box>
           <Button width={"80%"} margin="auto" gap={"10px"} borderRadius={"22px"} color={"black"}  _active="none" bg="white" _hover={{bg:"rgb(250,227,215)"}}><AiOutlineMail/>or sign up via email</Button>
           <Text>By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.</Text>
        </Box>
    )
}
export default SignUpEmail