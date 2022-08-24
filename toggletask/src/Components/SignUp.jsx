import { Box, Stack,Input,Text, HStack, Button } from "@chakra-ui/react"
import {GrGoogle,GrApple} from "react-icons/gr"
import styles from "../Styles/main.module.css"
const Signup=()=>{
    return(
        <>
           <Box width="50%">
           <Stack  spacing={8} >
           <Text color={"rgb(252,229,216)"} fontSize='2xl' width={"85%"}>Join 5 million users in using the world's best time tracking software</Text>
           <Input width={"65%"} color={"brand.100"} backgroundColor={"rgb(44,19,56)"} _focus={{bg:"brand.100",color:"black"}} type={"email"} placeholder='Email' />
           <Input width={"65%"} color={"brand.100"} backgroundColor={"rgb(44,19,56)"} _focus={{bg:"brand.100",color:"black"}} type={"password"} placeholder='A strong password' />
           <Box display={"flex"} justifyContent="space-between" width={"80%"} gap="10px">
            <Input padding="5px" height={"50px"} fontWeight="600" cursor={"pointer"} borderRadius={"22px"} width={"40%"} color={"white"} bg="rgb(229,124,216)" type={"submit"} value="Sign up with email"/>
            <Box display={"flex"} justifyContent="space-evenly" gap={"20px"} alignItems={"center"}>
            <Text color={"rgb(252,229,216)"}>Or sign up with:</Text>
            <button className={styles.button}><GrGoogle/></button>
            <button className={styles.button}><GrApple/></button>
            </Box>
           </Box>
           <Text color={"rgb(252,229,216)"} fontSize='xs'>By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.</Text>
           </Stack>
           </Box>
        </>
    )
}
export default Signup